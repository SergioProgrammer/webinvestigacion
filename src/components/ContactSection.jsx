import ContactForm from './ContactForm.jsx';
import { useContent } from '../cms/ContentContext.jsx';

const ContactSection = () => {
	const {
		content: {
			contact: { heading, description, email, phone },
		},
	} = useContent();

	return (
		<section id="contacto" className="bg-[#FFFEF2] py-16">
			<div className="mx-auto grid w-full gap-10 px-16 md:grid-cols-[1.1fr_1fr] md:items-start lg:px-32">
				<div className="flex flex-col gap-6 rounded-[32px] border border-[#00003D]/15 bg-white p-8 shadow-xl shadow-[#00003D]/10">
					<div className="space-y-4">
						<p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00003D]/60">Contacto</p>
						<h2 className="text-3xl font-semibold text-[#00003D]">{heading}</h2>
						<p className="text-base text-[#00003D]/70">{description}</p>
					</div>
					<ul className="space-y-3 text-sm text-[#00003D]/70">
						<li className="flex items-center gap-3">
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00003D] text-[#FFFEF2]">Email</span>
							<span className="font-semibold text-[#00003D]">{email}</span>
						</li>
						<li className="flex items-center gap-3">
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00003D] text-[#FFFEF2]">Tel</span>
							<span className="font-semibold text-[#00003D]">{phone}</span>
						</li>
					</ul>
					<p className="text-xs uppercase tracking-[0.3em] text-[#00003D]/60">Tiempo de respuesta</p>
					<p className="text-sm font-semibold text-[#00003D]">Menos de 24 horas hábiles</p>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactSection;
