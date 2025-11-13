import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useMemo, useContext } from 'react';

const hero = {"title":"Descubre nuevos horizontes en investigación","subtitle":"Conectamos equipos con datos valiosos y metodologías ágiles para impulsar proyectos científicos y tecnológicos.","ctaLabel":"Comienza tu proyecto"};
const sections = [{"id":"mision","title":"Nuestra misión","description":"Acompañamos a organizaciones e instituciones a transformar hallazgos en decisiones estratégicas, combinando rigor académico con herramientas digitales."},{"id":"valores","title":"Valores que nos guían","description":"Transparencia, colaboración multidisciplinaria y mejora continua son los pilares que sostienen cada investigación que lideramos."}];
const contact = {"heading":"Conversemos sobre tu próximo estudio","description":"Cuéntanos qué desafíos quieres resolver y te contactaremos en menos de 24 horas con una propuesta a la medida.","email":"contacto@webinvestigacion.com","phone":"+56 9 1234 5678"};
const contentFile = {
  hero,
  sections,
  contact,
};

const clone = (value) => JSON.parse(JSON.stringify(value));
const DEFAULT_CONTENT = clone(contentFile);
const ContentContext = createContext({
  content: DEFAULT_CONTENT,
  setContent: () => {
  },
  isLoading: true,
  error: null,
  refreshContent: async () => {
  }
});
const fetchContent = async () => {
  const response = await fetch("/api/content");
  if (!response.ok) {
    throw new Error("No se pudo obtener el contenido desde el servidor.");
  }
  const data = await response.json();
  return clone(data);
};
const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => clone(DEFAULT_CONTENT));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const refreshContent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchContent();
      setContent(data);
    } catch (err) {
      console.error("Error al cargar el contenido remoto.", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    refreshContent();
  }, []);
  const value = useMemo(
    () => ({
      content,
      setContent,
      isLoading,
      error,
      refreshContent
    }),
    [content, isLoading, error]
  );
  return /* @__PURE__ */ jsx(ContentContext.Provider, { value, children });
};
const useContent = () => useContext(ContentContext);

export { ContentProvider as C, DEFAULT_CONTENT as D, useContent as u };
