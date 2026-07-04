import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-[380px] bg-[#1D2024] h-full overflow-y-auto border-l border-white/5 p-8 hidden xl:block">
      
      {/* Sidebar Services Section */}
      <div className="mb-12">
        <h3 className="text-white text-lg font-bold mb-6 text-center tracking-wider">OUR SERVICES</h3>
        <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 text-center border-t-2 border-t-accent-blue transition-transform hover:scale-105 cursor-pointer">
                <div className="h-8 w-8 mx-auto mb-2 bg-accent-blue/20 rounded flex items-center justify-center">
                    <span className="text-accent-blue">🖥️</span>
                </div>
                <p className="text-xs font-bold text-white">Web Design</p>
                <p className="text-[10px] text-white/50 mt-1">Dess, design your taste, and tech.</p>
            </div>
            
            <div className="glass-panel p-4 text-center border-t-2 border-t-accent-red transition-transform hover:scale-105 cursor-pointer">
                <div className="h-8 w-8 mx-auto mb-2 bg-accent-red/20 rounded flex items-center justify-center">
                    <span className="text-accent-red">🛡️</span>
                </div>
                <p className="text-xs font-bold text-white">Branding</p>
                <p className="text-[10px] text-white/50 mt-1">Dess, design your taste, and tech.</p>
            </div>
            
            <div className="glass-panel p-4 text-center border-t-2 border-t-accent-yellow transition-transform hover:scale-105 cursor-pointer">
                <div className="h-8 w-8 mx-auto mb-2 bg-accent-yellow/20 rounded flex items-center justify-center">
                    <span className="text-accent-yellow">📢</span>
                </div>
                <p className="text-xs font-bold text-white">Marketing</p>
                <p className="text-[10px] text-white/50 mt-1">Devs, design your taste, and tech.</p>
            </div>
            
            <div className="glass-panel p-4 text-center border-t-2 border-t-accent-teal transition-transform hover:scale-105 cursor-pointer">
                <div className="h-8 w-8 mx-auto mb-2 bg-accent-teal/20 rounded flex items-center justify-center">
                    <span className="text-accent-teal">&lt;/&gt;</span>
                </div>
                <p className="text-xs font-bold text-white">Development</p>
                <p className="text-[10px] text-white/50 mt-1">Devs, design your taste, and tech.</p>
            </div>
        </div>
      </div>
      
      {/* Featured Projects Placeholder */}
      <div className="mb-12">
        <h3 className="text-white text-lg font-bold mb-6 text-center tracking-wider">FEATURED PROJECTS</h3>
        <div className="glass-panel h-48 flex items-center justify-center text-white/30 border border-dashed border-white/20">
            [Projects Grid coming soon]
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
