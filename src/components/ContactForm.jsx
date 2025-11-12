import { useState } from 'react';

const initialState = {
	name: '',
	email: '',
	message: '',
};

const ContactForm = () => {
	const [formData, setFormData] = useState(initialState);
	const [status, setStatus] = useState({ type: null, message: '' });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
			setStatus({ type: 'error', message: 'Por favor completa todos los campos antes de enviar.' });
			return;
		}

		setStatus({ type: 'success', message: '¡Gracias por tu mensaje! Nos pondremos en contacto muy pronto.' });
		setFormData(initialState);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-5 rounded-[36px] border border-[#1F3A68]/15 bg-white p-8 shadow-xl shadow-[#1F3A68]/10 md:p-10"
		>
			<div className="grid gap-3">
				<label htmlFor="name" className="text-base font-medium text-[#1F3A68]">
					Nombre
				</label>
				<input
					value={formData.name}
					onChange={handleChange}
					type="text"
					name="name"
					id="name"
					required
					placeholder="Tu nombre completo"
					className="rounded-2xl border border-[#1F3A68]/15 bg-white px-5 py-3 text-[#1F3A68] placeholder:text-[#1F3A68]/40 focus:border-[#1F3A68] focus:outline-none focus:ring-2 focus:ring-[#1F3A68]/30"
				/>
			</div>

			<div className="grid gap-3">
				<label htmlFor="email" className="text-base font-medium text-[#1F3A68]">
					Email
				</label>
				<input
					value={formData.email}
					onChange={handleChange}
					type="email"
					name="email"
					id="email"
					required
					placeholder="correo@ejemplo.com"
					className="rounded-2xl border border-[#1F3A68]/15 bg-white px-5 py-3 text-[#1F3A68] placeholder:text-[#1F3A68]/40 focus:border-[#1F3A68] focus:outline-none focus:ring-2 focus:ring-[#1F3A68]/30"
				/>
			</div>

			<div className="grid gap-3">
				<label htmlFor="message" className="text-base font-medium text-[#1F3A68]">
					Mensaje
				</label>
				<textarea
					value={formData.message}
					onChange={handleChange}
					name="message"
					id="message"
					required
					rows="5"
					placeholder="Cuéntanos sobre tu proyecto o las preguntas que quieres responder."
					className="rounded-2xl border border-[#1F3A68]/15 bg-white px-5 py-3 text-[#1F3A68] placeholder:text-[#1F3A68]/40 focus:border-[#1F3A68] focus:outline-none focus:ring-2 focus:ring-[#1F3A68]/30"
				/>
			</div>

			<button
				type="submit"
				className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c88b2a] px-8 py-4 text-base font-semibold text-[#1F3A68] shadow-lg shadow-[#c88b2a]/40 transition hover:bg-[#e3a73c]"
			>
				Enviar mensaje
			</button>

			{status.type === 'error' && <p className="text-base font-semibold text-[#2c4b8c]">{status.message}</p>}
			{status.type === 'success' && <p className="text-base font-semibold text-[#c88b2a]">{status.message}</p>}
		</form>
	);
};

export default ContactForm;
