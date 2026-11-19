// GSAP + Lenis motion — Creatix pattern. Transform/opacity only, reduced-motion safe,
// content visible without JS (gsap.from only hides once GSAP actually runs).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const toastEl = document.getElementById('toast');
let toastTimer = 0;
function showToast(msg: string) { if (!toastEl) return; toastEl.textContent = msg; toastEl.classList.add('show'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toastEl.classList.remove('show'), 4500); }
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  gsap.from('[data-hero]', { y: 16, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06 });
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    const siblings = [...(el.parentElement?.children ?? [])].filter((c) => c.classList.contains('reveal'));
    const delay = Math.min(Math.max(siblings.indexOf(el), 0) * 0.07, 0.21);
    gsap.from(el, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', delay, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || 0); const obj = { v: 0 };
    gsap.to(obj, { v: target, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%' }, onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-AU'); } });
  });
}
// Scroll progress / header / back-to-top
const progress = document.getElementById('scroll-progress'); const header = document.getElementById('site-header'); const toTop = document.getElementById('back-to-top');
let lastY = window.scrollY; let ticking = false;
function onScroll() { const y = window.scrollY; const max = document.documentElement.scrollHeight - window.innerHeight; if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`; if (header) { if (y > 300 && y > lastY + 4) header.classList.add('header-hidden'); else if (y < lastY - 4 || y <= 300) header.classList.remove('header-hidden'); } toTop?.classList.toggle('show', y > 600); lastY = y; ticking = false; }
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true }); onScroll();
toTop?.addEventListener('click', () => { if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); });
// FAQ accordion
document.querySelectorAll<HTMLElement>('[data-faq-btn]').forEach((btn) => { btn.addEventListener('click', () => { const panel = btn.parentElement?.nextElementSibling as HTMLElement | null; if (!panel) return; const open = panel.dataset.open === 'true'; panel.dataset.open = String(!open); btn.setAttribute('aria-expanded', String(!open)); }); });
// Gallery filter
const gBar = document.getElementById('gallery-filter'); const gCards = [...document.querySelectorAll<HTMLElement>('[data-gallery-card]')]; const gCount = document.getElementById('gallery-count');
if (gBar && gCards.length) { gBar.querySelectorAll<HTMLElement>('[data-filter]').forEach((btn) => { btn.addEventListener('click', () => { const f = btn.dataset.filter || 'All'; gBar.querySelectorAll('[data-filter]').forEach((b) => { const active = b === btn; b.setAttribute('aria-pressed', String(active)); b.classList.toggle('bg-crimson', active); b.classList.toggle('text-cream', active); }); let n = 0; gCards.forEach((c) => { const show = f === 'All' || c.dataset.category === f; c.style.display = show ? '' : 'none'; if (show) n++; }); if (gCount) gCount.textContent = `Showing ${n} of ${gCards.length} photos`; }); }); }
// Testimonial slider (simple)
const track = document.querySelector<HTMLElement>('#testi-track'); const slides = track?.querySelectorAll('[data-slide]'); const dots = [...document.querySelectorAll<HTMLElement>('[data-dot]')]; let idx = 0;
const go = (i: number) => { if (!track || !slides?.length) return; idx = (i + slides.length) % slides.length; track.style.transform = `translateX(-${idx * 100}%)`; dots.forEach((d, di) => { d.classList.toggle('bg-crimson', di === idx); d.classList.toggle('bg-crimson/25', di !== idx); }); };
document.getElementById('testi-prev')?.addEventListener('click', () => go(idx - 1)); document.getElementById('testi-next')?.addEventListener('click', () => go(idx + 1)); dots.forEach((d, di) => d.addEventListener('click', () => go(di)));
// Form helpers
function fieldError(input: HTMLElement, msg: string) { const err = document.getElementById(`${input.id}-error`); if (err) { err.textContent = msg; err.classList.remove('invisible'); } input.setAttribute('aria-invalid', 'true'); }
function fieldClear(input: HTMLElement) { const err = document.getElementById(`${input.id}-error`); if (err) { err.textContent = ''; err.classList.add('invisible'); } input.removeAttribute('aria-invalid'); }
function req(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null, label: string) { if (!input) return false; if (!input.value.trim()) { fieldError(input, `Please enter ${label}.`); return false; } fieldClear(input); return true; }
function em(input: HTMLInputElement | null) { if (!input) return false; if (!emailRe.test(input.value.trim())) { fieldError(input, 'Please enter a valid email address.'); return false; } fieldClear(input); return true; }
// Trial form
const tf = document.getElementById('trial-form') as HTMLFormElement | null;
if (tf) { tf.addEventListener('submit', (e) => { e.preventDefault(); const ok = [req(document.getElementById('tf-parent') as HTMLInputElement, 'parent name'), em(document.getElementById('tf-email') as HTMLInputElement), req(document.getElementById('tf-age') as HTMLInputElement, 'student age'), req(document.getElementById('tf-course') as HTMLSelectElement, 'a course')]; if (ok.includes(false)) { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); return; } tf.classList.add('hidden'); document.getElementById('trial-success')?.classList.remove('hidden'); showToast('Trial request received — we will be in touch within one business day.'); }); }
// Contact form
const cf = document.getElementById('contact-form') as HTMLFormElement | null;
if (cf) { cf.addEventListener('submit', (e) => { e.preventDefault(); const ok = [req(document.getElementById('cf-name') as HTMLInputElement, 'your name'), em(document.getElementById('cf-email') as HTMLInputElement), req(document.getElementById('cf-message') as HTMLTextAreaElement, 'a message')]; if (ok.includes(false)) { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); return; } cf.classList.add('hidden'); document.getElementById('contact-success')?.classList.remove('hidden'); showToast('Message sent (demo) — thank you!'); }); }
