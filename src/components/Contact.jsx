import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Debug logs
// console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
// console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
// console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

// Initialize EmailJS with your public key
if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
} else {
    console.error('Public key is missing!');
}

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
                throw new Error('Public key is missing');
            }
            
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSuccess(true);
            setForm({
                title: '',
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('EmailJS error:', error);
            setError(true);
        }
        setLoading(false);
    };

    return (
        <div id="contact" className="bg-[#F8A5C2] min-h-screen flex flex-col items-center justify-center p-4 py-20">
            <div className="w-full max-w-2xl flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Let's Connect!</h1>
                <p className="text-center mb-8 text-lg">Have a question or want to work together?</p>

                <div className="nes-container with-title is-rounded bg-white/90">
                    <p className="title !bg-transparent absolute -top-5 left-0">Email me!</p>
                    <div className="flex flex-col gap-4">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="title">Subject</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    required
                                    className="nes-input"
                                    placeholder="Your subject"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="nes-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="nes-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="nes-textarea"
                                    placeholder="Your message here..."
                                    rows="4"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`nes-btn is-primary w-full ${loading ? 'is-disabled' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {success && (
                            <div className="nes-container is-rounded is-success">
                                <p>Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {error && (
                            <div className="nes-container is-rounded is-error">
                                <p>Oops! Something went wrong. Please try again later.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* <div className="mt-8 w-full bg-white !p-4 nes-container is-rounded flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-row items-center gap-2 md:gap-4">
                        <a
                            href="https://github.com/SobaSkee"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="nes-icon github is-large"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/stanley-ke"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="nes-icon linkedin is-large"></i>
                        </a>
                        <a
                            href="mailto:stanleyke.jobs@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="nes-icon gmail is-large"></i>
                        </a>
                    </div>
                    <a
                        href="/Stanley_Ke_Resume_May_2025.pdf"
                        className="nes-btn is-primary text-xs md:text-xl"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;