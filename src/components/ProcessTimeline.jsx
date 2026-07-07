import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Discovery & Architecture',
    description: 'We dive deep into your requirements, defining the system architecture, database schema, and technology stack to ensure scalability from day one.',
    color: '#00E5FF', // Cyan
  },
  {
    id: '02',
    title: 'UI/UX Prototyping',
    description: 'Our design team crafts pixel-perfect, interactive wireframes and high-fidelity prototypes, focusing on premium aesthetics and user retention.',
    color: '#D9A01B', // Yellow
  },
  {
    id: '03',
    title: 'Agile Development',
    description: 'We build your product using iterative sprints. Our engineers write clean, modular, and well-documented code driven by custom data structures.',
    color: '#00A896', // Green
  },
  {
    id: '04',
    title: 'QA & Security',
    description: 'Rigorous testing is performed across all layers. We ensure 100% ACID compliance, eliminate vulnerabilities, and test edge cases thoroughly.',
    color: '#8B5CF6', // Purple
  },
  {
    id: '05',
    title: 'Deployment & Scale',
    description: 'Your application is containerized and deployed to the cloud. We set up CI/CD pipelines and monitoring to guarantee high availability as you scale.',
    color: '#D32F2F', // Red
  }
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="relative px-6 sm:px-8 lg:px-24 py-24 sm:py-32 border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 sm:mb-32"
        >
          <p className="text-[#00E5FF] text-sm tracking-[0.3em] uppercase font-semibold mb-4">Our Methodology</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-white/90">
            HOW WE BUILD
          </h2>
        </motion.div>

        {/* The Vertical Line */}
        <div className="absolute left-[38px] md:left-1/2 top-[220px] bottom-10 w-[2px] bg-white/10 -translate-x-1/2 rounded-full hidden sm:block" />

        <div className="relative flex flex-col gap-12 md:gap-24">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0; // Alternating layout
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div 
                  className="absolute left-[38px] md:left-1/2 w-6 h-6 rounded-full border-4 border-[#12151a] shadow-[0_0_20px_rgba(0,0,0,0.4)] z-10 -translate-x-1/2 hidden sm:block"
                  style={{ backgroundColor: step.color }}
                >
                  <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: step.color }} />
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-[85%] md:w-[45%] sm:ml-auto md:ml-0 text-left">
                  <div className="bg-[#1D2024]/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-500 p-8 sm:p-10 rounded-[2.5rem] group relative overflow-hidden">
                    
                    {/* Subtle Glow Background on Hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at center, ${step.color} 0%, transparent 70%)` }}
                    />

                    <span 
                      className="text-6xl sm:text-7xl font-black opacity-[0.03] absolute top-4 right-8 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110"
                      style={{ color: step.color }}
                    >
                      {step.id}
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other half on Desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
