/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_DC5jLdQH.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_l68TYnVj.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { C as ContentProvider, u as useContent, D as DEFAULT_CONTENT } from '../chunks/ContentContext_BGi2XdKw.mjs';
export { renderers } from '../renderers.mjs';

const CMS_USER = "Editor";
const CMS_PASSWORD = "WebInvestigación202025";
const SESSION_KEY = "webinvestigacion_admin_session";
const actions = {
  updateValueSection: (sections, index, field, value) => sections.map(
    (section, sectionIndex) => sectionIndex === index ? { ...section, [field]: value } : section
  )
};
const CmsInner = () => {
  const { content, setContent, isLoading } = useContent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [formState, setFormState] = useState(content);
  const [feedback, setFeedback] = useState("");
  const [saveError, setSaveError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    setFormState(content);
  }, [content]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const session = window.sessionStorage.getItem(SESSION_KEY);
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (credentials.username === CMS_USER && credentials.password === CMS_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      setFeedback("");
      setSaveError("");
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(SESSION_KEY, "true");
      }
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setFeedback("");
    setSaveError("");
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(SESSION_KEY);
    }
  };
  const handleHeroChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [name]: value
      }
    }));
  };
  const handleSectionChange = (index, field, value) => {
    setFormState((prev) => ({
      ...prev,
      sections: actions.updateValueSection(
        prev.sections && prev.sections.length ? prev.sections : DEFAULT_CONTENT.sections,
        index,
        field,
        value
      )
    }));
  };
  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [name]: value
      }
    }));
  };
  const persistContent = async (nextContent, successMessage) => {
    let wasSuccessful = false;
    try {
      setIsSaving(true);
      setFeedback("");
      setSaveError("");
      const payload = JSON.parse(JSON.stringify(nextContent));
      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      let data = null;
      try {
        data = await response.json();
      } catch (parseError) {
      }
      if (!response.ok || !data) {
        const message = data && data.error || "No se pudieron guardar los cambios. Intenta nuevamente.";
        throw new Error(message);
      }
      setContent(data);
      setFormState(data);
      setFeedback(successMessage ?? "Cambios guardados correctamente.");
      wasSuccessful = true;
    } catch (err) {
      console.error("Error al guardar el contenido.", err);
      setSaveError(err.message || "No se pudieron guardar los cambios. Intenta nuevamente.");
    } finally {
      setIsSaving(false);
    }
    return wasSuccessful;
  };
  const resetToDefault = async () => {
    const defaultClone = JSON.parse(JSON.stringify(DEFAULT_CONTENT));
    setFormState(defaultClone);
    const success = await persistContent(defaultClone, "Se restauró el contenido predeterminado.");
    if (!success) {
      setFormState(content);
    }
  };
  const handleSave = async (event) => {
    event.preventDefault();
    await persistContent(formState, "Cambios guardados correctamente.");
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-4 py-16", children: /* @__PURE__ */ jsxs("section", { className: "mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-8 text-white shadow-lg shadow-slate-950/40", children: [
      /* @__PURE__ */ jsxs("header", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Panel de administración" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Ingresa con las credenciales entregadas para editar el contenido público de la landing page." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "username", className: "text-sm font-medium text-slate-200", children: "Usuario" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              required: true,
              value: credentials.username,
              onChange: handleCredentialsChange,
              className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40",
              placeholder: "Editor"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "text-sm font-medium text-slate-200", children: "Contraseña" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              required: true,
              value: credentials.password,
              onChange: handleCredentialsChange,
              className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40",
              placeholder: "********"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "mt-2 inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300",
            children: "Iniciar sesión"
          }
        ),
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-400", children: error })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-16", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-2 text-white md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold", children: "Editor de contenido" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Actualiza los textos visibles en la landing page. Los cambios se guardan en el proyecto para el próximo despliegue." }),
        isLoading && /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Cargando contenido guardado…" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleLogout,
          className: "inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300",
          children: "Cerrar sesión"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSave, className: "flex flex-col gap-12", children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white shadow-lg shadow-slate-950/40", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Hero" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Controla el mensaje principal y el texto del botón." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "hero-title", className: "text-sm font-medium text-slate-200", children: "Título" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "hero-title",
                name: "title",
                type: "text",
                required: true,
                value: formState.hero.title,
                onChange: handleHeroChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40",
                placeholder: "Título principal"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "hero-subtitle", className: "text-sm font-medium text-slate-200", children: "Subtítulo" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "hero-subtitle",
                name: "subtitle",
                rows: "3",
                required: true,
                value: formState.hero.subtitle,
                onChange: handleHeroChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40",
                placeholder: "Subtítulo descriptivo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "hero-cta", className: "text-sm font-medium text-slate-200", children: "Texto del botón" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "hero-cta",
                name: "ctaLabel",
                type: "text",
                required: true,
                value: formState.hero.ctaLabel,
                onChange: handleHeroChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40",
                placeholder: "Llamado a la acción"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white shadow-lg shadow-slate-950/40", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Secciones intermedias" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Edita los bloques que explican tu propuesta de valor." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-8 md:grid-cols-2", children: formState.sections.map((section, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-slate-200", htmlFor: `${section.id}-title`, children: "Título" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: `${section.id}-title`,
                type: "text",
                required: true,
                value: section.title,
                onChange: (event) => handleSectionChange(index, "title", event.target.value),
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-slate-200", htmlFor: `${section.id}-description`, children: "Descripción" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: `${section.id}-description`,
                rows: "4",
                required: true,
                value: section.description,
                onChange: (event) => handleSectionChange(index, "description", event.target.value),
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              }
            )
          ] })
        ] }, section.id)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white shadow-lg shadow-slate-950/40", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Información de contacto" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Personaliza los datos que acompañan al formulario." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2 md:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "contact-heading", className: "text-sm font-medium text-slate-200", children: "Encabezado" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "contact-heading",
                name: "heading",
                type: "text",
                required: true,
                value: formState.contact.heading,
                onChange: handleContactChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2 md:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "contact-description", className: "text-sm font-medium text-slate-200", children: "Descripción" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "contact-description",
                name: "description",
                rows: "4",
                required: true,
                value: formState.contact.description,
                onChange: handleContactChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "contact-email", className: "text-sm font-medium text-slate-200", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "contact-email",
                name: "email",
                type: "email",
                required: true,
                value: formState.contact.email,
                onChange: handleContactChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "contact-phone", className: "text-sm font-medium text-slate-200", children: "Teléfono" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "contact-phone",
                name: "phone",
                type: "text",
                required: true,
                value: formState.contact.phone,
                onChange: handleContactChange,
                className: "rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: resetToDefault,
            disabled: isSaving,
            className: "inline-flex items-center justify-center rounded-md border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:text-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 disabled:cursor-not-allowed disabled:opacity-60",
            children: "Restaurar contenido predeterminado"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isSaving,
            className: "inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-not-allowed disabled:opacity-60",
            children: isSaving ? "Guardando…" : "Guardar cambios"
          }
        )
      ] }),
      saveError && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-400", children: saveError }),
      feedback && /* @__PURE__ */ jsx("p", { className: "text-sm text-emerald-400", children: feedback })
    ] })
  ] });
};
const CmsApp = () => /* @__PURE__ */ jsx(ContentProvider, { children: /* @__PURE__ */ jsx("div", { className: "flex min-h-[calc(100vh-8rem)] flex-col", children: /* @__PURE__ */ jsx(CmsInner, {}) }) });

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "CmsApp", CmsApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/cms/CmsApp.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/pages/admin.astro", void 0);

const $$file = "/Users/sergiosandovalpacheco/Desktop/webinvestigacion/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Admin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
