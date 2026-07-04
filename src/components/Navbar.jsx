import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-12 border-b border-white/5 z-10 relative">
      <div className="flex items-center gap-2">
        <img src="/src/assets/WebsiteLogo.svg" alt="JSHub Logo" className="h-8" />
      </div>
      <div className="flex gap-8 text-sm font-medium text-white/70">
        <a href="#" className="text-[#00A3C1] border-b-2 border-[#00A3C1] pb-1">Home</a>
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
