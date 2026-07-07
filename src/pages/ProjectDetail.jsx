import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { projectDetails } from '../data/projects';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1114] text-white">
        <SEO
          title="Project Not Found | JSHub Agency"
          description="The project you're looking for doesn't exist or may have been moved."
          path={`/project/${id}`}
        />
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
      <SEO
        title={`${project.title} | JSHub Agency Projects`}
        description={`${project.title} — a ${project.category} project by JSHub Agency.`}
        path={`/project/${id}`}
        image={project.screenshots?.[0]}
      />

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
        {project.screenshots && project.screenshots.map((src, index) => (
          <motion.img 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={src} 
            alt={`${project.title} screenshot ${index + 1}`} 
            className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/5"
            style={{ maxWidth: project.category === 'Mobile App' ? '400px' : '1200px' }}
          />
        ))}

        {project.description?.architecture && project.description.architecture.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[1200px] mt-10 mb-10"
          >
            <ArchitectureDiagram architecture={project.description.architecture} projectName={project.title} />
          </motion.div>
        )}

        <div className="mt-16">
          <Link 
            to="/#portfolio" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-[2rem] text-white font-bold tracking-widest text-sm transition-colors border border-white/10 hover:border-[#00E5FF]/50"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;