import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data for projects — you can replace the screenshot URLs here later.
const projectData = {
  1: {
    title: 'Nexus Analytics',
    category: 'Web Application',
    screenshots: [
      'https://via.placeholder.com/1920x1080/0A66C2/ffffff?text=Nexus+Screenshot+1',
      'https://via.placeholder.com/1920x1080/111827/ffffff?text=Nexus+Screenshot+2',
      'https://via.placeholder.com/1920x1080/0f1114/ffffff?text=Nexus+Screenshot+3'
    ]
  },
  2: {
    title: 'FinTech Wallet',
    category: 'Mobile App',
    screenshots: [
      'https://via.placeholder.com/1080x1920/D32F2F/ffffff?text=Wallet+App+Screen+1',
      'https://via.placeholder.com/1080x1920/1f2937/ffffff?text=Wallet+App+Screen+2'
    ]
  },
  3: {
    title: 'Aura E-Commerce',
    category: 'E-Commerce',
    screenshots: [
      'https://via.placeholder.com/1920x1080/D9A01B/ffffff?text=Aura+Screenshot+1',
      'https://via.placeholder.com/1920x1080/111827/ffffff?text=Aura+Screenshot+2'
    ]
  },
  4: {
    title: 'Vanguard Corporate',
    category: 'Web Design',
    screenshots: [
      'https://via.placeholder.com/1920x1080/00A896/ffffff?text=Vanguard+Screenshot+1',
      'https://via.placeholder.com/1920x1080/111827/ffffff?text=Vanguard+Screenshot+2'
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1114] text-white">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent-cyan hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0f1114] text-white"
    >
      {/* Simple Header */}
      <header className="fixed top-0 w-full z-50 bg-[#12151a]/90 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link 
          to="/#portfolio" 
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-wider"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
        <div className="text-right">
          <p className="text-accent-cyan text-[10px] tracking-[0.2em] uppercase font-bold">{project.category}</p>
          <h1 className="text-lg font-bold tracking-wide">{project.title}</h1>
        </div>
      </header>

      {/* Screenshots Container */}
      <main className="pt-24 pb-20 w-full max-w-[1920px] mx-auto flex flex-col items-center gap-8 px-4 sm:px-8">
        {project.screenshots.map((src, index) => (
          <motion.img 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={src} 
            alt={`${project.title} screenshot ${index + 1}`} 
            className="w-full h-auto rounded-xl shadow-2xl border border-white/5"
            style={{ maxWidth: project.category === 'Mobile App' ? '400px' : '1200px' }}
          />
        ))}

        <div className="mt-16">
          <Link 
            to="/#portfolio" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold tracking-widest text-sm transition-colors border border-white/10"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;
