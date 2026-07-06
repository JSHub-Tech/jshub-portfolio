import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { projectDetails as projectData, Icon } from '../data/projects';
import NotFound from '../pages/NotFound';

const ImageCarousel = ({ images, title, accent = '#00E5FF' }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + images.length) % images.length);
  };

  const prev = () => goTo(index - 1, -1);
  const next = () => goTo(index + 1, 1);

  return (
    <div className="relative w-full bg-black">
      <div className="relative w-screen ml-[calc(50%-50vw)] h-[62vh] sm:h-[78vh] overflow-hidden bg-[#0a0b0d] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Left arrow */}
        {images.length > 1 && (
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-500/50 hover:bg-gray-400/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {images.length > 1 && (
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-500/50 hover:bg-gray-400/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '22px' : '7px',
                  backgroundColor: i === index ? accent : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ArchitectureCard = ({ item, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="p-6 rounded-2xl bg-[#1D2024]/70 border border-white/5 hover:border-white/15 transition-colors duration-300"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
      style={{ backgroundColor: `${accent}18`, color: accent }}
    >
      {item.icon}
    </div>
    <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{item.name}</h4>
    <p className="text-white/50 text-sm leading-relaxed">{item.role}</p>
  </motion.div>
);

const EngineCard = ({ item, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative p-7 rounded-2xl bg-[#1D2024]/50 border border-white/5"
  >
    <div className="flex items-start gap-4 mb-4">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${accent}18`, color: accent }}
      >
        {item.icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg tracking-wide leading-tight">{item.title}</h4>
        <p className="text-xs font-semibold tracking-wider uppercase mt-1" style={{ color: accent }}>
          {item.strategy}
        </p>
      </div>
    </div>
    <ul className="flex flex-col gap-2.5 pl-1">
      {item.points.map((point, i) => (
        <li key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
          <span
            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: accent }}
          />
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProjectDescription = ({ description, accent }) => (
  <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mb-10 tracking-wide"
    >
      {description.tagline}
    </motion.p>

    {/* Overview */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-white/45 text-base leading-relaxed max-w-3xl mb-20"
    >
      {description.overview}
    </motion.p>

    {/* Architecture */}
    <div className="mb-24">
      <div className="flex items-center gap-3 mb-10">
        <span style={{ color: accent }}>{description.architectureIcon || Icon.layers}</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white/90">
          {description.architectureTitle || 'System Architecture'}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {description.architecture.map((item, i) => (
          <ArchitectureCard key={item.name} item={item} accent={accent} index={i} />
        ))}
      </div>
    </div>

    {/* Engine / Workflow */}
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <span style={{ color: accent }}>{description.engineIcon || Icon.compass}</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white/90">
          {description.engineTitle || 'Core Workflow'}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {description.engine.map((item, i) => (
          <EngineCard key={item.title} item={item} accent={accent} index={i} />
        ))}
      </div>
    </div>

    {/* Tech stack */}
    <div>
      <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-5">Technology Stack</h3>
      <div className="flex flex-wrap gap-3">
        {description.stack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-lg text-xs font-bold tracking-wider text-white/70 border border-white/10 bg-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projectData[id];

  // 404 Protection
  if (!project) {
    return <NotFound />;
  }

  // Set document title
  useEffect(() => {
    document.title = `${project.title} | JSHub`;
  }, [project.title]);

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

  const accent = project.accent || '#00E5FF';
  const [showSubNav, setShowSubNav] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
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
      className="min-h-screen bg-transparent text-white"
    >
      {/* Full-width image carousel */}
      <main className="pt-[130px]">
        {/* Secondary Sub-Navbar that hides behind the main header on scroll down, and shows on scroll up */}
        <div 
          className={`fixed top-[72px] left-0 w-full z-40 bg-[#12151a]/30 backdrop-blur-md border-b border-white/5 px-6 sm:px-12 py-3.5 flex items-center justify-between transition-transform duration-500 ease-in-out ${
            showSubNav ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <button
            onClick={() => {
              if (location.state?.from === 'all-projects') {
                navigate('/projects');
              } else {
                navigate('/#portfolio');
              }
            }}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[11px] font-bold tracking-[0.2em] uppercase"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <div className="flex items-center gap-4">
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold hidden sm:block" style={{ color: accent }}>{project.category}</p>
            <div className="w-1 h-4 rounded-full sm:hidden" style={{ backgroundColor: accent }}></div>
            <h1 className="text-sm font-black tracking-widest uppercase text-white/90">{project.title}</h1>
          </div>
        </div>

        <ImageCarousel images={project.screenshots} title={project.title} accent={accent} />

        {/* Structured description, when available */}
        {project.description ? (
          <ProjectDescription description={project.description} accent={accent} />
        ) : (
          <div className="max-w-[1200px] mx-auto px-6 py-16 text-white/40 text-sm">
            More details for this project are coming soon.
          </div>
        )}

        <div className="flex flex-col items-center justify-center pb-24 pt-10 opacity-40 select-none pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full mb-6" style={{ backgroundColor: accent }}></div>
          <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-white">End of Project</p>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;