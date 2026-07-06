import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard = ({ title, description, linkText, color, icon, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[#1D2024]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 cursor-pointer h-full min-h-[320px]"
    >
        {/* Glow underneath the card based on its accent color */}
        <div 
            className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-[80%] h-[30px] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundColor: color }}
        ></div>
        
        {/* Border Glow line on hover */}
        <div 
            className="absolute bottom-0 left-[10%] w-[80%] h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-[0_0_20px_var(--tw-shadow-color)]"
            style={{ backgroundColor: color, '--tw-shadow-color': color }}
        ></div>

        {/* Transform inner content to create parallax depth */}
        <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full pointer-events-none relative z-10">

            <div className="z-10 flex-grow">
                {/* Icon Box */}
                <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-lg transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${color}15` }}
                >
                    <div style={{ color: color }}>
                        {icon}
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[95%] mb-8">
                    {description}
                </p>
            </div>

            <div className="z-10 mt-auto">
                <span 
                    className="text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
                    style={{ color: color }}
                >
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </div>
        </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'We craft clean, modern interfaces and intuitive user experiences that bring your brand to life online.',
      linkText: 'View Work',
      color: '#00E5FF', // Cyan
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: 'Branding',
      description: 'We build memorable, cohesive brand identities — from logos to voice — that resonate with your audience.',
      linkText: 'View Work',
      color: '#D32F2F', // Red
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: 'Marketing',
      description: 'We run data-driven marketing campaigns that boost visibility, engagement, and measurable growth.',
      linkText: 'View Work',
      color: '#D9A01B', // Yellow
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ) 
    },
    {
      title: 'Development',
      description: 'We engineer robust, scalable web and mobile platforms built to perform in a connected world.',
      linkText: 'View Work',
      color: '#00A896', // Teal
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="min-h-screen border-t border-white/5 px-6 sm:px-8 lg:px-24 py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 sm:mb-20 text-center tracking-widest text-white/90"
        >
          OUR SERVICES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;