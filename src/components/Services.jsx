import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard = ({ title, description, color, icon, index }) => {
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
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col p-8 rounded-3xl bg-[#1D2024]/80 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 cursor-default h-full min-h-[280px]"
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
                <p className="text-white/50 text-sm leading-relaxed max-w-[95%]">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We build stunning, high-performance websites and scalable full-stack web applications tailored to your business needs.',
      color: '#00E5FF', // Cyan
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      title: 'Mobile Apps',
      description: 'We engineer seamless, intuitive, and powerful mobile applications for both iOS and Android platforms.',
      color: '#D32F2F', // Red
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'We design premium, user-centric interfaces and brand identities that leave a lasting impression.',
      color: '#D9A01B', // Yellow
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: 'Video Editing',
      description: 'High-end post-production, motion graphics, and cinematic video editing to elevate your brand storytelling.',
      color: '#00A896', // Teal
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      ) 
    },
    {
      title: 'Logo Design',
      description: 'We craft iconic, timeless logos that capture the core essence and personality of your business.',
      color: '#00A3C1', // Blue
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a3 3 0 10-4.242-4.242l-4.648 4.764a15.996 15.996 0 00-3.395 1.622m3.395-1.622a15.996 15.996 0 00-1.622 3.395m-3.42-3.42a15.995 15.995 0 00-4.764 4.648l-3.879 3.879a3 3 0 104.242 4.242l4.648-4.764c1.46-1.503 2.656-3.181 3.52-5.006" />
        </svg>
      )
    },
    {
      title: 'Branding',
      description: 'We build memorable, cohesive brand identities — from voice to visual language — that resonate with your audience.',
      color: '#D32F2F', // Red
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: 'Marketing',
      description: 'We run data-driven marketing campaigns that boost visibility, engagement, and measurable business growth.',
      color: '#D9A01B', // Yellow
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ) 
    },
    {
      title: 'Custom Software',
      description: 'We engineer robust, bespoke enterprise systems and web platforms built to scale and perform.',
      color: '#00E5FF', // Cyan
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a href="#footer" className="inline-block text-white/50 hover:text-white text-lg tracking-wide transition-colors duration-300">
            To check out our work you can visit our social media pages <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;