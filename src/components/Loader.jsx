import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds minimum loading time
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 400); // slight delay after reaching 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1114]"
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          <img 
            src="/WebsiteLogo.png" 
            alt="JSHub Loading" 
            className="h-16 relative z-10"
          />
          {/* Logo Glow */}
          <div className="absolute inset-0 bg-accent-cyan/40 blur-xl z-0 rounded-full animate-pulse" />
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent-cyan rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        
        <div className="mt-4 text-white/40 text-xs font-semibold tracking-[0.3em] uppercase">
          {Math.round(progress)}%
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
