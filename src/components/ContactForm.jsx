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
			className="flex flex-col gap-4 rounded-[32px] border border-[#00003D]/15 bg-white p-6 shadow-xl shadow-[#00003D]/10 md:p-8"
		>
			<div className="grid gap-2">
				<label htmlFor="name" className="text-sm font-medium text-[#00003D]">
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
					className="rounded-xl border border-[#00003D]/15 bg-white px-4 py-2 text-[#00003D] placeholder:text-[#00003D]/40 focus:border-[#00003D] focus:outline-none focus:ring-2 focus:ring-[#00003D]/30"
				/>
			</div>

			<div className="grid gap-2">
				<label htmlFor="email" className="text-sm font-medium text-[#00003D]">
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
					className="rounded-xl border border-[#00003D]/15 bg-white px-4 py-2 text-[#00003D] placeholder:text-[#00003D]/40 focus:border-[#00003D] focus:outline-none focus:ring-2 focus:ring-[#00003D]/30"
				/>
			</div>

			<div className="grid gap-2">
				<label htmlFor="message" className="text-sm font-medium text-[#00003D]">
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
					className="rounded-xl border border-[#00003D]/15 bg-white px-4 py-2 text-[#00003D] placeholder:text-[#00003D]/40 focus:border-[#00003D] focus:outline-none focus:ring-2 focus:ring-[#00003D]/30"
				/>
			</div>

			<button
				type="submit"
				className="mt-2 inline-flex items-center justify-center rounded-full bg-[#00003D] px-6 py-3 text-sm font-semibold text-[#FFFEF2] shadow-lg shadow-[#00003D]/30 transition hover:shadow-[#00003D]/50"
			>
				Enviar mensaje
			</button>

			{status.type === 'error' && <p className="text-sm font-semibold text-[#00003D]">{status.message}</p>}
			{status.type === 'success' && <p className="text-sm font-semibold text-[#00003D]">{status.message}</p>}
		</form>
	);
};

export default ContactForm;
