import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'team'];
      const scrollPosition = window.scrollY + 250; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', color: 'accent-cyan' },
    { id: 'services', label: 'Services', color: 'accent-red' },
    { id: 'portfolio', label: 'Portfolio', color: 'accent-yellow' },
    { id: 'team', label: 'About', color: 'accent-teal' },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center py-5 px-8 lg:px-16 border-b border-white/5 z-50 bg-[#1A1D21]/70 backdrop-blur-xl shadow-lg transition-all duration-300">
      <a href="#home" className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
        <img src="/WebsiteLogo.png" alt="JSHub Logo" className="h-8" />
      </a>
      <div className="hidden md:flex gap-10 text-sm font-semibold tracking-wider text-white/60">
        {navLinks.map((link) => (
          <a 
            key={link.id}
            href={`#${link.id}`} 
            className={`pb-1 transition-all duration-300 ${
              activeSection === link.id 
                ? `text-white border-b-2 border-${link.color}` 
                : `hover:text-${link.color}`
            }`}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
