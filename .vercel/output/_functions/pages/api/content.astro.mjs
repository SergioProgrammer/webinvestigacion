import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resolveContentPath = () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  return join(currentDir, "../../cms/content.json");
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
  {
    return new Response(
      JSON.stringify({ error: "La edición del contenido está deshabilitada en producción." }),
      {
        status: 405,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      }
    );
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
