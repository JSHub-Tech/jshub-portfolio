import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0f1114] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[150px] sm:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none mb-4 tracking-tighter"
      >
        404
      </motion.h1>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-4xl font-bold text-white mb-6 tracking-wide"
      >
        Page Not Found
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-white/50 text-lg max-w-md mx-auto mb-10"
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-3 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan hover:bg-accent-cyan hover:text-[#121417] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300 font-bold py-4 px-10 rounded-xl tracking-wider text-sm"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          RETURN TO HOME
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
