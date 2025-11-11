import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import contentFile from './content.json';

const clone = (value) => JSON.parse(JSON.stringify(value));

export const DEFAULT_CONTENT = clone(contentFile);

const ContentContext = createContext({
	content: DEFAULT_CONTENT,
	setContent: () => {},
	isLoading: true,
	error: null,
	refreshContent: async () => {},
});

const fetchContent = async () => {
	const response = await fetch('/api/content');
	if (!response.ok) {
		throw new Error('No se pudo obtener el contenido desde el servidor.');
	}

	const data = await response.json();
	return clone(data);
};

export const ContentProvider = ({ children }) => {
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
			console.error('Error al cargar el contenido remoto.', err);
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
			refreshContent,
		}),
		[content, isLoading, error],
	);

	return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => useContext(ContentContext);
