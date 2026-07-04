import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'team', 'contact'];
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

  // Hover/active sequence: Blue, Red, Yellow, Sea Green, then loops back to Blue.
  // Ensures no two consecutive links ever share the same color.
  const navLinks = [
    { id: 'home', label: 'Home', color: 'accent-blue' },
    { id: 'services', label: 'Services', color: 'accent-red' },
    { id: 'portfolio', label: 'Portfolio', color: 'accent-yellow' },
    { id: 'team', label: 'About', color: 'accent-teal' },
    { id: 'contact', label: 'Contact', color: 'accent-blue' },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center py-4 sm:py-5 px-5 sm:px-8 lg:px-16 border-b border-white/5 z-50 bg-[#1A1D21]/70 backdrop-blur-xl shadow-lg transition-all duration-300">
      <a href="#home" className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
        <img src="/WebsiteLogo.svg" alt="JSHub Logo" className="h-7 sm:h-8" />
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-10 text-sm font-semibold tracking-wider text-white/60">
        {navLinks.map((link) => (
          <a 
            key={link.id}
            href={`#${link.id}`} 
            className={`pb-1 transition-all duration-300 ${
              activeSection === link.id 
                ? `text-${link.color} border-b-2 border-${link.color}` 
                : `hover:text-${link.color}`
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white/80"
      >
        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
      </button>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1A1D21]/95 backdrop-blur-xl border-b border-white/5 shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8 text-sm font-semibold tracking-wider text-white/60">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`pb-1 w-fit transition-all duration-300 ${
                activeSection === link.id
                  ? `text-${link.color} border-b-2 border-${link.color}`
                  : `hover:text-${link.color}`
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;