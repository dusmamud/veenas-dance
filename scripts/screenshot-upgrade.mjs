// Screenshots for the world-class upgrade verification.
import { chromium } from 'playwright';
const base = process.argv[2] ?? 'http://127.0.0.1:4323';
const shots = [
  { name: 'desktop-top', url: '/', w: 1440, h: 900, full: false },
  { name: 'desktop-full', url: '/', w: 1440, h: 900, full: true },
  { name: 'mobile-top', url: '/', w: 360, h: 800, full: false },
  { name: 'mobile-full', url: '/', w: 360, h: 800, full: true },
  { name: 'child-safety', url: '/child-safety/', w: 1440, h: 900, full: false },
  { name: 'arangetram', url: '/arangetram/', w: 1440, h: 900, full: false },
  { name: 'enrol', url: '/enrol/', w: 1440, h: 900, full: false },
  { name: 'teachers', url: '/teachers/', w: 1440, h: 900, full: false },
  { name: 'performances', url: '/performances/', w: 1440, h: 900, full: false },
  { name: 'term-dates', url: '/term-dates/', w: 1440, h: 900, full: false },
  { name: 'classes-by-age-mobile', url: '/classes-by-age/', w: 360, h: 800, full: false },
  { name: 'timetable-mobile', url: '/timetable/', w: 360, h: 800, full: false },
];
const browser = await chromium.launch();
for (const s of shots) {
  const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h } });
  const page = await ctx.newPage();
  await page.goto(base + s.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  // scroll through to trigger reveals for full-page shots
  if (s.full) { await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); }); await page.waitForTimeout(600); }
  await page.screenshot({ path: `screenshots/${s.name}.png`, fullPage: s.full });
  console.log('shot', s.name);
  await ctx.close();
}
await browser.close();
