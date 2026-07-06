import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'portfolio', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home',      label: 'Home',      accent: '#00A3C1' },
    { id: 'services',  label: 'Services',  accent: '#D32F2F' },
    { id: 'portfolio', label: 'Portfolio', accent: '#D9A01B' },
    { id: 'team',      label: 'About',     accent: '#00A896' },
    { id: 'contact',   label: 'Contact',   accent: '#00A3C1' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#12151a]/90 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-20 h-[72px]">

        {/* ── Logo + Brand name ── */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <img
            src="/WebsiteLogo.png"
            alt="JSHub Logo"
            className="h-10 sm:h-11 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-xl tracking-[0.12em] group-hover:text-accent-cyan transition-colors duration-300">
              JSHub
            </span>
            <span className="text-white/35 text-[9px] tracking-[0.3em] uppercase font-semibold">
              Agency
            </span>
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-5 py-2 text-[13px] font-bold tracking-[0.12em] uppercase transition-all duration-300 rounded-lg ${
                  isActive ? 'text-white' : 'text-white/45 hover:text-white/85'
                }`}
                style={isActive ? { color: link.accent } : {}}
              >
                {/* Active indicator pill */}
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg opacity-10"
                    style={{ backgroundColor: link.accent }}
                  />
                )}
                {/* Bottom underline */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: link.accent,
                    width: isActive ? '60%' : '0%',
                  }}
                />
                {link.label}
              </a>
            );
          })}
        </div>

        {/* ── CTA button (desktop) ── */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg text-[12px] font-bold tracking-[0.15em] uppercase border border-accent-red/60 text-accent-red hover:bg-accent-red hover:text-white hover:border-accent-red hover:shadow-[0_0_20px_rgba(211,47,47,0.4)] transition-all duration-300"
          >
            Start Project
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9 text-white/80"
        >
          <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`md:hidden bg-[#12151a]/98 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 rounded-lg text-sm font-bold tracking-[0.1em] uppercase text-white/50 hover:text-white transition-all duration-300"
              style={activeSection === link.id ? { color: link.accent } : {}}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 py-3 px-4 rounded-lg text-sm font-bold tracking-[0.1em] uppercase text-center border border-accent-red/60 text-accent-red hover:bg-accent-red hover:text-white transition-all duration-300"
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;