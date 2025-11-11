import { useEffect, useState } from 'react';
import { ContentProvider, DEFAULT_CONTENT, useContent } from './ContentContext.jsx';

const CMS_USER = 'Editor';
const CMS_PASSWORD = 'WebInvestigación202025';
const SESSION_KEY = 'webinvestigacion_admin_session';

const actions = {
	updateValueSection: (sections, index, field, value) =>
		sections.map((section, sectionIndex) =>
			sectionIndex === index ? { ...section, [field]: value } : section,
		),
};

const CmsInner = () => {
	const { content, setContent, isLoading } = useContent();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [credentials, setCredentials] = useState({ username: '', password: '' });
	const [error, setError] = useState('');
	const [formState, setFormState] = useState(content);
	const [feedback, setFeedback] = useState('');
	const [saveError, setSaveError] = useState('');
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		setFormState(content);
	}, [content]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const session = window.sessionStorage.getItem(SESSION_KEY);
		if (session === 'true') {
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
			setError('');
			setFeedback('');
			setSaveError('');
			if (typeof window !== 'undefined') {
				window.sessionStorage.setItem(SESSION_KEY, 'true');
			}
		} else {
			setError('Credenciales incorrectas. Intenta nuevamente.');
		}
	};

	const handleLogout = () => {
		setIsAuthenticated(false);
		setCredentials({ username: '', password: '' });
		setFeedback('');
		setSaveError('');
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(SESSION_KEY);
		}
	};

	const handleHeroChange = (event) => {
		const { name, value } = event.target;
		setFormState((prev) => ({
			...prev,
			hero: {
				...prev.hero,
				[name]: value,
			},
		}));
	};

	const handleSectionChange = (index, field, value) => {
		setFormState((prev) => ({
			...prev,
			sections: actions.updateValueSection(
				prev.sections && prev.sections.length ? prev.sections : DEFAULT_CONTENT.sections,
				index,
				field,
				value,
			),
		}));
	};

	const handleContactChange = (event) => {
		const { name, value } = event.target;
		setFormState((prev) => ({
			...prev,
			contact: {
				...prev.contact,
				[name]: value,
			},
		}));
	};

	const persistContent = async (nextContent, successMessage) => {
		let wasSuccessful = false;
		try {
			setIsSaving(true);
			setFeedback('');
			setSaveError('');

			const payload = JSON.parse(JSON.stringify(nextContent));
			const response = await fetch('/api/content', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			let data = null;
			try {
				data = await response.json();
			} catch (parseError) {
				// ignore parse error, handled below if not ok
			}

			if (!response.ok || !data) {
				const message =
					(data && data.error) || 'No se pudieron guardar los cambios. Intenta nuevamente.';
				throw new Error(message);
			}

			setContent(data);
			setFormState(data);
			setFeedback(successMessage ?? 'Cambios guardados correctamente.');
			wasSuccessful = true;
		} catch (err) {
			console.error('Error al guardar el contenido.', err);
			setSaveError(err.message || 'No se pudieron guardar los cambios. Intenta nuevamente.');
		} finally {
			setIsSaving(false);
		}

		return wasSuccessful;
	};

	const resetToDefault = async () => {
		const defaultClone = JSON.parse(JSON.stringify(DEFAULT_CONTENT));
		setFormState(defaultClone);
		const success = await persistContent(defaultClone, 'Se restauró el contenido predeterminado.');
		if (!success) {
			setFormState(content);
		}
	};

	const handleSave = async (event) => {
		event.preventDefault();
		await persistContent(formState, 'Cambios guardados correctamente.');
	};

	if (!isAuthenticated) {
		return (
			<div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-4 py-16">
				<section className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-8 text-white shadow-lg shadow-slate-950/40">
					<header className="space-y-2">
						<h1 className="text-2xl font-semibold">Panel de administración</h1>
						<p className="text-sm text-slate-300">
							Ingresa con las credenciales entregadas para editar el contenido público de la landing page.
						</p>
					</header>
					<form onSubmit={handleLogin} className="flex flex-col gap-4">
						<div className="grid gap-2">
							<label htmlFor="username" className="text-sm font-medium text-slate-200">
								Usuario
							</label>
							<input
								id="username"
								name="username"
								type="text"
								required
								value={credentials.username}
								onChange={handleCredentialsChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
								placeholder="Editor"
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="password" className="text-sm font-medium text-slate-200">
								Contraseña
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								value={credentials.password}
								onChange={handleCredentialsChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
								placeholder="********"
							/>
						</div>
						<button
							type="submit"
							className="mt-2 inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						>
							Iniciar sesión
						</button>
						{error && <p className="text-sm text-red-400">{error}</p>}
					</form>
				</section>
			</div>
		);
	}

	return (
		<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-16">
			<header className="flex flex-col gap-2 text-white md:flex-row md:items-center md:justify-between">
				<div>
					<h1 className="text-3xl font-semibold">Editor de contenido</h1>
					<p className="text-sm text-slate-300">
						Actualiza los textos visibles en la landing page. Los cambios se guardan en el proyecto para el
						próximo despliegue.
					</p>
					{isLoading && <p className="text-xs text-slate-400">Cargando contenido guardado…</p>}
				</div>
				<button
					type="button"
					onClick={handleLogout}
					className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
				>
					Cerrar sesión
				</button>
			</header>

			<form onSubmit={handleSave} className="flex flex-col gap-12">
				<section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white shadow-lg shadow-slate-950/40">
					<h2 className="text-xl font-semibold">Hero</h2>
					<p className="text-sm text-slate-300">Controla el mensaje principal y el texto del botón.</p>
					<div className="mt-6 grid gap-4">
						<div className="grid gap-2">
							<label htmlFor="hero-title" className="text-sm font-medium text-slate-200">
								Título
							</label>
							<input
								id="hero-title"
								name="title"
								type="text"
								required
								value={formState.hero.title}
								onChange={handleHeroChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
								placeholder="Título principal"
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="hero-subtitle" className="text-sm font-medium text-slate-200">
								Subtítulo
							</label>
							<textarea
								id="hero-subtitle"
								name="subtitle"
								rows="3"
								required
								value={formState.hero.subtitle}
								onChange={handleHeroChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
								placeholder="Subtítulo descriptivo"
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="hero-cta" className="text-sm font-medium text-slate-200">
								Texto del botón
							</label>
							<input
								id="hero-cta"
								name="ctaLabel"
								type="text"
								required
								value={formState.hero.ctaLabel}
								onChange={handleHeroChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
								placeholder="Llamado a la acción"
							/>
						</div>
					</div>
				</section>

				<section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white shadow-lg shadow-slate-950/40">
					<h2 className="text-xl font-semibold">Secciones intermedias</h2>
					<p className="text-sm text-slate-300">Edita los bloques que explican tu propuesta de valor.</p>
					<div className="mt-6 grid gap-8 md:grid-cols-2">
						{formState.sections.map((section, index) => (
							<div key={section.id} className="space-y-4">
								<div className="grid gap-2">
									<label className="text-sm font-medium text-slate-200" htmlFor={`${section.id}-title`}>
										Título
									</label>
									<input
										id={`${section.id}-title`}
										type="text"
										required
										value={section.title}
										onChange={(event) => handleSectionChange(index, 'title', event.target.value)}
										className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
									/>
								</div>
								<div className="grid gap-2">
									<label className="text-sm font-medium text-slate-200" htmlFor={`${section.id}-description`}>
										Descripción
									</label>
									<textarea
										id={`${section.id}-description`}
										rows="4"
										required
										value={section.description}
										onChange={(event) => handleSectionChange(index, 'description', event.target.value)}
										className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
									/>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white shadow-lg shadow-slate-950/40">
					<h2 className="text-xl font-semibold">Información de contacto</h2>
					<p className="text-sm text-slate-300">Personaliza los datos que acompañan al formulario.</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2">
						<div className="grid gap-2 md:col-span-2">
							<label htmlFor="contact-heading" className="text-sm font-medium text-slate-200">
								Encabezado
							</label>
							<input
								id="contact-heading"
								name="heading"
								type="text"
								required
								value={formState.contact.heading}
								onChange={handleContactChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
							/>
						</div>
						<div className="grid gap-2 md:col-span-2">
							<label htmlFor="contact-description" className="text-sm font-medium text-slate-200">
								Descripción
							</label>
							<textarea
								id="contact-description"
								name="description"
								rows="4"
								required
								value={formState.contact.description}
								onChange={handleContactChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="contact-email" className="text-sm font-medium text-slate-200">
								Email
							</label>
							<input
								id="contact-email"
								name="email"
								type="email"
								required
								value={formState.contact.email}
								onChange={handleContactChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="contact-phone" className="text-sm font-medium text-slate-200">
								Teléfono
							</label>
							<input
								id="contact-phone"
								name="phone"
								type="text"
								required
								value={formState.contact.phone}
								onChange={handleContactChange}
								className="rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
							/>
						</div>
					</div>
				</section>

				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<button
						type="button"
						onClick={resetToDefault}
						disabled={isSaving}
						className="inline-flex items-center justify-center rounded-md border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:text-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 disabled:cursor-not-allowed disabled:opacity-60"
					>
						Restaurar contenido predeterminado
					</button>
					<button
						type="submit"
						disabled={isSaving}
						className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{isSaving ? 'Guardando…' : 'Guardar cambios'}
					</button>
				</div>
				{saveError && <p className="text-sm text-red-400">{saveError}</p>}
				{feedback && <p className="text-sm text-emerald-400">{feedback}</p>}
			</form>
		</div>
	);
};

const CmsApp = () => (
	<ContentProvider>
		<div className="flex min-h-[calc(100vh-8rem)] flex-col">
			<CmsInner />
		</div>
	</ContentProvider>
);

export default CmsApp;
