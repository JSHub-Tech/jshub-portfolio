import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Team from './components/Team';
import VortexAnimation from './components/VortexAnimation';

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/_jshub',
    hoverClass: 'hover:text-accent-red',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" d="M4 4l16 16M20 4L4 20" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@jshub.digital',
    hoverClass: 'hover:text-accent-yellow',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_jshub/',
    hoverClass: 'hover:text-accent-blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/jshub/',
    hoverClass: 'hover:text-accent-cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="8" y1="10" x2="8" y2="16" />
        <circle cx="8" cy="7" r="1" fill="currentColor" stroke="none" />
        <path strokeLinecap="round" d="M12 16v-3a2 2 0 014 0v3" />
        <line x1="12" y1="10" x2="12" y2="16" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/JSHubb',
    hoverClass: 'hover:text-accent-red',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h3V6h-3a3 3 0 00-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 011-1z" />
      </svg>
    )
  }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClasses = "w-full bg-[#1D2024]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_0_3px_rgba(0,229,255,0.15)] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      <div>
        <label htmlFor="name" className="block text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto self-center bg-accent-cyan/10 text-accent-cyan border border-accent-cyan hover:bg-accent-cyan hover:text-[#121417] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300 font-bold py-4 px-12 rounded-lg tracking-wider text-sm mt-2"
      >
        {submitted ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
      </button>
    </form>
  );
};

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 pb-16 sm:pb-20 lg:pb-24 lg:px-24 overflow-hidden">

        {/* Left Side: Hero Text */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center pt-28 sm:pt-32 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            JSHUB AGENCY: <br/> CRAFTING <br/>
            <span className="bg-gradient-to-r from-white via-white/90 to-accent-cyan text-transparent bg-clip-text">DISTINGUISHED DIGITAL EXPERIENCES.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 mb-10 max-w-lg font-light tracking-wide">
            Modern web &amp; mobile solutions for a connected world.
          </p>
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-accent-red/10 text-accent-red border border-accent-red hover:bg-accent-red hover:text-white hover:shadow-[0_0_25px_rgba(211,47,47,0.6)] transition-all duration-300 font-bold py-4 px-10 rounded-lg tracking-wider text-sm">
              START YOUR PROJECT
            </button>
          </div>
        </div>

        {/* Right Side: Hero Animation (CSS/SVG) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center min-h-[280px] sm:min-h-[380px] lg:min-h-[600px] py-10 lg:py-0 overflow-visible scale-75 sm:scale-90 lg:scale-100">
          <VortexAnimation />
        </div>

      </section>
      
      <Services />
      <FeaturedProjects />
      <Team />

      {/* Contact Section */}
      <section id="contact" className="px-6 sm:px-8 lg:px-24 py-24 sm:py-32 border-t border-white/5">
        <div className="max-w-[700px] mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center tracking-widest text-white/90"
          >
            GET IN TOUCH
          </motion.h2>
          <p className="text-white/60 mb-12 max-w-lg mx-auto font-light tracking-wide">
            Have a project in mind? Fill out the form below and let's build something great together.
          </p>

          <ContactForm />

          <p className="text-white/40 text-sm mt-8 tracking-wide">
            Or email us directly at{' '}
            <a href="mailto:jshubdigital@gmail.com" className="text-accent-cyan hover:underline">
              jshubdigital@gmail.com
            </a>
          </p>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="border-t border-white/10 px-6 sm:px-8 lg:px-24 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
               <img src="/WebsiteLogo.svg" alt="JSHub Logo" className="h-8 opacity-80" />
               <span className="text-white/60 font-bold tracking-widest">| JSHub Agency</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50 font-semibold tracking-wider">
                <a href="#home" className="hover:text-accent-blue transition-colors">Home</a>
                <a href="#services" className="hover:text-accent-red transition-colors">Services</a>
                <a href="#portfolio" className="hover:text-accent-yellow transition-colors">Portfolio</a>
                <a href="#team" className="hover:text-accent-teal transition-colors">About</a>
                <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`text-white/50 transition-colors duration-300 ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-white/30 text-xs tracking-widest">
                Copyright 2026 JSHub Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default App;