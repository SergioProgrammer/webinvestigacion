const memberships = [
	{
		id: 'international-chair',
		name: 'International Chair in Cognitive Health',
		description:
			'Red internacional que impulsa investigación aplicada en salud cognitiva para mejorar calidad de vida y prevenir el deterioro. Integrada por la Fundación Antonio de Nebrija y Cognifit Inc.',
		logo: '/CATEDRA-CONJUNTO.webp',
		alt: 'International Chair in Cognitive Health',
	},
	{
		id: 'imiens',
		name: 'IMIENS · Instituto Mixto Investigación-UNED',
		description:
			'Colaboramos en proyectos de neurociencia educativa con equipos del Instituto Mixto de Investigación Escuela Nacional de Sanidad (IMIENS).',
		logo: '/IMIENS-OK.png',
		alt: 'IMIENS UNED',
	},
	{
		id: 'scand',
		name: 'SCAND Cognition',
		description:
			'Consorcio español de datos normativos sobre envejecimiento que comparte métricas longitudinales para predecir deterioro cognitivo leve y demencias.',
		logo: '/SCAND.webp',
		alt: 'SCAND Cognition',
	},
];

const MembershipsSection = () => (
	<section className="bg-[#F7F3E6] py-24">
		<div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 lg:px-12">
			<header className="text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70">Redes</p>
				<h2 className="mt-4 text-4xl font-semibold text-[#1F3A68]">CogNeuroEdu es miembro de</h2>
				<p className="mt-4 text-lg text-[#1F3A68]/75">
					Nuestra investigación se fortalece gracias a alianzas con cátedras y consorcios que comparten evidencia en
					neurociencia y educación.
				</p>
			</header>
			<div className="grid gap-8 md:grid-cols-3">
				{memberships.map((membership) => (
					<article
						key={membership.id}
						className="group flex flex-col overflow-hidden rounded-[36px] bg-white/95 shadow-2xl shadow-[#1F3A68]/10 ring-1 ring-[#1F3A68]/5 transition hover:-translate-y-1 hover:shadow-[#1F3A68]/25"
					>
						<div className="flex h-48 items-center justify-center bg-gradient-to-br from-white to-[#F7F3E6] px-8">
							<img src={membership.logo} alt={membership.alt} className="max-h-32 w-auto object-contain" loading="lazy" />
						</div>
						<div className="space-y-4 p-8">
							<h3 className="text-2xl font-semibold text-[#1F3A68]">{membership.name}</h3>
							<p className="text-base leading-relaxed text-[#1F3A68]/80">{membership.description}</p>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
);

export default MembershipsSection;
