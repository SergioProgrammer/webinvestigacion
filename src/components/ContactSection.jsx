import ContactForm from './ContactForm.jsx';
import { useContent } from '../cms/ContentContext.jsx';

const ContactSection = () => {
	const {
		content: {
			contact: { heading, description, email, phone },
		},
	} = useContent();

	return (
		<section id="contacto" className="bg-[#F7F3E6] py-20">
			<div className="mx-auto grid w-full gap-12 px-16 md:grid-cols-[1.1fr_1fr] md:items-start lg:px-32">
				<div className="flex flex-col gap-7 rounded-[36px] border border-[#1F3A68]/15 bg-white p-10 shadow-xl shadow-[#1F3A68]/10">
					<div className="space-y-5">
						<p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#2c4b8c]/70">Contacto</p>
						<h2 className="text-4xl font-semibold text-[#1F3A68]">{heading}</h2>
						<p className="text-lg text-[#1F3A68]/75">{description}</p>
					</div>
					<ul className="space-y-4 text-base text-[#1F3A68]/75">
						<li className="flex items-center gap-3">
							<span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c88b2a] text-base font-semibold text-[#1F3A68]">Email</span>
							<span className="font-semibold text-[#1F3A68]">{email}</span>
						</li>
						<li className="flex items-center gap-3">
							<span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c88b2a] text-base font-semibold text-[#1F3A68]">Tel</span>
							<span className="font-semibold text-[#1F3A68]">{phone}</span>
						</li>
					</ul>
					<p className="text-sm uppercase tracking-[0.35em] text-[#2c4b8c]/70">Tiempo de respuesta</p>
					<p className="text-base font-semibold text-[#1F3A68]">Menos de 24 horas hábiles</p>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactSection;
