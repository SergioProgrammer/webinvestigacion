/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_DC5jLdQH.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_l68TYnVj.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { u as useContent, C as ContentProvider } from '../chunks/ContentContext_BGi2XdKw.mjs';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const neuralHero = {
  title: "Investigating in Cognitive Neuroscience",
  description: "lumen cognitionis emergit ubi scientia et humanitas se tangunt. In hoc campo, CogNeuroEdu traducit datos en decisiones capaces.",
  image: "/6210.jpg"
};
const HeroSection = () => {
  const {
    content: {
      hero: { ctaLabel }
    }
  } = useContent();
  return /* @__PURE__ */ jsxs("section", { id: "hero", className: "relative flex min-h-screen items-center overflow-hidden bg-[#0b1228] text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: neuralHero.image, alt: neuralHero.title, className: "h-full w-full object-cover object-center", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#1F3A68]/85 via-[#0b1120]/70 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(227,167,60,0.25),transparent_45%)]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 flex w-full justify-center px-6 py-12 sm:px-10 lg:px-16", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl rounded-[36px] bg-white/95 p-10 text-left text-[#1F3A68] shadow-3xl shadow-[#0b1120]/40 ring-1 ring-[#1F3A68]/15", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]", children: ctaLabel }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-5xl font-bold leading-tight md:text-6xl", children: neuralHero.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-[#1F3A68]/80 md:text-xl", children: neuralHero.description })
    ] }) })
  ] });
};

const InfoSections = () => {
  const {
    content: { sections }
  } = useContent();
  return /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-b from-[#FBF7EF] to-[#F7F3E6] py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full flex-col gap-8 px-16 lg:px-32", children: [
    /* @__PURE__ */ jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70", children: "Cómo trabajamos" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold text-[#1F3A68]", children: "Metodologías claras, impacto medible" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-[#1F3A68]/75", children: "Cada bloque explica nuestro acompañamiento, muy similar a la narrativa limpia y aireada de Clínica Barajas." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: sections.map((section) => /* @__PURE__ */ jsxs(
      "article",
      {
        id: section.id,
        className: "relative flex flex-col gap-5 rounded-[32px] border border-[#1F3A68]/10 bg-white p-10 shadow-xl shadow-[#1F3A68]/5 transition hover:-translate-y-1 hover:border-[#c88b2a]/40",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-10 inline-flex h-10 items-center rounded-full bg-[#c88b2a] px-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#1F3A68]", children: "Insight" }),
          /* @__PURE__ */ jsx("h3", { className: "pt-5 text-3xl font-semibold text-[#1F3A68]", children: section.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-[#1F3A68]/75", children: section.description })
        ]
      },
      section.id
    )) })
  ] }) });
};

const memberships = [
  {
    id: "international-chair",
    name: "International Chair in Cognitive Health",
    description: "Red internacional que impulsa investigación aplicada en salud cognitiva para mejorar calidad de vida y prevenir el deterioro. Integrada por la Fundación Antonio de Nebrija y Cognifit Inc.",
    logo: "/CATEDRA-CONJUNTO.webp",
    alt: "International Chair in Cognitive Health"
  },
  {
    id: "imiens",
    name: "IMIENS · Instituto Mixto Investigación-UNED",
    description: "Colaboramos en proyectos de neurociencia educativa con equipos del Instituto Mixto de Investigación Escuela Nacional de Sanidad (IMIENS).",
    logo: "/IMIENS-OK.png",
    alt: "IMIENS UNED"
  },
  {
    id: "scand",
    name: "SCAND Cognition",
    description: "Consorcio español de datos normativos sobre envejecimiento que comparte métricas longitudinales para predecir deterioro cognitivo leve y demencias.",
    logo: "/SCAND.webp",
    alt: "SCAND Cognition"
  }
];
const MembershipsSection = () => /* @__PURE__ */ jsx("section", { className: "bg-[#F7F3E6] py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 lg:px-12", children: [
  /* @__PURE__ */ jsxs("header", { className: "text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70", children: "Redes" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-semibold text-[#1F3A68]", children: "CogNeuroEdu es miembro de" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-[#1F3A68]/75", children: "Nuestra investigación se fortalece gracias a alianzas con cátedras y consorcios que comparten evidencia en neurociencia y educación." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: memberships.map((membership) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group flex flex-col overflow-hidden rounded-[36px] bg-white/95 shadow-2xl shadow-[#1F3A68]/10 ring-1 ring-[#1F3A68]/5 transition hover:-translate-y-1 hover:shadow-[#1F3A68]/25",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-48 items-center justify-center bg-gradient-to-br from-white to-[#F7F3E6] px-8", children: /* @__PURE__ */ jsx("img", { src: membership.logo, alt: membership.alt, className: "max-h-32 w-auto object-contain", loading: "lazy" }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#1F3A68]", children: membership.name }),
          /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-[#1F3A68]/80", children: membership.description })
        ] })
      ]
    },
    membership.id
  )) })
] }) });

