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
	<section id="investigaciones" className="bg-[#00003D] py-16 text-[#FFFEF2]">
		<div className="mx-auto flex w-full flex-col gap-10 px-16 lg:px-32">
				<header className="text-center md:text-left">
					<p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#FFFEF2]/70">Investigaciones</p>
					<h2 className="mt-2 text-3xl font-semibold leading-tight">Casos que estamos preparando para publicar</h2>
					<p className="mt-4 max-w-3xl text-base text-[#FFFEF2]/80">
						Queremos replicar la claridad visual de Clínica Barajas con una paleta sobria de azul profundo y acentos crema.
						Por eso te mostramos un adelanto de los estudios que pronto podrás explorar en formato interactivo.
					</p>
				</header>
			<div className="grid gap-6 md:grid-cols-3">
				{upcomingCases.map((caseStudy) => (
					<article
						key={caseStudy.title}
						className="rounded-3xl border border-[#FFFEF2]/40 bg-[#FFFEF2] p-6 text-left text-[#00003D] shadow-xl shadow-black/30"
					>
						<p className="text-xs uppercase tracking-[0.4em] text-[#00003D]/60">{caseStudy.status}</p>
						<h3 className="mt-3 text-2xl font-semibold">{caseStudy.title}</h3>
						<p className="mt-3 text-sm text-[#00003D]/70">{caseStudy.description}</p>
					</article>
				))}
			</div>
			<div className="rounded-3xl border border-dashed border-[#FFFEF2]/60 bg-transparent px-6 py-8 text-center text-sm text-[#FFFEF2]/80">
				Actualizaremos este showcase con la misma prolijidad que viste en Clínica Barajas. Escríbenos si necesitas un
				dossier privado antes del lanzamiento.
			</div>
		</div>
	</section>
);

export default InvestigacionesSection;
