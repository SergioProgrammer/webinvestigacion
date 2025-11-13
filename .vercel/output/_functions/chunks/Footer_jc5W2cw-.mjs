import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead } from './astro/server_DC5jLdQH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>WebInvestigación</title>${renderHead()}</head> <body class="min-h-screen bg-[#F7F3E6] text-[#1F3A68] antialiased"> <div class="flex min-h-screen flex-col"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const mainLinks = [
    { href: "/#equipo", label: "Equipo" },
    {
      label: "Investigaci\xF3n",
      subsections: [
        { href: "/#lineas", label: "L\xEDneas" },
        { href: "/#proyectos", label: "Proyectos" },
        { href: "/#resultados", label: "Resultados" }
      ]
    },
    { href: "/#transferencia", label: "Transferencia" },
    { href: "/#participa", label: "Participa" },
    { href: "/#contacto", label: "Contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 border-b border-[#c88b2a]/15 bg-[#1F3A68]/95 backdrop-blur"> <div class="mx-auto flex w-full items-center justify-between px-16 py-4 lg:px-24"> <a href="/" class="flex items-center gap-2 text-2xl font-semibold tracking-tight text-[#F7F3E6]"> <span class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c88b2a] text-lg font-bold text-[#1F3A68] shadow-sm">
CNE
</span>
CogNeuEdu
</a> <nav class="hidden items-center gap-3 text-base font-semibold text-[#F7F3E6] md:flex"> ${mainLinks.map(
    (item) => item.subsections ? renderTemplate`<div class="relative group"> <button type="button" class="rounded-full px-5 py-2.5 transition-all duration-200 group-hover:bg-[#c88b2a]/20 group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c88b2a]" aria-haspopup="true"> ${item.label} </button> <div class="pointer-events-none absolute left-0 top-full z-30 min-w-[220px] translate-y-2 rounded-2xl border border-[#1F3A68]/10 bg-[#F7F3E6] p-2 text-[#1F3A68] shadow-xl opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"> ${item.subsections.map((subsection) => renderTemplate`<a class="block rounded-xl px-4 py-2 text-base font-medium hover:bg-[#c88b2a]/10 hover:text-[#1F3A68]"${addAttribute(subsection.href, "href")}> ${subsection.label} </a>`)} </div> </div>` : renderTemplate`<a class="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-[#c88b2a]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c88b2a]"${addAttribute(item.href, "href")}> ${item.label} </a>`
  )} <a href="/#contacto" class="inline-flex items-center rounded-full bg-[#c88b2a] px-6 py-2.5 text-base font-semibold text-[#1F3A68] shadow-lg shadow-[#c88b2a]/40 transition hover:bg-[#e3a73c]">
Agendar llamada
</a> </nav> <a href="/#contacto" class="inline-flex items-center rounded-full border border-[#c88b2a] px-5 py-2.5 text-base font-semibold text-[#F7F3E6] transition hover:bg-[#c88b2a]/10 md:hidden">
Contacto
</a> </div> </header>`;
}, "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer-root bg-[#050607] text-[#A7B5C7]"> <div class="w-full px-6 py-12 lg:px-12 xl:px-20"> <div class="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_repeat(3,minmax(150px,1fr))]"> <div class="space-y-5"> <img src="/uned.png" alt="Facultad de Educación UNED" class="w-48 rounded border border-white/20 bg-white/5 p-4"> <ul class="space-y-1 text-sm leading-relaxed"> <li>Facultad de Educación</li> <li>Universidad Nacional de Educación a Distancia</li> <li>C/ Juan del Rosal 14</li> <li>28040. Madrid</li> <li>España</li> </ul> </div> <div> <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-white">Legal</h3> <ul class="mt-4 space-y-2 text-sm"> <li><a href="/terminos" class="transition hover:text-white">Términos y condiciones</a></li> <li><a href="/privacidad" class="transition hover:text-white">Política de privacidad</a></li> <li><a href="/rgpd" class="transition hover:text-white">RGPD</a></li> </ul> </div> <div> <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-white">Contacto</h3> <ul class="mt-4 space-y-2 text-sm"> <li>mt.m.aragoneses@edu.uned.es</li> <li>cogneuroedu@edu.uned.es</li> <li>+34 91 398 73 84</li> </ul> </div> <div> <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-white">CogNeuroEdu</h3> <ul class="mt-4 space-y-2 text-sm"> <li>Grupo de investigación competitivo y consolidado de la UNED</li> <li>Referencia 525</li> </ul> </div> </div> <div class="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-[#93A3B7]/80 sm:flex-row"> <p>Copyright ${(/* @__PURE__ */ new Date()).getFullYear()} – CogNeuroEdu.</p> <a href="/admin" class="text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
Panel de administración
</a> </div> </div> </footer>`;
}, "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Navbar as a, $$Footer as b };