const upcomingCases = [
  {
    title: "Auditoría de datos clínicos",
    description: "Modelo de calidad para integrar fuentes públicas, registros internos y tableros de control.",
    status: "En edición"
  },
  {
    title: "Mapa de innovación educativa",
    description: "Estudio mixto en 4 países con énfasis en metodologías STEM y adopción docente.",
    status: "Pronto"
  },
  {
    title: "Monitoreo de políticas públicas",
    description: "Toolkit descargable para levantar hallazgos con foco territorial y métricas de impacto.",
    status: "Próxima publicación"
  }
];
const InvestigacionesSection = () => /* @__PURE__ */ jsx("section", { id: "investigaciones", className: "bg-gradient-to-b from-[#1F3A68] via-[#2c4b8c] to-[#1F3A68] py-20 text-[#F7F3E6]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full flex-col gap-12 px-16 lg:px-32", children: [
  /* @__PURE__ */ jsxs("header", { className: "text-center md:text-left", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.45em] text-[#F7F3E6]/70", children: "Investigaciones" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold leading-tight", children: "Casos que estamos preparando para publicar" }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-3xl text-lg text-[#F7F3E6]/80", children: "Queremos replicar la claridad visual de Clínica Barajas con una paleta sobria de azul profundo y acentos crema. Por eso te mostramos un adelanto de los estudios que pronto podrás explorar en formato interactivo." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: upcomingCases.map((caseStudy) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "rounded-3xl border border-[#F7F3E6]/40 bg-[#F7F3E6] p-8 text-left text-[#1F3A68] shadow-xl shadow-black/30",
      children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-[#c88b2a]/20 px-5 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-[#1F3A68]", children: caseStudy.status }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-3xl font-semibold", children: caseStudy.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-[#1F3A68]/75", children: caseStudy.description })
      ]
    },
    caseStudy.title
  )) }),
  /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-dashed border-[#F7F3E6]/60 bg-transparent px-10 py-10 text-center text-base text-[#F7F3E6]/85", children: "Actualizaremos este showcase con la misma prolijidad que viste en Clínica Barajas. Escríbenos si necesitas un dossier privado antes del lanzamiento." })
] }) });

const highlights = [
  "Coordinadores senior en ciencias sociales, data science y diseño de servicios.",
  "Sesiones clínicas de revisión interna cada semana para mantener la calidad.",
  "Acompañamiento directo de partners en terreno cuando el proyecto lo requiere."
];
const EquipoSection = () => /* @__PURE__ */ jsx("section", { id: "equipo", className: "bg-[#FCFAF4] py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-full gap-12 px-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-32", children: [
  /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70", children: "Equipo" }),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold leading-snug text-[#1F3A68]", children: "Especialistas visibles, pero una experiencia igual de cálida que en Clínica Barajas" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-[#1F3A68]/75", children: "Estamos actualizando las biografías públicas. Mientras tanto, estas son las dinámicas que sostienen cada proyecto con el mismo cuidado clínico: revisión entre pares, contacto directo y seguimiento prolongado." }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: highlights.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-base text-[#1F3A68]/75", children: [
      /* @__PURE__ */ jsx("span", { className: "mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c88b2a]/20 text-[12px] font-semibold text-[#1F3A68]", children: "•" }),
      item
    ] }, item)) })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "rounded-[36px] border border-[#1F3A68]/10 bg-[#F7F3E6]/70 p-10 shadow-2xl shadow-[#1F3A68]/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.35em] text-[#1F3A68]/60", children: "Lo que sigue" }),
    /* @__PURE__ */ jsx("h3", { className: "mt-4 text-3xl font-semibold text-[#1F3A68]", children: "Galería de perfiles en preparación" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-[#1F3A68]/75", children: "Publicaremos fichas profesionales con fotos reales, tono cercano y bloques informativos similares al sitio referencia, priorizando transparencia y calidez." }),
    /* @__PURE__ */ jsx("div", { className: "mt-7 rounded-2xl border border-dashed border-[#1F3A68]/20 bg-white px-6 py-5 text-base text-[#1F3A68]", children: "Comparte tu desafío y te conectaremos con la persona que liderará la investigación antes del kickoff." })
  ] })
] }) });

