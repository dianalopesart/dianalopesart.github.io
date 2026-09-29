#!/bin/bash
# Gera os PDFs do portfólio (português e inglês) a partir de pdf.html.
# Rode de dentro da pasta do site: bash ferramentas/gerar-pdf.sh
# Saída: Diana-Lopes-Portfolio-PT.pdf e Diana-Lopes-Portfolio-EN.pdf
set -euo pipefail
cd "$(dirname "$0")/.."

# 1. Versões menores das artes, só para o PDF (deixa o arquivo leve para e-mail e WhatsApp)
python3 - <<'EOF'
import os, re
from PIL import Image
refs = set(re.findall(r'"(img/[^"]+\.(?:jpg|png|webp))"', open('projetos.js').read()))
made = 0
for src in refs:
    dst = 'img/pdf/' + src[4:]
    dst = os.path.splitext(dst)[0] + '.jpg' if not src.endswith('.jpg') else dst
    if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
        continue
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im = Image.open(src).convert('RGB')
    im.thumbnail((900, 1400))
    im.save(dst, quality=78, optimize=True, progressive=True)
    made += 1
print(f'{made} imagens reduzidas para o PDF')

# Fundos das páginas já com o brilho desfocado "assado" na imagem.
# Leitores simples de PDF (WhatsApp, prévia do celular) não desenham desfoque nem sombra.
from PIL import ImageFilter, ImageDraw
W, H = 1588, 2246            # A4 em 192 dpi
BG = (10, 10, 11)
ORANGE, PINK = (255, 106, 31), (255, 94, 138)
def blob(img, cx, cy, r, color, alpha):
    layer = Image.new('RGB', img.size, (0, 0, 0)); m = Image.new('L', img.size, 0)
    ImageDraw.Draw(m).ellipse([cx - r, cy - r, cx + r, cy + r], fill=int(255 * alpha))
    m = m.filter(ImageFilter.GaussianBlur(r * .55))
    layer.paste(color, (0, 0, *img.size)); img.paste(layer, (0, 0), m)
def save(img, name): img.save(f'img/pdf/bg-{name}.jpg', quality=88)
# topo: foto desfocada + brilhos laranja e rosa + escurece para baixo (igual ao hero do site)
hero = Image.open('img/diana-2.jpg').convert('RGB').resize((W, W)).crop((0, 0, W, W))
hero = hero.resize((int(W * 1.2), int(H * 1.2))).crop((int(W * .1), int(H * .05), int(W * .1) + W, int(H * .05) + H))
hero = hero.filter(ImageFilter.GaussianBlur(90))
img = Image.blend(Image.new('RGB', (W, H), BG), hero, .5)
blob(img, int(W * .15), int(H * .55), 700, ORANGE, .45)
blob(img, int(W * .85), int(H * .2), 600, PINK, .35)
fade = Image.linear_gradient('L').resize((W, H)).point(lambda v: min(255, int(v * 1.25)))
img.paste(Image.new('RGB', (W, H), BG), (0, 0), fade)
save(img, 'topo')
for name, spots in {
    'marcas':    [(-.1, .3, 560, ORANGE, .5)],
    'projetos':  [(1.08, .45, 520, PINK, .4)],
    'expertise': [(.55, 1.02, 620, ORANGE, .38), (.45, 1.05, 420, PINK, .25)],
    'contato':   [(1.0, 1.0, 560, PINK, .4), (.95, .95, 360, ORANGE, .3)],
}.items():
    img = Image.new('RGB', (W, H), BG)
    for x, y, r, c, a in spots: blob(img, int(W * x), int(H * y), r, c, a)
    save(img, name)
print('fundos das páginas gerados')

# Capas das marcas levemente desfocadas, como no site (o PDF não desfoca sozinho)
import glob
covers = re.findall(r'cover: "(img/[^"]+)", logo:', open('dados.js').read())
for src in covers:
    im = Image.open(src).convert('RGB'); im.thumbnail((900, 900))
    im.filter(ImageFilter.GaussianBlur(max(2, im.width / 180))).save('img/pdf/marca-' + os.path.splitext(os.path.basename(src))[0] + '.jpg', quality=85)
print(len(covers), 'capas de marcas desfocadas')
EOF

# 2. Servidor local só enquanto gera
PORT=8765
python3 -m http.server $PORT >/dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null' EXIT
sleep 1

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for L in pt en; do
  OUT="Diana-Lopes-Portfolio-$(echo $L | tr a-z A-Z).pdf"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
    --virtual-time-budget=20000 --print-to-pdf="$OUT" "http://localhost:$PORT/pdf.html?lang=$L" 2>/dev/null
  echo "$OUT: $(du -h "$OUT" | cut -f1)"
done
