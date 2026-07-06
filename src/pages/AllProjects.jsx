import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { projectsList as allProjects } from '../data/projects';

const AllProjects = () => {
  const navigate = useNavigate();
  const [showSubNav, setShowSubNav] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    document.title = 'All Projects | JSHub';
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowSubNav(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowSubNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-[130px] pb-24"
    >
      {/* Secondary Sub-Navbar that hides behind the main header on scroll down */}
      <div 
        className={`fixed top-[72px] left-0 w-full z-40 bg-[#12151a]/30 backdrop-blur-md border-b border-white/5 px-6 sm:px-12 py-3.5 flex items-center justify-between transition-transform duration-500 ease-in-out ${
          showSubNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={() => navigate('/#portfolio')}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
        <div className="flex items-center gap-4">
          <h1 className="text-sm font-black tracking-widest uppercase text-white/90">All Projects</h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-white/90">
            ALL PROJECTS
          </h1>
          <p className="mt-4 text-white/50 tracking-wide">A complete archive of our work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <Link 
              key={project.id}
              to={`/project/${project.id}`}
              state={{ from: 'all-projects' }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#1D2024] h-[400px] block"
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={
                    project.image
                      ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                      : { background: project.bgImage }
                  }
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500" />
                
                <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-semibold text-white tracking-widest uppercase border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <svg className="w-6 h-6 text-white translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="text-accent-cyan text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white font-extrabold text-2xl mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AllProjects;
