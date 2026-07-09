import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

const JSHUB_EMAIL = 'contact@jshub.live';
const WHATSAPP_LINK = 'https://wa.me/message/ILQZLGESBKONH1';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi JSHub Team,\n\nMy name is ${formData.name}.\nMy email: ${formData.email}\n\n${formData.message}\n\n— Sent via JSHub Website`
    );
    // Opens Gmail compose with everything pre-filled — no backend, no auth needed!
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${JSHUB_EMAIL}&su=${subject}&body=${body}`,
      '_blank'
    );
  };

  const inputClasses = "w-full bg-[#1D2024]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_0_3px_rgba(0,229,255,0.15)] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">Your Name</label>
          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Full name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">Your Email</label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClasses} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">Message</label>
        <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className={`${inputClasses} resize-none`} />
      </div>
      <button
        type="submit"
        className="w-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan hover:bg-accent-cyan hover:text-[#121417] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300 font-bold py-4 px-12 rounded-xl tracking-wider text-sm mt-2 flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        Open in Gmail & Send
      </button>
      <p className="text-white/25 text-xs text-center">This will open your Gmail with the message pre-filled. Just hit Send!</p>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 sm:px-8 lg:px-24 py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-red text-sm tracking-[0.3em] uppercase font-semibold mb-4">Let's talk</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-widest text-white/90">GET IN TOUCH</h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto font-light">Choose how you'd like to reach us — WhatsApp for a quick chat, or email for a detailed brief.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* WhatsApp Card */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-[#1D2024]/60 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all duration-500 cursor-pointer"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 flex items-center justify-center mb-6 group-hover:bg-[#25D366]/25 transition-colors duration-300">
                <FaWhatsapp size={28} color="#25D366" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Chat on WhatsApp</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Prefer a quick chat? Message us directly on WhatsApp and we'll get back to you within minutes.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[#25D366] font-bold text-sm tracking-wider">
              Open WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </div>
          </motion.a>

          {/* Email / Gmail Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl border border-white/5 bg-[#1D2024]/60"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Send an Email</h3>
            <p className="text-white/45 text-sm mb-6">Fill the form and we'll open Gmail with your message ready to send.</p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
