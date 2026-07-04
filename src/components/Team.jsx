import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role, color, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col items-center text-center group cursor-pointer"
    >
      <div className="relative w-56 h-56 mb-8 rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500 bg-[#1D2024]">
         
         {/* Placeholder Avatar - Replace with actual images */}
         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2e33] to-[#121417]">
             <span className="text-white/20 text-6xl font-black">{name.charAt(0)}</span>
         </div>
         
         {/* Hover Glow Underneath */}
         <div 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[40px] blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundColor: color }}
         ></div>
         
         {/* Bottom Accent Line */}
         <div 
            className="absolute bottom-0 left-0 w-full h-[6px] transition-all duration-500 opacity-50 group-hover:opacity-100"
            style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}
         ></div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{name}</h3>
      <p className="text-white/40 text-sm max-w-[220px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
    </motion.div>
  );
};

const Team = () => {
  const team = [
    { name: 'Michael', role: 'CEO', color: '#00E5FF' },
    { name: 'Eric', role: 'Lead Developer', color: '#D32F2F' },
    { name: 'Sama', role: 'Designer', color: '#D9A01B' },
    { name: 'Brony', role: 'Marketing', color: '#00A896' }
  ];

  return (
    <section id="team" className="px-8 lg:px-24 py-32 bg-[#1A1D21] border-t border-white/5 pb-48">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-extrabold mb-24 text-center tracking-widest text-white/90"
        >
          OUR VISIONARY TEAM
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
