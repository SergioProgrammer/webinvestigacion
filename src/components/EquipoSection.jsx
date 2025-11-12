const highlights = [
	'Coordinadores senior en ciencias sociales, data science y diseño de servicios.',
	'Sesiones clínicas de revisión interna cada semana para mantener la calidad.',
	'Acompañamiento directo de partners en terreno cuando el proyecto lo requiere.',
];

const EquipoSection = () => (
	<section id="equipo" className="bg-[#FCFAF4] py-20">
		<div className="mx-auto grid w-full gap-12 px-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-32">
			<div className="space-y-7">
				<p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70">Equipo</p>
				<h2 className="text-4xl font-semibold leading-snug text-[#1F3A68]">
					Especialistas visibles, pero una experiencia igual de cálida que en Clínica Barajas
				</h2>
				<p className="text-lg text-[#1F3A68]/75">
					Estamos actualizando las biografías públicas. Mientras tanto, estas son las dinámicas que sostienen cada
					proyecto con el mismo cuidado clínico: revisión entre pares, contacto directo y seguimiento prolongado.
				</p>
				<ul className="space-y-4">
					{highlights.map((item) => (
						<li key={item} className="flex items-start gap-3 text-base text-[#1F3A68]/75">
							<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c88b2a]/20 text-[12px] font-semibold text-[#1F3A68]">
								•
							</span>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className="rounded-[36px] border border-[#1F3A68]/10 bg-[#F7F3E6]/70 p-10 shadow-2xl shadow-[#1F3A68]/10">
				<p className="text-sm uppercase tracking-[0.35em] text-[#1F3A68]/60">Lo que sigue</p>
				<h3 className="mt-4 text-3xl font-semibold text-[#1F3A68]">Galería de perfiles en preparación</h3>
				<p className="mt-4 text-base text-[#1F3A68]/75">
					Publicaremos fichas profesionales con fotos reales, tono cercano y bloques informativos similares al sitio
					referencia, priorizando transparencia y calidez.
				</p>
				<div className="mt-7 rounded-2xl border border-dashed border-[#1F3A68]/20 bg-white px-6 py-5 text-base text-[#1F3A68]">
					Comparte tu desafío y te conectaremos con la persona que liderará la investigación antes del kickoff.
				</div>
			</div>
		</div>
	</section>
);

export default EquipoSection;
