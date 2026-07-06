import React from 'react';

const items = [
  'Web Design', '✦', 'Branding', '✦', 'Development', '✦', 'Marketing', '✦',
  'UI/UX Design', '✦', 'SEO', '✦', 'React', '✦', 'Next.js', '✦',
  'Mobile Apps', '✦', 'E-Commerce', '✦', 'Figma', '✦', 'Node.js', '✦',
];

const Marquee = ({ reverse = false }) => (
  <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
    <div
      className="flex gap-10 items-center whitespace-nowrap"
      style={{
        animation: `marquee${reverse ? '-reverse' : ''} 28s linear infinite`,
        willChange: 'transform',
      }}
    >
      {/* Duplicate items for seamless loop */}
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className={`text-sm font-bold tracking-widest uppercase ${item === '✦' ? 'text-accent-red text-xs' : 'text-white/30'}`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const MarqueeTicker = () => {
  return (
    <section className="border-t border-b border-white/5 bg-white/[0.01] py-5 overflow-hidden">
      <style>{`
        @keyframes marquee         { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
      <div className="flex flex-col gap-4">
        <Marquee reverse={false} />
        <Marquee reverse={true} />
      </div>
    </section>
  );
};

export default MarqueeTicker;
