#!/usr/bin/env node
// Driver do Radar: Chromium headless (Playwright) controlado por comandos no stdin.
// Uso:  node .claude/skills/run-radar-ia/driver.mjs < comandos.txt
//   ou  node .claude/skills/run-radar-ia/driver.mjs <<'EOF' ... EOF
// Uma linha por comando; linhas vazias e iniciadas por # são ignoradas.
// Playwright precisa estar instalado em /tmp/radar-driver (ver SKILL.md).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import readline from 'node:readline';

const require = createRequire('/tmp/radar-driver/');
const { chromium } = require('playwright');

const SHOTS = process.env.RADAR_SHOTS || '/tmp/radar-shots';
const BASE = process.env.RADAR_URL || 'http://localhost:4173/';
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox'],
});
let context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
let page = await context.newPage();
const erros = [];
const ligar = (p) => {
  p.on('pageerror', (e) => erros.push(`pageerror: ${e.message}`));
  p.on('console', (m) => { if (m.type() === 'error') erros.push(`console: ${m.text()}`); });
};
ligar(page);

// O site anima as seções com motion (whileInView): o que não passou pela
// tela fica com opacity 0 e o cabeçalho fixo cobre o topo das capturas.
const REVELAR = `section[id] * { opacity: 1 !important; transform: none !important; }
                 header { visibility: hidden !important; }`;

const log = (...a) => console.log('>', ...a);
const cmds = {
  async open(url) {
    await page.goto(url || BASE, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    log('aberto', page.url(), '| título:', await page.title());
  },
  async viewport(w, h) {
    await context.close();
    context = await browser.newContext({ viewport: { width: +w, height: +(h || 900) } });
    page = await context.newPage(); ligar(page);
    log(`viewport ${w}x${h || 900} (página nova: rode open de novo)`);
  },
  async reveal() { await page.addStyleTag({ content: REVELAR }); log('seções reveladas, cabeçalho oculto'); },
  async section(id) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded(); await page.waitForTimeout(500); log('na seção', id);
  },
  async nav(...rotulo) {
    await page.getByRole('navigation', { name: 'Seções desta edição' }).getByRole('button', { name: rotulo.join(' '), exact: true }).click();
    await page.waitForTimeout(800); log('menu →', rotulo.join(' '));
  },
  async mode(qual) {
    await page.getByRole('radio', { name: new RegExp(qual === 'executiva' ? 'executiva' : 'aprofundada', 'i') }).click();
    await page.waitForTimeout(300);
    log('modo', qual, '| seções com id:', await page.locator('section[id]').count());
  },
  async archive(n) {
    const botoes = page.locator('#edicoes').getByRole('button', { name: /Abrir edição/ });
    const b = botoes.nth(+(n || 0)); const nome = await b.innerText();
    await b.scrollIntoViewIfNeeded(); await b.click(); await page.waitForTimeout(800);
    log('abriu arquivo', n || 0, `(${nome.replace(/\s+/g, ' ')})`, '| h1:', (await page.locator('h1').first().innerText()).replace(/\s+/g, ' ').slice(0, 80));
  },
  async back() {
    await page.getByRole('button', { name: 'Edição atual' }).click(); await page.waitForTimeout(600); log('voltou à edição atual');
  },
  async click(...sel) { await page.locator(sel.join(' ')).first().click(); await page.waitForTimeout(400); log('clicou', sel.join(' ')); },
  async text(...sel) {
    const t = await page.locator(sel.join(' ')).first().innerText();
    console.log(t.replace(/\n{2,}/g, '\n').slice(0, 1500));
  },
  async shot(nome = 'tela') { const f = `${SHOTS}/${nome}.png`; await page.screenshot({ path: f }); log('screenshot', f); },
  async fullpage(nome = 'pagina') { const f = `${SHOTS}/${nome}.png`; await page.screenshot({ path: f, fullPage: true }); log('screenshot', f); },
  async 'shot-el'(sel, nome = 'elemento') {
    const f = `${SHOTS}/${nome}.png`; await page.locator(sel).first().screenshot({ path: f }); log('screenshot', f);
  },
  async check() {
    const r = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      fontes: [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family))],
      secoes: document.querySelectorAll('section[id]').length,
      imagensQuebradas: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
      janela: document.querySelector('header')?.innerText.match(/\d+–\d+ \w+ \d{4}/)?.[0] ?? null,
    }));
    console.log(JSON.stringify({ ...r, erros }, null, 2));
  },
  async wait(ms) { await page.waitForTimeout(+ms || 500); },
};

const rl = readline.createInterface({ input: process.stdin });
for await (const bruta of rl) {
  const linha = bruta.trim();
  if (!linha || linha.startsWith('#')) continue;
  const [cmd, ...args] = linha.split(/\s+/);
  if (cmd === 'quit') break;
  if (!cmds[cmd]) { console.log('? comando desconhecido:', cmd, '| comandos:', Object.keys(cmds).join(', '), ', quit'); continue; }
  try { await cmds[cmd](...args); } catch (e) { console.log(`! ${cmd} falhou: ${e.message.split('\n')[0]}`); }
}
await browser.close();
