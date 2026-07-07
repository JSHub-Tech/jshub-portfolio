import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', color: '#00E5FF', radius: 140, duration: 25, delay: 0 },
  { name: 'Django', color: '#00A896', radius: 200, duration: 35, delay: 5 },
  { name: 'FastAPI', color: '#00A896', radius: 200, duration: 35, delay: 22 },
  { name: 'Neo4j', color: '#D9A01B', radius: 260, duration: 45, delay: 10 },
  { name: 'MongoDB', color: '#8B5CF6', radius: 260, duration: 45, delay: 32 },
  { name: 'Redis', color: '#D32F2F', radius: 320, duration: 55, delay: 15 },
  { name: 'Tailwind', color: '#00E5FF', radius: 320, duration: 55, delay: 42 },
  { name: 'PostgreSQL', color: '#00A3C1', radius: 380, duration: 65, delay: 0 },
  { name: 'Docker', color: '#00E5FF', radius: 380, duration: 65, delay: 32 },
];

const TechStackOrbit = () => {
  return (
    <section className="relative px-6 sm:px-8 lg:px-24 py-24 sm:py-32 border-t border-white/5 bg-transparent overflow-hidden flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24 relative z-20"
      >
        <p className="text-[#D9A01B] text-sm tracking-[0.3em] uppercase font-semibold mb-4">Core Technologies</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-white/90">
          TECH STACK UNIVERSE
        </h2>
      </motion.div>

      {/* Orbit Container */}
      <div className="relative w-full max-w-[800px] h-[500px] sm:h-[600px] md:h-[800px] flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
        
        {/* Central Core */}
        <div className="absolute z-10 flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#12151a] border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
           <div className="absolute inset-0 rounded-full animate-pulse opacity-10 bg-white" />
           <span className="font-black text-2xl sm:text-3xl tracking-widest text-white mb-1">JSHub</span>
           <span className="text-[#00E5FF] text-[10px] tracking-[0.3em] uppercase font-bold">Core</span>
        </div>

        {/* Orbit Rings */}
        {[140, 200, 260, 320, 380].map((radius, i) => (
          <div 
            key={`ring-${i}`}
            className="absolute rounded-full border border-white/[0.03]"
            style={{ width: radius * 2, height: radius * 2 }}
          />
        ))}

        {/* Orbiting Tech Badges */}
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{ 
              width: tech.radius * 2, 
              height: tech.radius * 2, 
              marginLeft: -tech.radius, 
              marginTop: -tech.radius 
            }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: tech.duration, repeat: Infinity, delay: -tech.delay }}
          >
            {/* The "Planet" Badge Counter-Rotates to stay upright */}
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1D2024]/80 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-110 hover:border-white/30 transition-all duration-300 cursor-pointer group origin-center"
              animate={{ rotate: -360 }}
              transition={{ ease: "linear", duration: tech.duration, repeat: Infinity, delay: -tech.delay }}
            >
               <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" 
                  style={{ backgroundColor: tech.color }} 
               />
               <div 
                  className="w-2.5 h-2.5 rounded-full mr-3 shadow-[0_0_10px_currentColor] group-hover:animate-pulse" 
                  style={{ backgroundColor: tech.color, color: tech.color }} 
               />
               <span className="text-white/90 text-sm font-bold tracking-wider group-hover:text-white transition-colors duration-300">
                 {tech.name}
               </span>
            </motion.div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default TechStackOrbit;