const initialState = {
  name: "",
  email: "",
  message: ""
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: null, message: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Por favor completa todos los campos antes de enviar." });
      return;
    }
    setStatus({ type: "success", message: "¡Gracias por tu mensaje! Nos pondremos en contacto muy pronto." });
    setFormData(initialState);
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex flex-col gap-5 rounded-[36px] border border-[#1F3A68]/15 bg-white p-8 shadow-xl shadow-[#1F3A68]/10 md:p-10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "text-base font-medium text-[#1F3A68]", children: "Nombre" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              value: formData.name,
              onChange: handleChange,
              type: "text",
              name: "name",
              id: "name",
              required: true,
              placeholder: "Tu nombre completo",
              className: "rounded-2xl border border-[#1F3A68]/15 bg-white px-5 py-3 text-[#1F3A68] placeholder:text-[#1F3A68]/40 focus:border-[#1F3A68] focus:outline-none focus:ring-2 focus:ring-[#1F3A68]/30"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-base font-medium text-[#1F3A68]", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              value: formData.email,
              onChange: handleChange,
              type: "email",
              name: "email",
              id: "email",
              required: true,
              placeholder: "correo@ejemplo.com",
              className: "rounded-2xl border border-[#1F3A68]/15 bg-white px-5 py-3 text-[#1F3A68] placeholder:text-[#1F3A68]/40 focus:border-[#1F3A68] focus:outline-none focus:ring-2 focus:ring-[#1F3A68]/30"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "text-base font-medium text-[#1F3A68]", children: "Mensaje" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: formData.message,
              onChange: handleChange,
              name: "message",
              id: "message",
              required: true,
              rows: "5",
              placeholder: "Cuéntanos sobre tu proyecto o las preguntas que quieres responder.",
              className: "rounded-2xl border border-[#1F3A68]/15 bg-white px-5 py-3 text-[#1F3A68] placeholder:text-[#1F3A68]/40 focus:border-[#1F3A68] focus:outline-none focus:ring-2 focus:ring-[#1F3A68]/30"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "mt-2 inline-flex items-center justify-center rounded-full bg-[#c88b2a] px-8 py-4 text-base font-semibold text-[#1F3A68] shadow-lg shadow-[#c88b2a]/40 transition hover:bg-[#e3a73c]",
            children: "Enviar mensaje"
          }
        ),
        status.type === "error" && /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-[#2c4b8c]", children: status.message }),
        status.type === "success" && /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-[#c88b2a]", children: status.message })
      ]
    }
  );
};

const ContactSection = () => {
  const {
    content: {
      contact: { heading, description, email, phone }
    }
  } = useContent();
  return /* @__PURE__ */ jsx("section", { id: "contacto", className: "bg-[#F7F3E6] py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-full gap-12 px-16 md:grid-cols-[1.1fr_1fr] md:items-start lg:px-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-7 rounded-[36px] border border-[#1F3A68]/15 bg-white p-10 shadow-xl shadow-[#1F3A68]/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70", children: "Contacto" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold text-[#1F3A68]", children: heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#1F3A68]/75", children: description })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-base text-[#1F3A68]/75", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c88b2a] text-base font-semibold text-[#1F3A68]", children: "Email" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1F3A68]", children: email })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c88b2a] text-base font-semibold text-[#1F3A68]", children: "Tel" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1F3A68]", children: phone })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.35em] text-[#2c4b8c]/70", children: "Tiempo de respuesta" }),
      /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-[#1F3A68]", children: "Menos de 24 horas hábiles" })
    ] }),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] }) });
};

const LandingApp = () => /* @__PURE__ */ jsx(ContentProvider, { children: /* @__PURE__ */ jsxs("main", { className: "space-y-0", children: [
  /* @__PURE__ */ jsx(HeroSection, {}),
  /* @__PURE__ */ jsx(InfoSections, {}),
  /* @__PURE__ */ jsx(MembershipsSection, {}),
  /* @__PURE__ */ jsx(InvestigacionesSection, {}),
  /* @__PURE__ */ jsx(EquipoSection, {}),
  /* @__PURE__ */ jsx(ContactSection, {})
] }) });

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "LandingApp", LandingApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/components/LandingApp.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/pages/index.astro", void 0);

const $$file = "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
