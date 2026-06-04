import { useState, useEffect } from 'react';
import { navLinks } from '../../data/franchiseLandingData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-sm border-b border-[#E5E7EB]' : 'border-b border-[#E5E7EB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-[#1E3A8A] rounded-md flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1" fill="white" opacity="0.9"/>
                <rect x="10" y="2" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
                <rect x="2" y="10" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
                <rect x="10" y="10" width="6" height="6" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[#0F172A] font-semibold text-[15px] tracking-tight">Keytech AI</div>
              <div className="text-[#6B7280] text-[10px] font-medium tracking-wide uppercase">VNS Partnership</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13.5px] font-medium text-[#4B5563] hover:text-[#1E3A8A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#1E3A8A] text-white text-[13px] font-semibold rounded-md
                hover:-translate-y-px hover:shadow-md transition-all duration-200"
            >
              Đăng ký tư vấn
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-[#4B5563] hover:bg-[#F3F4F6] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 px-3 text-[14px] font-medium text-[#374151] hover:text-[#1E3A8A] hover:bg-[#F7F8FA] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="mt-2 py-2.5 px-3 bg-[#1E3A8A] text-white text-[14px] font-semibold rounded-md text-center"
            >
              Đăng ký tư vấn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
