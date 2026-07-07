import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Our Mission',
    description:
      'To empower ambitious brands with scalable, high-performance digital products engineered to drive measurable growth.',
    color: '#00E5FF',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.008v.008H12v-.008z" />
        <circle cx="12" cy="12" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    description:
      'To be the trusted engineering partner behind the next generation of category-defining digital experiences.',
    color: '#D32F2F',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Our Values',
    description:
      'Precision engineering, transparent communication, and a relentless focus on real business outcomes.',
    color: '#D9A01B',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const ValueCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-7 rounded-2xl bg-[#1D2024]/60 border border-white/5 hover:border-white/15 transition-colors duration-300"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
      style={{ backgroundColor: `${item.color}18`, color: item.color }}
    >
      {item.icon}
    </div>
    <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{item.title}</h4>
    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
  </motion.div>
);

export default function About() {
  return (
    // bg-transparent (not an opaque fill) so the shared particle starfield
    // rendered once in Layout.jsx shows through, same as every other section.
    <section id="about" className="border-t border-white/5 bg-transparent py-24 sm:py-32 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Side: Bold Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-accent-cyan"></span>
              About JSHub
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">
                Scalable Solutions
              </span> <br />
              for ambitious brands.
            </h3>
          </motion.div>

          {/* Right Side: Mission Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              <p>
                At JSHub Agency, we don't just write code. We partner with visionaries to craft digital solutions designed to accelerate business growth, optimize operations, and dominate the modern web.
              </p>
              <p>
                From highly scalable enterprise architectures to breathtaking mobile experiences, our expertise lies in bridging the gap between cutting-edge technology and real-world business results.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Mission / Vision / Values cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <ValueCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}