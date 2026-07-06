import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'CEO, TechNova Solutions',
    text: 'JSHub Agency completely transformed our digital presence. The attention to detail and the quality of their work is unmatched. Our conversions went up 340% after launch.',
    rating: 5,
    color: '#00E5FF',
    initials: 'AR',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director, Bloom Retail',
    text: 'Working with JSHub was an absolute pleasure. They delivered a stunning e-commerce platform on time and exceeded every expectation we had. Highly recommended.',
    rating: 5,
    color: '#D32F2F',
    initials: 'SM',
  },
  {
    name: 'Omar Farooq',
    role: 'Founder, Launchpad Ventures',
    text: 'The team at JSHub understood our vision immediately and built something truly exceptional. Clean code, beautiful design, and rock-solid performance.',
    rating: 5,
    color: '#D9A01B',
    initials: 'OF',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="border-t border-white/5 bg-white/[0.02] px-8 lg:px-24 py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent-red text-sm tracking-[0.3em] uppercase font-semibold mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-widest text-white/90">WHAT CLIENTS SAY</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group p-8 rounded-3xl bg-[#1D2024]/80 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Quote mark */}
              <span
                className="absolute top-4 right-6 text-7xl font-black leading-none opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none"
                style={{ color: t.color }}
              >
                "
              </span>

              {/* Bottom glow on hover */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: t.color }}
              />

              <Stars count={t.rating} />

              <p className="text-white/65 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                  style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}30` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
