import { chromium } from 'playwright';
const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4321/';
const out = new URL('../screenshots/', import.meta.url).pathname;
const browser = await chromium.launch();
try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(base, { waitUntil: 'networkidle' });
  await desktop.screenshot({ path: `${out}desktop-top.png` });
  await desktop.screenshot({ path: `${out}desktop-full.png`, fullPage: true });
  console.log('desktop ok');
  await desktop.goto(base + 'courses/', { waitUntil: 'networkidle' });
  await desktop.screenshot({ path: `${out}courses.png` });
  console.log('courses ok');
  const mobile = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await mobile.goto(base, { waitUntil: 'networkidle' });
  await mobile.screenshot({ path: `${out}mobile-top.png` });
  await mobile.screenshot({ path: `${out}mobile-full.png`, fullPage: true });
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log('mobile ok, horizontal overflow =', overflow);
  const h1s = await mobile.evaluate(() => document.querySelectorAll('h1').length);
  console.log('mobile home h1 count =', h1s);
} finally { await browser.close(); }
