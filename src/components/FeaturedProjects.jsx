import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, size, bgClass, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 bg-[#1D2024]/40 flex-shrink-0 w-[80vw] sm:w-[60vw] h-[280px] snap-center md:w-auto md:h-auto md:flex-shrink md:snap-none ${size}`}
    >
      {/* Background Image / Placeholder */}
      <div className={`w-full h-full ${bgClass} opacity-40 group-hover:opacity-80 transition-opacity duration-700 bg-cover bg-center flex items-center justify-center`}>
         {/* Placeholder text if no image */}
         <span className="text-white/10 font-black text-4xl">PROJECT</span>
      </div>
      
      {/* Gradient Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Text Content */}
      <div className="absolute bottom-8 left-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-white font-bold text-2xl mb-2">{title}</h3>
        <p className="text-white/60 text-sm">View Case Study &rarr;</p>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="portfolio" className="min-h-screen px-0 sm:px-8 lg:px-24 py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 sm:mb-20 text-center tracking-widest text-white/90 px-8 sm:px-0"
        >
          FEATURED PROJECTS
        </motion.h2>
        
        {/* Mobile: inline horizontal scroller. Desktop (md+): Bento Box Grid Layout */}
        <div className="flex md:grid md:grid-cols-4 md:auto-rows-[280px] gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-8 sm:px-0 md:px-0 pb-4 md:pb-0 scrollbar-hide">
          <ProjectCard index={0} title="Analytics Dashboard" size="md:col-span-2 md:row-span-2" bgClass="bg-accent-cyan/10" />
          <ProjectCard index={1} title="Mobile App UI" size="md:col-span-1 md:row-span-1" bgClass="bg-accent-red/10" />
          <ProjectCard index={2} title="E-Commerce Platform" size="md:col-span-1 md:row-span-1" bgClass="bg-accent-yellow/10" />
          <ProjectCard index={3} title="Corporate Website" size="md:col-span-2 md:row-span-1" bgClass="bg-accent-teal/10" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;