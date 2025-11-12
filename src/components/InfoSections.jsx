import { useContent } from '../cms/ContentContext.jsx';

const InfoSections = () => {
	const {
		content: { sections },
	} = useContent();

		return (
			<section className="bg-gradient-to-b from-[#FBF7EF] to-[#F7F3E6] py-20">
				<div className="mx-auto flex w-full flex-col gap-8 px-16 lg:px-32">
					<header className="max-w-3xl">
					<p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70">Cómo trabajamos</p>
					<h2 className="mt-3 text-4xl font-semibold text-[#1F3A68]">Metodologías claras, impacto medible</h2>
					<p className="mt-4 text-lg text-[#1F3A68]/75">
						Cada bloque explica nuestro acompañamiento, muy similar a la narrativa limpia y aireada de Clínica Barajas.
					</p>
				</header>
				<div className="grid gap-8 md:grid-cols-2">
					{sections.map((section) => (
						<article
							key={section.id}
							id={section.id}
							className="relative flex flex-col gap-5 rounded-[32px] border border-[#1F3A68]/10 bg-white p-10 shadow-xl shadow-[#1F3A68]/5 transition hover:-translate-y-1 hover:border-[#c88b2a]/40"
						>
							<div className="absolute -top-4 left-10 inline-flex h-10 items-center rounded-full bg-[#c88b2a] px-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#1F3A68]">
								Insight
							</div>
							<h3 className="pt-5 text-3xl font-semibold text-[#1F3A68]">{section.title}</h3>
							<p className="text-lg leading-relaxed text-[#1F3A68]/75">{section.description}</p>
						</article>
					))}
				</div>
				</div>
			</section>
		);
	};

export default InfoSections;
