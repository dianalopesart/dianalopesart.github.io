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
