const upcomingCases = [
	{
		title: 'Auditoría de datos clínicos',
		description: 'Modelo de calidad para integrar fuentes públicas, registros internos y tableros de control.',
		status: 'En edición',
	},
	{
		title: 'Mapa de innovación educativa',
		description: 'Estudio mixto en 4 países con énfasis en metodologías STEM y adopción docente.',
		status: 'Pronto',
	},
	{
		title: 'Monitoreo de políticas públicas',
		description: 'Toolkit descargable para levantar hallazgos con foco territorial y métricas de impacto.',
		status: 'Próxima publicación',
	},
];

const InvestigacionesSection = () => (
	<section id="investigaciones" className="bg-gradient-to-b from-[#1F3A68] via-[#2c4b8c] to-[#1F3A68] py-20 text-[#F7F3E6]">
		<div className="mx-auto flex w-full flex-col gap-12 px-16 lg:px-32">
				<header className="text-center md:text-left">
					<p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#F7F3E6]/70">Investigaciones</p>
					<h2 className="mt-3 text-4xl font-semibold leading-tight">Casos que estamos preparando para publicar</h2>
					<p className="mt-5 max-w-3xl text-lg text-[#F7F3E6]/80">
						Queremos replicar la claridad visual de Clínica Barajas con una paleta sobria de azul profundo y acentos crema.
						Por eso te mostramos un adelanto de los estudios que pronto podrás explorar en formato interactivo.
					</p>
				</header>
			<div className="grid gap-6 md:grid-cols-3">
				{upcomingCases.map((caseStudy) => (
					<article
						key={caseStudy.title}
						className="rounded-3xl border border-[#F7F3E6]/40 bg-[#F7F3E6] p-8 text-left text-[#1F3A68] shadow-xl shadow-black/30"
					>
						<span className="inline-flex items-center rounded-full bg-[#c88b2a]/20 px-5 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-[#1F3A68]">
							{caseStudy.status}
						</span>
						<h3 className="mt-4 text-3xl font-semibold">{caseStudy.title}</h3>
						<p className="mt-4 text-base text-[#1F3A68]/75">{caseStudy.description}</p>
					</article>
				))}
			</div>
			<div className="rounded-3xl border border-dashed border-[#F7F3E6]/60 bg-transparent px-10 py-10 text-center text-base text-[#F7F3E6]/85">
				Actualizaremos este showcase con la misma prolijidad que viste en Clínica Barajas. Escríbenos si necesitas un
				dossier privado antes del lanzamiento.
			</div>
		</div>
	</section>
);

export default InvestigacionesSection;
