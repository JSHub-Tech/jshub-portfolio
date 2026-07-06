import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="border-t border-white/5 bg-[#1A1D21] px-8 lg:px-24 py-32 relative overflow-hidden">

      {/* Big background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-accent-red/5 rounded-full blur-[120px]" />
        <div className="absolute w-[400px] h-[300px] bg-accent-cyan/4 rounded-full blur-[80px]" />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-white/10 rounded-tl-2xl" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-white/10 rounded-br-2xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-red text-sm tracking-[0.35em] uppercase font-semibold mb-6"
        >
          Let's Build Something Great
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Ready to{' '}
          <span className="bg-gradient-to-r from-accent-cyan via-white to-accent-red text-transparent bg-clip-text">
            Transform
          </span>
          <br />
          Your Digital Presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          From concept to launch — we craft exceptional digital experiences that drive real results.
          Let's turn your vision into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:contact@jshubagency.com"
            className="group relative px-10 py-4 rounded-xl font-bold tracking-wider text-sm overflow-hidden bg-accent-red text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(211,47,47,0.5)] hover:scale-105"
          >
            <span className="relative z-10">START YOUR PROJECT →</span>
          </a>

          <a
            href="mailto:contact@jshubagency.com"
            className="px-10 py-4 rounded-xl font-bold tracking-wider text-sm border border-white/15 text-white/70 hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </motion.div>

        {/* Contact details row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/30"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            contact@jshubagency.com
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +92 310 618 2610
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Lahore, Pakistan
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
