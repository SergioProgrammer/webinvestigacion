const highlights = [
	'Coordinadores senior en ciencias sociales, data science y diseño de servicios.',
	'Sesiones clínicas de revisión interna cada semana para mantener la calidad.',
	'Acompañamiento directo de partners en terreno cuando el proyecto lo requiere.',
];

const EquipoSection = () => (
	<section id="equipo" className="bg-white py-16">
		<div className="mx-auto grid w-full gap-10 px-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-32">
			<div className="space-y-6">
				<p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00003D]/60">Equipo</p>
				<h2 className="text-3xl font-semibold leading-snug text-[#00003D]">
					Especialistas visibles, pero una experiencia igual de cálida que en Clínica Barajas
				</h2>
				<p className="text-base text-[#00003D]/70">
					Estamos actualizando las biografías públicas. Mientras tanto, estas son las dinámicas que sostienen cada
					proyecto con el mismo cuidado clínico: revisión entre pares, contacto directo y seguimiento prolongado.
				</p>
				<ul className="space-y-3">
					{highlights.map((item) => (
						<li key={item} className="flex items-start gap-3 text-sm text-[#00003D]/70">
							<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFEF2] text-[10px] font-semibold text-[#00003D]">
								•
							</span>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className="rounded-[32px] border border-[#00003D]/10 bg-[#FFFEF2]/40 p-8 shadow-2xl shadow-[#00003D]/10">
				<p className="text-xs uppercase tracking-[0.3em] text-[#00003D]/60">Lo que sigue</p>
				<h3 className="mt-3 text-2xl font-semibold text-[#00003D]">Galería de perfiles en preparación</h3>
				<p className="mt-3 text-sm text-[#00003D]/70">
					Publicaremos fichas profesionales con fotos reales, tono cercano y bloques informativos similares al sitio
					referencia, priorizando transparencia y calidez.
				</p>
				<div className="mt-6 rounded-2xl border border-dashed border-[#00003D]/20 bg-white px-5 py-4 text-sm text-[#00003D]">
					Comparte tu desafío y te conectaremos con la persona que liderará la investigación antes del kickoff.
				</div>
			</div>
		</div>
	</section>
);

export default EquipoSection;
