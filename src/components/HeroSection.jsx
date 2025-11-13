import { useContent } from '../cms/ContentContext.jsx';

const neuralHero = {
	label: 'CogNEuroEdu',
	title: 'Investigating in Cognitive Neuroscience',
	description:
		'lumen cognitionis emergit ubi scientia et humanitas se tangunt. In hoc campo, CogNeuroEdu traducit datos en decisiones capaces.',
	image: '/6210.jpg',
};

const HeroSection = () => {
	const {
		content: {
			hero: { ctaLabel },
		},
	} = useContent();

	return (
		<section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#0b1228] text-white">
			<div className="absolute inset-0">
				<img src={neuralHero.image} alt={neuralHero.title} className="h-full w-full object-cover object-center" loading="lazy" />
				<div className="absolute inset-0 bg-gradient-to-br from-[#1F3A68]/85 via-[#0b1120]/70 to-transparent" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(227,167,60,0.25),transparent_45%)]" />
			</div>
			<div className="relative z-10 flex w-full justify-center px-6 py-12 sm:px-10 lg:px-16">
				<div className="w-full max-w-2xl rounded-[36px] bg-white/95 p-10 text-left text-[#1F3A68] shadow-3xl shadow-[#0b1120]/40 ring-1 ring-[#1F3A68]/15">
					<p className="text-base font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]">{ctaLabel}</p>
					<h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">{neuralHero.title}</h1>
					<p className="mt-4 text-lg text-[#1F3A68]/80 md:text-xl">{neuralHero.description}</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
