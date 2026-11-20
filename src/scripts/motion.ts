// GSAP + Lenis motion — Creatix pattern, expanded. Transform/opacity only,
// reduced-motion safe, content visible without JS (gsap.from only hides once GSAP runs).
// Framer Motion is React-only and intentionally NOT used — this is the Astro-native stack.
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
  // Stagger children of reveal groups (cards grids on new pages)
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    gsap.from(group.children, { opacity: 0, y: 26, duration: 0.7, ease: 'power3.out', stagger: 0.09, scrollTrigger: { trigger: group, start: 'top 85%', once: true } });
  });
  // Subtle hero parallax (transform only)
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top top', end: 'bottom top', scrub: true } });
  });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || 0); const obj = { v: 0 };
    gsap.to(obj, { v: target, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%' }, onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-AU'); } });
  });
  // Magnetic primary CTAs (fine pointers only)
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.28, duration: 0.3 }); });
      el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' }));
    });
  }
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
// Timetable filter (day + form, combined)
const ttCards = [...document.querySelectorAll<HTMLElement>('[data-tt-card]')];
const ttCount = document.getElementById('timetable-count');
if (ttCards.length) {
  let day = 'All'; let form = 'All';
  const apply = () => {
    let n = 0;
    ttCards.forEach((c) => { const show = (form === 'All' || c.dataset.course === form); c.style.display = show ? '' : 'none'; if (show) n++; });
    document.querySelectorAll<HTMLElement>('[data-day-block]').forEach((block) => {
      const dayMatch = day === 'All' || block.dataset.dayBlock === day;
      const hasVisible = [...block.querySelectorAll<HTMLElement>('[data-tt-card]')].some((c) => c.style.display !== 'none');
      block.style.display = dayMatch && hasVisible ? '' : 'none';
    });
    if (ttCount) ttCount.textContent = (day === 'All' && form === 'All') ? `Showing all ${ttCards.length} classes` : `Showing ${day === 'All' ? n : [...document.querySelectorAll<HTMLElement>('[data-day-block]')].filter((b) => b.style.display !== 'none').reduce((a, b) => a + [...b.querySelectorAll<HTMLElement>('[data-tt-card]')].filter((c) => c.style.display !== 'none').length, 0)} classes${day !== 'All' ? ` on ${day}` : ''}${form !== 'All' ? ` · ${form}` : ''}`;
  };
  const wire = (attr: string, set: (v: string) => void) => {
    document.querySelectorAll<HTMLElement>(`[${attr}]`).forEach((btn) => btn.addEventListener('click', () => {
      set(btn.getAttribute(attr) || 'All');
      document.querySelectorAll<HTMLElement>(`[${attr}]`).forEach((b) => { const active = b === btn; b.setAttribute('aria-pressed', String(active)); b.classList.toggle('bg-crimson', active); b.classList.toggle('text-cream', active); b.classList.toggle('bg-mist', !active); b.classList.toggle('text-ink', !active); });
      apply();
    }));
  };
  wire('data-day-filter', (v) => { day = v; });
  wire('data-form-filter', (v) => { form = v; });
}
// Testimonial slider (manual + gentle autoplay, pauses on interaction)
const track = document.querySelector<HTMLElement>('#testi-track'); const slides = track?.querySelectorAll('[data-slide]'); const dots = [...document.querySelectorAll<HTMLElement>('[data-dot]')]; let idx = 0;
const go = (i: number) => { if (!track || !slides?.length) return; idx = (i + slides.length) % slides.length; track.style.transform = `translateX(-${idx * 100}%)`; dots.forEach((d, di) => { const dot = d.querySelector('span'); if (dot) { dot.classList.toggle('bg-crimson', di === idx); dot.classList.toggle('bg-crimson/25', di !== idx); } d.setAttribute('aria-current', String(di === idx)); }); };
document.getElementById('testi-prev')?.addEventListener('click', () => go(idx - 1)); document.getElementById('testi-next')?.addEventListener('click', () => go(idx + 1)); dots.forEach((d, di) => d.addEventListener('click', () => go(di)));
if (track && slides && slides.length > 1 && !reduced) {
  let paused = false;
  const view = document.getElementById('testi-viewport');
  view?.addEventListener('pointerenter', () => { paused = true; }); view?.addEventListener('pointerleave', () => { paused = false; });
  view?.addEventListener('focusin', () => { paused = true; }); view?.addEventListener('focusout', () => { paused = false; });
  window.setInterval(() => { if (!paused && !document.hidden) go(idx + 1); }, 6000);
}
// Form helpers
function fieldError(input: HTMLElement, msg: string) { const err = document.getElementById(`${input.id}-error`); if (err) { err.textContent = msg; err.classList.remove('invisible'); } input.setAttribute('aria-invalid', 'true'); }
function fieldClear(input: HTMLElement) { const err = document.getElementById(`${input.id}-error`); if (err) { err.textContent = ''; err.classList.add('invisible'); } input.removeAttribute('aria-invalid'); }
function req(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null, label: string) { if (!input) return false; if (!input.value.trim()) { fieldError(input, `Please enter ${label}.`); return false; } fieldClear(input); return true; }
function em(input: HTMLInputElement | null) { if (!input) return false; if (!emailRe.test(input.value.trim())) { fieldError(input, 'Please enter a valid email address.'); return false; } fieldClear(input); return true; }
function focusFirstError() { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); }
// Trial form
const tf = document.getElementById('trial-form') as HTMLFormElement | null;
if (tf) { tf.addEventListener('submit', (e) => { e.preventDefault(); const ok = [req(document.getElementById('tf-parent') as HTMLInputElement, 'parent name'), em(document.getElementById('tf-email') as HTMLInputElement), req(document.getElementById('tf-age') as HTMLInputElement, 'student age'), req(document.getElementById('tf-course') as HTMLSelectElement, 'a course')]; if (ok.includes(false)) { focusFirstError(); return; } tf.classList.add('hidden'); document.getElementById('trial-success')?.classList.remove('hidden'); showToast('Trial request received — we will be in touch within one business day.'); }); }
// Contact form
const cf = document.getElementById('contact-form') as HTMLFormElement | null;
if (cf) { cf.addEventListener('submit', (e) => { e.preventDefault(); const ok = [req(document.getElementById('cf-name') as HTMLInputElement, 'your name'), em(document.getElementById('cf-email') as HTMLInputElement), req(document.getElementById('cf-message') as HTMLTextAreaElement, 'a message')]; if (ok.includes(false)) { focusFirstError(); return; } cf.classList.add('hidden'); document.getElementById('contact-success')?.classList.remove('hidden'); showToast('Message sent (demo) — thank you!'); }); }
// Enrol form
const ef = document.getElementById('enrol-form') as HTMLFormElement | null;
if (ef) { ef.addEventListener('submit', (e) => { e.preventDefault();
  const consent = document.getElementById('ef-consent-policies') as HTMLInputElement | null;
  let consentOk = true;
  if (consent) { if (!consent.checked) { fieldError(consent, 'Please confirm you have read the fees, policies and child safety commitment.'); consentOk = false; } else fieldClear(consent); }
  const ok = [req(document.getElementById('ef-parent') as HTMLInputElement, 'parent name'), em(document.getElementById('ef-email') as HTMLInputElement), req(document.getElementById('ef-phone') as HTMLInputElement, 'a mobile number'), req(document.getElementById('ef-student') as HTMLInputElement, 'student first name'), req(document.getElementById('ef-age') as HTMLInputElement, 'student age'), req(document.getElementById('ef-course') as HTMLSelectElement, 'a course'), consentOk];
  if (ok.includes(false)) { focusFirstError(); return; }
  const ref = document.getElementById('enrol-ref'); if (ref) ref.textContent = 'VS-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  ef.classList.add('hidden'); document.getElementById('enrol-success')?.classList.remove('hidden'); document.getElementById('enrol-success')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  showToast('Enrolment received — batch confirmation within one business day.'); }); }
// Hire-the-troupe form
const hf = document.getElementById('hire-form') as HTMLFormElement | null;
if (hf) { hf.addEventListener('submit', (e) => { e.preventDefault(); const ok = [req(document.getElementById('hf-name') as HTMLInputElement, 'your name'), em(document.getElementById('hf-email') as HTMLInputElement), req(document.getElementById('hf-type') as HTMLSelectElement, 'an event type'), req(document.getElementById('hf-message') as HTMLTextAreaElement, 'a few details about your event')]; if (ok.includes(false)) { focusFirstError(); return; } hf.classList.add('hidden'); document.getElementById('hire-success')?.classList.remove('hidden'); showToast('Performance enquiry sent — we reply within one business day.'); }); }
// Newsletter (footer)
const nl = document.getElementById('newsletter-form') as HTMLFormElement | null;
if (nl) { nl.addEventListener('submit', (e) => { e.preventDefault(); if (!em(document.getElementById('nl-email') as HTMLInputElement)) { focusFirstError(); return; } nl.querySelectorAll('input,button').forEach((el) => el.classList.add('hidden')); document.getElementById('nl-success')?.classList.remove('hidden'); showToast('Subscribed (mock) — term news coming your way.'); }); }
