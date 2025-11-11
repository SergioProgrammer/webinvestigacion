import { useContent } from '../cms/ContentContext.jsx';

const InfoSections = () => {
	const {
		content: { sections },
	} = useContent();

		return (
			<section className="bg-[#FFFEF2] py-16">
				<div className="mx-auto flex w-full flex-col gap-6 px-16 lg:px-32">
					<header className="max-w-3xl">
					<p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00003D]/60">Cómo trabajamos</p>
					<h2 className="mt-2 text-3xl font-semibold text-[#00003D]">Metodologías claras, impacto medible</h2>
					<p className="mt-3 text-base text-[#00003D]/70">
						Cada bloque explica nuestro acompañamiento, muy similar a la narrativa limpia y aireada de Clínica Barajas.
					</p>
				</header>
				<div className="grid gap-8 md:grid-cols-2">
					{sections.map((section) => (
						<article
							key={section.id}
							id={section.id}
							className="relative flex flex-col gap-4 rounded-[28px] border border-[#00003D]/10 bg-white p-8 shadow-xl shadow-[#00003D]/5 transition hover:-translate-y-1 hover:border-[#00003D]/20"
						>
							<div className="absolute -top-4 left-8 inline-flex h-9 items-center rounded-full bg-[#00003D] px-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FFFEF2]">
								Insight
							</div>
							<h3 className="pt-4 text-2xl font-semibold text-[#00003D]">{section.title}</h3>
							<p className="text-base leading-relaxed text-[#00003D]/70">{section.description}</p>
						</article>
					))}
				</div>
				</div>
			</section>
		);
	};

export default InfoSections;
