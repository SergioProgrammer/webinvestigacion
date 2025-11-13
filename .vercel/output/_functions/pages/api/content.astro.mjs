import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resolveContentPath = () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  return join(currentDir, "../../cms/content.json");
};
const validateString = (value, label) => {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`El campo "${label}" es obligatorio.`);
  }
  return value.trim();
};
const normalizeContent = (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("El contenido proporcionado es inválido.");
  }
  const hero = payload.hero;
  const sections = payload.sections;
  const contact = payload.contact;
  if (!hero || typeof hero !== "object") {
    throw new Error('El bloque "hero" es obligatorio.');
  }
  if (!Array.isArray(sections) || sections.length === 0) {
    throw new Error("Se requiere al menos una sección intermedia.");
  }
  if (!contact || typeof contact !== "object") {
    throw new Error("El bloque de contacto es obligatorio.");
  }
  return {
    hero: {
      title: validateString(hero.title, "hero.title"),
      subtitle: validateString(hero.subtitle, "hero.subtitle"),
      ctaLabel: validateString(hero.ctaLabel, "hero.ctaLabel")
    },
    sections: sections.map((section, index) => {
      if (!section || typeof section !== "object") {
        throw new Error(`La sección ${index + 1} es inválida.`);
      }
      const sectionData = section;
      const id = validateString(sectionData.id, `sections[${index}].id`);
      return {
        id,
        title: validateString(sectionData.title, `sections[${index}].title`),
        description: validateString(sectionData.description, `sections[${index}].description`)
      };
    }),
    contact: {
      heading: validateString(contact.heading, "contact.heading"),
      description: validateString(contact.description, "contact.description"),
      email: validateString(contact.email, "contact.email"),
      phone: validateString(contact.phone, "contact.phone")
    }
  };
};
const GET = async () => {
  try {
    const contentPath = resolveContentPath();
    const file = await readFile(contentPath, "utf-8");
    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  } catch (error) {
    console.error("No se pudo leer el contenido.", error);
    return new Response(JSON.stringify({ error: "No se pudo leer el contenido guardado." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const payload = await request.json();
    let normalized;
    try {
      normalized = normalizeContent(payload);
    } catch (validationError) {
      const message = validationError instanceof Error ? validationError.message : "Los datos enviados no son válidos.";
      return new Response(JSON.stringify({ error: message }), {
        status: 400,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
    }
    const contentPath = resolveContentPath();
    try {
      await writeFile(contentPath, JSON.stringify(normalized, null, 2), "utf-8");
    } catch (writeError) {
      console.error("No se pudo escribir el archivo de contenido.", writeError);
      return new Response(JSON.stringify({ error: "No se pudo guardar el contenido en el servidor." }), {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
    }
    return new Response(JSON.stringify(normalized), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  } catch (error) {
    console.error("No se pudo procesar la solicitud de contenido.", error);
    return new Response(JSON.stringify({ error: "Solicitud inválida." }), {
      status: 400,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
