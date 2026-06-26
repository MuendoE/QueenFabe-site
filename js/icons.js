/* ==========================================================================
   QUEEN OF FABULOUSNESS — inline SVG icon set
   Line-art icons used for product/course visuals and UI glyphs. Using inline
   SVG (rather than <img>) so icons inherit color via CSS `color`.
   ========================================================================== */

const ICONS = {
  /* ---- product container shapes ---- */
  dropper: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="32" y="42" width="36" height="42" rx="4"/><rect x="40" y="30" width="20" height="14" rx="2"/><line x1="50" y1="14" x2="50" y2="30"/><ellipse cx="50" cy="12" rx="5" ry="4"/><line x1="38" y1="58" x2="62" y2="58"/></svg>`,

  jar: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="42" width="48" height="38" rx="6"/><rect x="22" y="30" width="56" height="14" rx="3"/><line x1="34" y1="54" x2="66" y2="54"/><line x1="34" y1="64" x2="66" y2="64"/></svg>`,

  tube: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M40 20 h20 v14 h-20 z"/><path d="M38 34 h24 c4 0 6 4 6 10 v32 c0 8 -6 14 -18 14 s-18 -6 -18 -14 v-32 c0 -6 2 -10 6 -10 z"/><line x1="36" y1="50" x2="64" y2="50"/></svg>`,

  lipstick: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M42 20 l16 0 l4 22 l-24 0 z"/><rect x="36" y="42" width="28" height="40" rx="3"/><line x1="36" y1="58" x2="64" y2="58"/></svg>`,

  pump: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="40" height="46" rx="5"/><rect x="40" y="26" width="20" height="12" rx="2"/><path d="M50 26 v-10 h14"/><line x1="38" y1="56" x2="62" y2="56"/></svg>`,

  perfume: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="34" y="40" width="32" height="44" rx="3"/><rect x="42" y="28" width="16" height="12" rx="2"/><rect x="44" y="16" width="12" height="12" rx="2"/><line x1="40" y1="58" x2="60" y2="58"/><line x1="40" y1="68" x2="60" y2="68"/></svg>`,

  mascara: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="38" y="20" width="24" height="34" rx="4"/><line x1="50" y1="54" x2="50" y2="78"/><ellipse cx="50" cy="82" rx="5" ry="4"/></svg>`,

  compact: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="55" r="26"/><path d="M28 50 a22 10 0 0 1 44 0"/><circle cx="50" cy="55" r="10"/></svg>`,

  /* ---- ui glyphs ---- */
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.3" y1="15.3" x2="21" y2="21"/></svg>`,

  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M6 8 h12 l-1 13 H7 z"/><path d="M9 8 a3 3 0 0 1 6 0"/></svg>`,

  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20 c1.5-4.5 5-6 7.5-6 s6 1.5 7.5 6"/></svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,

  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 C5 9 13 4 20 4 C20 13 13 19 5 19 Z"/><path d="M5 19 C9 14 13 11 19 5"/></svg>`,

  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="12" height="9"/><path d="M14 10 h4 l3 3 v3 h-7 z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,

  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="9" width="18" height="11"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="12" y1="9" x2="12" y2="20"/><path d="M12 9 C9 9 8 4 12 4 C16 4 15 9 12 9 Z"/></svg>`,

  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 3 l8 3.5 v6 C20 17 16.5 20 12 21 C7.5 20 4 17 4 12.5 v-6 Z"/><path d="M9 12 l2.3 2.3 L15.5 9.5"/></svg>`,

  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 20 C6 15.5 3 12.2 3 8.6 C3 5.8 5.2 4 7.6 4 C9.4 4 11 5 12 6.6 C13 5 14.6 4 16.4 4 C18.8 4 21 5.8 21 8.6 C21 12.2 18 15.5 12 20 Z"/></svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5.5" width="18" height="13"/><path d="M3 6 l9 7 9-7"/></svg>`,

  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M5 4 h4 l1.5 4.5 -2.3 1.8 a13 13 0 0 0 6.5 6.5 l1.8-2.3 4.5 1.5 v4 c0 1-1 1.5-2 1.5 C10 21 3 14 3 6 c0-1 .5-2 2-2 Z"/></svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 21 C8 16.5 5 13 5 9.5 a7 7 0 1 1 14 0 C19 13 16 16.5 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5"/><path d="M7.5 12.5 l3 3 6-6.5"/></svg>`,

  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 3 l1.8 6.2 L20 11 l-6.2 1.8 L12 19 l-1.8-6.2 L4 11 l6.2-1.8 Z"/></svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5"/><path d="M12 7 v5 l3.5 2"/></svg>`,

  /* ---- academy ui glyphs ---- */
  crown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M3 17 L4.5 8 L9 12.5 L12 6 L15 12.5 L19.5 8 L21 17 Z"/><line x1="3" y1="20" x2="21" y2="20"/></svg>`,

  certificate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="13" rx="1.5"/><line x1="7" y1="7" x2="17" y2="7"/><line x1="7" y1="10.5" x2="14" y2="10.5"/><path d="M9 16 L9 21 L12 19 L15 21 L15 16"/></svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="7.5" y1="3" x2="7.5" y2="7"/><line x1="16.5" y1="3" x2="16.5" y2="7"/></svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8" r="3.2"/><path d="M2.5 19 c1.2-3.6 3.8-5 6-5 s4.8 1.4 6 5"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2 c2.4 0.3 4.3 1.7 5.2 4.8"/></svg>`,

  graduationCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M2 9 L12 4 L22 9 L12 14 Z"/><path d="M6 11.5 V17 C6 18.5 9 20 12 20 C15 20 18 18.5 18 17 V11.5"/><line x1="22" y1="9" x2="22" y2="15.5"/></svg>`,

  /* ---- academy / tools product-style shapes ---- */
  brush: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="22" rx="14" ry="10"/><path d="M40 30 l-6 14 h32 l-6-14"/><rect x="44" y="44" width="12" height="16" rx="2"/><line x1="50" y1="60" x2="50" y2="86"/></svg>`,

  scissors: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="74" r="9"/><circle cx="30" cy="26" r="9"/><line x1="37" y1="32" x2="76" y2="68"/><line x1="37" y1="68" x2="76" y2="32"/></svg>`,

  nailpolish: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="36" y="40" width="28" height="42" rx="5"/><path d="M40 40 l2-14 h16 l2 14"/><rect x="42" y="18" width="16" height="10" rx="2"/><line x1="40" y1="58" x2="60" y2="58"/></svg>`,

  tote: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M26 34 h48 l-5 50 h-38 z"/><path d="M36 34 v-8 a14 14 0 0 1 28 0 v8"/></svg>`,
};

/* Returns a markup string for an icon, ready to inject with innerHTML.
   Usage: el.innerHTML = featureIcon('jar') */
function featureIcon(name) {
  return ICONS[name] || ICONS.sparkle;
}
