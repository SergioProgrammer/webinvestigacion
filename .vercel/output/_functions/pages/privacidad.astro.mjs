/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DC5jLdQH.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_l68TYnVj.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="mx-auto w-full max-w-5xl px-6 py-16 lg:px-0"> <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#2c4b8c]/70">Legal</p> <h1 class="mt-4 text-4xl font-semibold text-[#1F3A68]">Política de privacidad</h1> <p class="mt-2 text-sm text-[#1F3A68]/70">Última actualización: ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")}</p> <section class="mt-10 space-y-6 text-base leading-relaxed text-[#1F3A68]/80"> <p>
CogNeuroEdu, grupo de investigación de la Facultad de Educación (UNED, Ref. 525), trata los datos personales
				conforme al Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018. Esta política describe cómo recopilamos, usamos
				y protegemos la información que nos facilitas a través de esta web.
</p> <div> <h2 class="text-2xl font-semibold text-[#1F3A68]">Datos que recopilamos</h2> <ul class="mt-3 list-disc space-y-2 pl-6"> <li>Datos de contacto (nombre, correo, teléfono) cuando envías formularios o correos.</li> <li>Metadatos técnicos mínimos para analizar funcionamiento de la web (logs y métricas agregadas).</li> </ul> </div> <div> <h2 class="text-2xl font-semibold text-[#1F3A68]">Finalidad y legitimación</h2> <p>
Utilizamos tus datos para responder consultas, enviar información sobre actividades científicas y mantener
					registros administrativos del grupo. La base jurídica es tu consentimiento explícito y el interés legítimo
					de comunicar hallazgos científicos.
</p> </div> <div> <h2 class="text-2xl font-semibold text-[#1F3A68]">Conservación y seguridad</h2> <p>
Los datos se almacenan en infraestructuras seguras de la UNED y se conservan mientras mantengamos relación
					académica o hasta que solicites su supresión. Aplicamos controles de acceso, cifrado en tránsito y
					procedimientos internos para evitar accesos no autorizados.
</p> </div> <div> <h2 class="text-2xl font-semibold text-[#1F3A68]">Destinatarios</h2> <p>
No cedemos tus datos a terceros salvo obligación legal o para servicios necesarios gestionados por la UNED
					(bajo contratos de encargo de tratamiento). No se realizan transferencias internacionales.
</p> </div> <div> <h2 class="text-2xl font-semibold text-[#1F3A68]">Derechos</h2> <p>
Puedes ejercer derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación enviando
					un correo a <a class="text-[#c88b2a] underline" href="mailto:mt.m.aragoneses@edu.uned.es">mt.m.aragoneses@edu.uned.es</a>
o a <a class="text-[#c88b2a] underline" href="mailto:cogneuroedu@edu.uned.es">cogneuroedu@edu.uned.es</a>. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.
</p> </div> <div> <h2 class="text-2xl font-semibold text-[#1F3A68]">Contacto del responsable</h2> <p>
Facultad de Educación – UNED. C/ Juan del Rosal 14, 28040 Madrid. Teléfono +34 91 398 73 84. Grupo de
					Investigación CogNeuroEdu (Ref. 525).
</p> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/pages/privacidad.astro", void 0);

const $$file = "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/pages/privacidad.astro";
const $$url = "/privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacidad,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
