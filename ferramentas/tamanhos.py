# Gera tamanhos.js com largura e altura de cada arte usada em projetos.js.
# A Galeria usa isso para reservar o espaço de cada imagem antes de ela carregar.
# Rode de dentro da pasta do site: python3 ferramentas/tamanhos.py
import json, re
from PIL import Image
refs = sorted(set(re.findall(r'"(img/[^"]+)"', open('projetos.js').read())))
out = {}
for r in refs:
    try:
        with Image.open(r) as im: out[r] = list(im.size)
    except FileNotFoundError:
        pass
open('tamanhos.js', 'w').write('/* Gerado por ferramentas/tamanhos.py — não edite à mão */\nconst SIZES = ' + json.dumps(out, separators=(',', ':')) + ';\n')
print(len(out), 'artes')
