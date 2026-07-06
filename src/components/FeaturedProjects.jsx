import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { projectsList as projects } from '../data/projects';

const ProjectCard = ({ project, index }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      state={{ from: 'home' }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#1D2024] flex-shrink-0 w-[85vw] sm:w-[60vw] h-[320px] snap-center md:w-auto md:h-auto md:flex-shrink md:snap-none ${project.size} block`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="w-full h-full"
      >
        {/* Background Image / Gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={
            project.image
              ? {
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : { background: project.bgImage }
          }
        />
        
        {/* Dark Overlay that reveals on hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      
      {/* Top section: Tags */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white tracking-wider border border-white/10">
            {tag}
          </span>
        ))}
      </div>

      {/* Center Icon: View Project (Reveals on hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
          <svg className="w-6 h-6 text-white translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-accent-cyan text-xs font-bold tracking-[0.2em] uppercase mb-2">
            {project.category}
          </p>
          <h3 className="text-white font-extrabold text-3xl mb-2 tracking-wide">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm max-w-[90%] opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="portfolio" className="min-h-screen px-0 sm:px-8 lg:px-24 py-24 sm:py-32 border-t border-white/5 bg-transparent">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24 px-8 sm:px-0"
        >
          <p className="text-accent-yellow text-sm tracking-[0.3em] uppercase font-semibold mb-4">Our Work</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-white/90">
            FEATURED PROJECTS
          </h2>
        </motion.div>
        
        {/* Mobile: horizontal scroll. Desktop: Masonry-style Bento Grid */}
        <div className="flex md:grid md:grid-cols-3 md:auto-rows-[300px] gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-8 sm:px-0 pb-8 scrollbar-hide">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex justify-center mt-12"
        >
          <Link to="/projects" className="px-8 py-3 rounded-xl border border-white/10 text-white/60 text-sm font-bold tracking-wider hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2 group">
            VIEW ALL WORK
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;