import React from 'react';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-transparent px-6 sm:px-8 lg:px-24 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Top grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/5">
          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/WebsiteLogo.png" alt="JSHub Logo" className="h-14" />
              <span className="text-white font-black tracking-widest text-4xl">JSHub</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
              Crafting distinguished digital experiences for modern brands and ambitious startups.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white/80 font-bold tracking-widest text-xs uppercase mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home',      href: '#home' },
                { label: 'Services',  href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About Us',  href: '#about' },
                { label: 'Contact',   href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-3 h-[1px] bg-white/20 group-hover:bg-accent-cyan group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Details */}
          <div>
            <h4 className="text-white/80 font-bold tracking-widest text-xs uppercase mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-start gap-3 group cursor-default">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-accent-cyan text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  jshubdigital@gmail.com
                </span>
              </li>
              <li>
                <span className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-start gap-3 group cursor-default">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-accent-cyan text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +92 310 618 2610
                </span>
              </li>
              <li>
                <span className="text-white/40 text-sm hover:text-accent-cyan transition-colors duration-300 flex items-start gap-3 group cursor-default">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-accent-cyan text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Social Media */}
          <div>
            <h4 className="text-white/80 font-bold tracking-widest text-xs uppercase mb-6">Follow Us</h4>
            <div className="flex gap-2.5">
              {[
                { label: 'LinkedIn',         href: 'https://linkedin.com/company/jshub',                        icon: <FaLinkedinIn size={18}/>, hoverBg: '#0A66C2' },
                { label: 'Instagram',        href: 'https://instagram.com/_jshub',                             icon: <FaInstagram  size={18}/>, hoverBg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
                { label: 'X (Twitter)',      href: 'https://x.com/_jshub',                                     icon: <FaXTwitter   size={18}/>, hoverBg: '#000000' },
                { label: 'TikTok',           href: 'https://tiktok.com/@__jshub',                             icon: <FaTiktok     size={18}/>, hoverBg: '#010101' },
                { label: 'YouTube',          href: 'https://www.youtube.com/@jshub.digital',                  icon: <FaYoutube    size={18}/>, hoverBg: '#FF0000' },
                { label: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029Vb8ioUyHVvTSj26gGl2i',  icon: <FaWhatsapp   size={18}/>, hoverBg: '#25D366' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="social-icon-btn w-10 h-10 rounded-xl flex items-center justify-center text-white/30 border border-white/8 transition-all duration-300"
                  style={{ '--hover-bg': s.hoverBg }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.hoverBg;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = `0 0 16px ${s.hoverBg.includes('gradient') ? 'rgba(220,39,67,0.4)' : s.hoverBg}55`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-white/20 text-xs mt-6 leading-relaxed">Follow us for updates,<br/>tips & behind-the-scenes.</p>
          </div>
        </div>

        {/* Bottom row — copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs tracking-widest">
          <span>© 2026 JSHub Agency. All rights reserved.</span>
          <span className="text-white/15">Crafted with ❤️ in Lahore</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
