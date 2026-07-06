import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Layout from './components/Layout';
import Services from './components/Services';
import Stats from './components/Stats';
import MarqueeTicker from './components/MarqueeTicker';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import ContactCTA from './components/ContactCTA';
import VortexAnimation, { Particles } from './components/VortexAnimation';
import Loader from './components/Loader';
import ProjectDetail from './components/ProjectDetail';

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

const JSHUB_EMAIL = 'jshubdigital@gmail.com';
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

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 pb-16 sm:pb-20 lg:pb-24 lg:px-24 overflow-hidden">
        
        {/* Background Stars for Entire Hero Section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas>
            <Particles />
          </Canvas>
        </div>

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
            <a href="#contact" className="inline-block w-full sm:w-auto bg-accent-red/10 text-accent-red border border-accent-red hover:bg-accent-red hover:text-white hover:shadow-[0_0_25px_rgba(211,47,47,0.6)] transition-all duration-300 font-bold py-4 px-10 rounded-lg tracking-wider text-sm text-center">
              START YOUR PROJECT
            </a>
          </div>
        </div>

        {/* Right Side: Hero Animation (CSS/SVG) */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0 overflow-visible">
          <div className="w-full max-w-[360px] sm:max-w-[500px] lg:max-w-[700px]">
            <VortexAnimation />
          </div>
        </div>

      </section>
      
      <Services />
      <Stats />
      <MarqueeTicker />
      <FeaturedProjects />
      <Testimonials />
      <Team />
      <ContactCTA />


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
      
      {/* Full Footer */}
      <footer className="border-t border-white/10 bg-[#0f1114] px-6 sm:px-8 lg:px-24 pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Top grid — 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/5">

            {/* Col 1 — Logo + tagline */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/WebsiteLogo.png" alt="JSHub Logo" className="h-9" />
                <span className="text-white font-extrabold tracking-widest text-lg">JSHub</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                Crafting distinguished digital experiences for modern brands and ambitious startups.
              </p>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="text-white/80 font-bold tracking-widest text-xs uppercase mb-6">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Home',      href: '#home' },
                  { label: 'Services',  href: '#services' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Our Team',  href: '#team' },
                  { label: 'Contact',   href: '#contact' },
                ].map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-3 h-[1px] bg-white/20 group-hover:bg-accent-cyan group-hover:w-5 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact Details */}
            <div>
              <h4 className="text-white/80 font-bold tracking-widest text-xs uppercase mb-6">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <span className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-start gap-3 group cursor-default">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-accent-cyan text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    jshubdigital@gmail.com
                  </span>
                </li>
                <li>
                  <span className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-start gap-3 group cursor-default">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-accent-cyan text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    +92 310 618 2610
                  </span>
                </li>
                <li>
                  <span className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-start gap-3 group cursor-default">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-accent-cyan text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Lahore, Pakistan
                  </span>
                </li>
              </ul>
            </div>

            {/* Col 4 — Social Media */}
            <div>
              <h4 className="text-white/80 font-bold tracking-widest text-xs uppercase mb-6">Follow Us</h4>
              <div className="flex gap-2.5">
                {[
                  { label: 'LinkedIn',         href: 'https://linkedin.com/company/jshub',                        icon: <FaLinkedinIn size={18}/>, hoverBg: '#0A66C2' },
                  { label: 'Instagram',        href: 'https://instagram.com/_jshub',                             icon: <FaInstagram  size={18}/>, hoverBg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
                  { label: 'X (Twitter)',      href: 'https://x.com/_jshub',                                     icon: <FaXTwitter   size={18}/>, hoverBg: '#000000' },
                  { label: 'TikTok',           href: 'https://tiktok.com/@__jshub',                             icon: <FaTiktok     size={18}/>, hoverBg: '#010101' },
                  { label: 'YouTube',          href: 'https://www.youtube.com/@jshub.digital',                  icon: <FaYoutube    size={18}/>, hoverBg: '#FF0000' },
                  { label: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029Vb8ioUyHVvTSj26gGl2i',  icon: <FaWhatsapp   size={18}/>, hoverBg: '#25D366' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="social-icon-btn w-10 h-10 rounded-xl flex items-center justify-center text-white/30 border border-white/8 transition-all duration-300"
                    style={{ '--hover-bg': s.hoverBg }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = s.hoverBg;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.boxShadow = `0 0 16px ${s.hoverBg.includes('gradient') ? 'rgba(220,39,67,0.4)' : s.hoverBg}55`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="text-white/20 text-xs mt-6 leading-relaxed">Follow us for updates,<br/>tips & behind-the-scenes.</p>
            </div>
          </div>

          {/* Bottom row — copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs tracking-widest">
            <span>© 2026 JSHub Agency. All rights reserved.</span>
            <span className="text-white/15">Crafted with ❤️ in Lahore</span>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;