import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    document.body.style.cursor = 'none';

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      {/* Custom arrow cursor — SVG pointer shape, cyan colored */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'tween', duration: 0.01 }}
      >
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', filter: 'drop-shadow(0 0 6px rgba(0,229,255,0.8))' }}
        >
          {/* Arrow pointer shape — same as the default OS cursor but cyan */}
          <path
            d="M2 2L2 22L7.5 16.5L12.5 26L15.5 24.5L10.5 14.5L18 14.5L2 2Z"
            fill="#00E5FF"
            stroke="#003840"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Cursor;
