import { useContent } from '../cms/ContentContext.jsx';

const stats = [
	{ label: 'Investigaciones guiadas', value: '+120' },
	{ label: 'Sectores analizados', value: '18' },
	{ label: 'Satisfacción clientes', value: '4.9/5' },
];

const heroPhoto =
	'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80&sat=-15';

const HeroSection = () => {
	const {
		content: {
			hero: { title, subtitle, ctaLabel },
		},
	} = useContent();

	return (
			<section id="hero" className="relative overflow-hidden bg-[#FFFEF2] py-20 text-[#00003D]">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00003D]/10 blur-3xl" />
					<div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 rounded-full bg-[#00003D]/15 blur-3xl" />
				</div>
				<div className="relative mx-auto grid w-full gap-12 px-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-32">
				<div className="space-y-6 text-center lg:text-left">
					<span className="inline-flex items-center justify-center rounded-full border border-[#00003D]/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#00003D] shadow-sm">
						Investigación aplicada
					</span>
					<h1 className="text-4xl font-extrabold leading-tight text-[#00003D] md:text-5xl">{title}</h1>
					<p className="text-lg text-[#00003D]/70 md:text-xl">{subtitle}</p>
					<div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
						<a
							href="#contacto"
							className="inline-flex items-center rounded-full bg-[#00003D] px-7 py-3 text-base font-semibold text-[#FFFEF2] shadow-xl shadow-[#00003D]/30 transition hover:shadow-[#00003D]/50"
						>
							{ctaLabel}
						</a>
						<a
							href="#investigaciones"
							className="inline-flex items-center rounded-full border border-[#00003D] bg-white/90 px-7 py-3 text-base font-semibold text-[#00003D] transition hover:bg-[#FFFEF2]"
						>
							Conoce nuestras áreas
						</a>
					</div>
					<dl className="grid grid-cols-1 gap-5 pt-4 text-left sm:grid-cols-3">
						{stats.map((stat) => (
							<div key={stat.label} className="rounded-2xl border border-[#00003D]/10 bg-white/90 p-4 shadow-sm">
								<dt className="text-xs uppercase tracking-[0.25em] text-[#00003D]/60">{stat.label}</dt>
								<dd className="mt-2 text-2xl font-semibold text-[#00003D]">{stat.value}</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="relative">
					<div className="absolute -top-6 right-10 h-24 w-24 rounded-full bg-[#00003D]/20 blur-2xl" />
					<div className="absolute -bottom-10 left-4 h-20 w-20 rounded-full bg-[#00003D]/15 blur-2xl" />
					<div className="relative rounded-[32px] bg-white/90 p-6 shadow-2xl shadow-[#00003D]/10 ring-1 ring-[#00003D]/10">
						<div className="rounded-3xl border border-[#FFFEF2]/20 bg-[#00003D] p-4 text-[#FFFEF2] shadow-lg">
							<p className="text-xs uppercase tracking-[0.4em] text-[#FFFEF2]/70">Casos activos</p>
							<p className="mt-2 text-4xl font-semibold">27 proyectos</p>
							<p className="mt-1 text-sm text-[#FFFEF2]/80">Monitoreando descubrimientos en tiempo real</p>
						</div>
						<div
							className="mt-6 h-64 w-full rounded-3xl bg-cover bg-center shadow-inner shadow-black/10"
							style={{ backgroundImage: `url('${heroPhoto}')` }}
						/>
						<div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#00003D]/10 bg-white/80 p-4">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-[#00003D]/60">Entregas</p>
								<p className="text-2xl font-semibold text-[#00003D]">3 reportes/mes</p>
							</div>
							<div className="rounded-full bg-[#FFFEF2] px-4 py-2 text-sm font-semibold text-[#00003D]">
								Responsable senior
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
