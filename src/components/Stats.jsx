import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// ── Animated counter ─────────────────────────────────────────────────────────
const AnimatedCounter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => setDisplay(Math.floor(latest)));
  }, [springValue]);

  return <span ref={ref}>{display}{suffix}</span>;
};

// ── Stats Section ─────────────────────────────────────────────────────────────
const Stats = () => {
  const stats = [
    { value: 25,  suffix: '+',  label: 'Projects Delivered',   color: '#00E5FF' },
    { value: 10,  suffix: '+',  label: 'Happy Clients',         color: '#D32F2F' },
    { value: 5,   suffix: '',    label: 'Core Experts',   color: '#D9A01B' },
    { value: 100, suffix: '%',  label: 'Client Satisfaction',   color: '#00A896' },
  ];

  return (
    <section className="border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-24 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="text-5xl lg:text-6xl font-black mb-3 tabular-nums"
                style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}55` }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/50 text-sm tracking-widest uppercase font-medium">{stat.label}</p>
              <div
                className="mt-4 w-10 h-[2px] rounded-full opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundColor: stat.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
