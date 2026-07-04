import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", mass: 0.1, stiffness: 800, damping: 20 }
    }
  };

  return (
    <div className="hidden lg:block">
      {/* The trailing soft glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none z-50"
        animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            transition: { type: "tween", ease: "backOut", duration: 0.5 }
        }}
      />
      {/* The sharp glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-cyan/40 backdrop-blur-sm pointer-events-none z-[100] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]"
        variants={variants}
        animate="default"
      >
          <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_10px_#00E5FF]"></div>
      </motion.div>
    </div>
  );
};

export default Cursor;
