// Full audit: axe per page, overflow at 360/1280, H1 count, dead links, broken images, console errors.
// Usage: node scripts/audit.mjs [baseUrl] [routesFile]
import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const base = (process.argv[2] ?? 'http://127.0.0.1:4321').replace(/\/$/, '');
const routes = process.argv[3]
  ? readFileSync(process.argv[3], 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)
  : ['/', '/school/', '/courses/', '/courses/bharatanatyam/', '/timetable/', '/pricing/', '/gallery/', '/events/', '/book-trial/', '/contact/'];

const browser = await chromium.launch();
const results = [];
for (const route of routes) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 120)));
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + String(e).slice(0, 120)));
  const badResponses = [];
  page.on('response', (r) => { if (r.status() >= 400) badResponses.push(`${r.status()} ${new URL(r.url()).pathname}`); });
  let status = 0;
  try {
    const resp = await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 });
    status = resp?.status() ?? 0;
  } catch (e) { errors.push('GOTO ' + String(e).slice(0, 100)); }
  let axeCount = -1, axeIds = [];
  try {
    const axe = await new AxeBuilder({ page }).analyze();
    axeCount = axe.violations.length;
    axeIds = axe.violations.map((v) => `${v.id}(${v.impact},${v.nodes.length})`);
  } catch (e) { errors.push('AXE ' + String(e).slice(0, 80)); }
  const checks = await page.evaluate(() => {
    const h1 = document.querySelectorAll('h1').length;
    const title = document.title || '';
    const meta = !!document.querySelector('meta[name="description"]');
    const dead = [...document.querySelectorAll('a[href="#"]')].length;
    const brokenImgs = [...document.querySelectorAll('img')].filter((i) => i.complete && i.naturalWidth === 0).length;
    const noAlt = [...document.querySelectorAll('img')].filter((i) => i.getAttribute('alt') === null).length;
    const smallTargets = [...document.querySelectorAll('a,button')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.height < 24 || r.width < 24);
    }).length;
    return { h1, title: title.slice(0, 50), meta, dead, brokenImgs, noAlt, smallTargets };
  });
  // overflow at 360
  await page.setViewportSize({ width: 360, height: 800 });
  await page.waitForTimeout(350);
  const overflow360 = await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth));
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.waitForTimeout(200);
  const overflow1280 = await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth));
  results.push({ route, status, axeCount, axeIds, overflow360, overflow1280, ...checks, consoleErrors: errors.length, badResponses: badResponses.slice(0, 4), errors: errors.slice(0, 3) });
  console.log(JSON.stringify(results[results.length - 1]));
  await ctx.close();
}
await browser.close();
const totAxe = results.reduce((a, r) => a + Math.max(r.axeCount, 0), 0);
console.log(`\nSUMMARY: routes=${results.length} totalAxeViolations=${totAxe} overflow360Pages=${results.filter((r) => r.overflow360 > 0).length} deadHashLinks=${results.reduce((a, r) => a + r.dead, 0)} h1Bad=${results.filter((r) => r.h1 !== 1).length} brokenImgs=${results.reduce((a, r) => a + r.brokenImgs, 0)}`);
