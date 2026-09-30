#!/usr/bin/env python3
"""Extrai as afirmações checáveis da edição viva do Radar.

Uso:
  python3 .claude/skills/fact-check/scripts/extrair_afirmacoes.py [pasta_de_saida]

Lê src/app/App.tsx, recorta a edição viva (da função App até a seção
"edicoes") e gera, na pasta de saída:
  - afirmacoes.csv : uma linha por frase checável, com seção, cartão,
                     campo, tipos detectados e fonte do cartão
  - numeros.md     : cada número/percentual/valor com todas as frases em
                     que aparece, para conferir coerência entre seções
  - resumo.txt     : janela da edição e contagem por tipo
Só lê o código; não altera nada.
"""
import csv, re, sys, collections, pathlib

RAIZ = pathlib.Path(__file__).resolve().parents[4]
APP = RAIZ / 'src/app/App.tsx'
SAIDA = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '/tmp/fact-check')
SAIDA.mkdir(parents=True, exist_ok=True)

texto = APP.read_text(encoding='utf-8')
viva = texto[texto.index('export default function App'):texto.index('<section id="edicoes"')]

MESES = r'(?:jan(?:eiro)?|fev(?:ereiro)?|mar(?:ço)?|abr(?:il)?|mai(?:o)?|jun(?:ho)?|jul(?:ho)?|ago(?:sto)?|set(?:embro)?|out(?:ubro)?|nov(?:embro)?|dez(?:embro)?)'
TIPOS = {
    'ABSOLUTO': r'\b(?:nenhum[a]?|ningu[ée]m|[úu]nic[oa]s?|primeir[oa]s?|pela primeira vez|maior(?:es)?|menor(?:es)?|todos|todas|sempre|nunca|jamais|mais (?:barato|caro|exposto|pr[óo]ximo))\b',
    'AUSENCIA': r'\b(?:n[ãa]o localizamos|n[ãa]o houve|sem (?:homologa|lan[çc]amento|posi[çc])|ainda n[ãa]o|continua sem|segue sem)',
    'DATA': r'\b\d{1,2}(?:º)?(?:\s*[–-]\s*\d{1,2})?\s+(?:de\s+)?' + MESES + r'\b|\b' + MESES + r'/\d{4}\b|\b(?:19|20)\d{2}\b',
    'NUMERO': r'\b\d[\d.,]*\s*(?:%|mil|milh[õo]es|bilh[õo]es|vezes|escolas|alunos|professores|pontos?|participantes|adultos)\b|(?:R\$|US\$)\s*\d[\d.,]*|\bp\s*=\s*0,\d+',
    'CITACAO': r'“[^”]+”|"[^"]{12,}"',
    'PRODUTO_PROPRIO': r'\b(?:nosso|nossa|nossos|nossas|o produto|nossas propostas)\b',
}
ANCORAS = ('titulo', 'tema', 'cat', 'nome', 'player', 'autor', 'empresa', 'item', 'ponto', 'conclusao', 'oportunidade', 'rastreio')
IGNORAR = {'tagCor', 'color', 'cor', 'badge', 'corBadge', 'corMercado', 'janela', 'prioridade', 'area',
           'maturidade', 'fonte', 'link', 'linkLabel', 'fonteLabel', 'tipo', 'exposicao', 'impacto_badge'}

def frases(s):
    return [f.strip() for f in re.split(r'(?<=[.!?])\s+(?=[A-ZÀ-Ú"“])', s) if len(f.strip()) > 3]

def tipos_de(f):
    return [t for t, p in TIPOS.items() if re.search(p, f, re.I)]

linhas, secao, cartao, fonte = [], 'topo', '', ''
obj = {}
for bruta in viva.split('\n'):
    l = bruta.strip()
    m = re.search(r'<section id="([^"]+)"', l)
    if m:
        secao, cartao, fonte, obj = m.group(1), '', '', {}
        continue
    if l in ('{', '{[', '[', '{[{'):
        obj, cartao, fonte = {}, '', ''
    campos = re.findall(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', l)
    if campos:
        for k, v in campos:
            v = v.replace('\\"', '"')
            obj[k] = v
            if k in ('fonte', 'link'):
                fonte = v
                for row in linhas:
                    if row['secao'] == secao and row['cartao'] == cartao and not row['fonte']:
                        row['fonte'] = v
            if k in ANCORAS and (not cartao or k in ('titulo', 'tema', 'cat', 'nome', 'player', 'autor', 'item', 'ponto', 'conclusao', 'oportunidade', 'empresa')):
                if not (k == 'empresa' and cartao and obj.get('titulo')):
                    cartao = v[:90]
                    for row in linhas[-12:]:
                        if row['secao'] == secao and row.get('_obj') == id(obj):
                            row['cartao'] = cartao
            if k in IGNORAR:
                continue
            for f in frases(v):
                linhas.append({'secao': secao, 'cartao': cartao, 'campo': k, 'frase': f, '_obj': id(obj),
                               'tipos': ' '.join(tipos_de(f)), 'fonte': obj.get('fonte') or obj.get('link') or ''})
        continue
    # texto corrido de JSX (capa, intros, conclusões)
    if not l.startswith(('<', '{', '}', ')', '/', '[', ']')) and 'className' not in l and re.search(r'[a-zà-ú]{3} [a-zà-ú]', l) and '=' not in l[:25]:
        limpo = re.sub(r'<[^>]+>', '', l)
        for f in frases(limpo):
            linhas.append({'secao': secao, 'cartao': '(texto da seção)', 'campo': 'jsx', 'frase': f, '_obj': None,
                           'tipos': ' '.join(tipos_de(f)), 'fonte': ''})

checaveis = [r for r in linhas if r['tipos']]
with open(SAIDA / 'afirmacoes.csv', 'w', newline='', encoding='utf-8') as fh:
    w = csv.DictWriter(fh, fieldnames=['id', 'secao', 'cartao', 'campo', 'tipos', 'frase', 'fonte', 'leitura', 'status', 'acao'])
    w.writeheader()
    for i, r in enumerate(checaveis, 1):
        w.writerow({'id': i, **{k: v for k, v in r.items() if k != '_obj'}, 'leitura': '', 'status': '', 'acao': ''})

nums = collections.defaultdict(list)
for r in linhas:
    for n in re.findall(TIPOS['NUMERO'], r['frase'], re.I):
        chave = re.sub(r'\s+', ' ', n.strip().lower())
        nums[chave].append(f"[{r['secao']} · {r['cartao'][:40]}] {r['frase']}")
with open(SAIDA / 'numeros.md', 'w', encoding='utf-8') as fh:
    for k in sorted(nums, key=lambda x: (-len(nums[x]), x)):
        fh.write(f'## {k}  ({len(nums[k])}x)\n' + ''.join(f'- {x}\n' for x in nums[k]) + '\n')

janela = re.search(r'tabular-nums">([^<]+)</span>', texto[texto.index('export default function App'):])
cont = collections.Counter(t for r in checaveis for t in r['tipos'].split())
with open(SAIDA / 'resumo.txt', 'w', encoding='utf-8') as fh:
    fh.write(f"Janela da edição (cabeçalho): {janela.group(1) if janela else 'não encontrada'}\n")
    fh.write(f'Frases lidas: {len(linhas)} · checáveis: {len(checaveis)}\n')
    for t, n in cont.most_common():
        fh.write(f'  {t}: {n}\n')
print((SAIDA / 'resumo.txt').read_text(encoding='utf-8'))
print(f'Arquivos em {SAIDA}')
