import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../../data/franchiseLandingData';

const HEADER_H = 64; // px — chiều cao header (h-16)

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  // ── Scroll shadow ────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Active section via IntersectionObserver ──────────────────
  useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.href.replace('#', ''))
      .filter(Boolean);

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHref(`#${id}`);
        },
        {
          rootMargin: `-${HEADER_H}px 0px -55% 0px`,
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Smooth scroll handler ────────────────────────────────────
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]
        transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}
      style={{ height: `${HEADER_H}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <a
            href="#tong-quan"
            onClick={(e) => handleNavClick(e, '#tong-quan')}
            className="flex items-center gap-2.5 flex-shrink-0 focus:outline-none"
            aria-label="Về trang chủ"
          >
            <img src="/keytech_logo.png" alt="Keytech Logo" className="h-9 w-auto object-contain" />
            <div className="leading-tight">
              <div className="text-[#0F172A] font-semibold text-[15px] tracking-tight">Keytech AI</div>
              <div className="text-[#6B7280] text-[10px] font-medium tracking-wide uppercase">VNS Partnership</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-[13.5px] font-medium transition-colors duration-200
                    ${isActive
                      ? 'text-[#1E3A8A] bg-[#F0F4FF]'
                      : 'text-[#4B5563] hover:text-[#1E3A8A] hover:bg-[#F7F8FA]'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#1E3A8A] hover:bg-[#1E40AF]
                text-white text-[13px] font-semibold rounded-md
                transition-all duration-200 hover:-translate-y-px hover:shadow-md"
            >
              Đăng ký tư vấn
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-[#4B5563] hover:bg-[#F3F4F6] transition-colors"
              aria-label="Mở menu"
              aria-expanded={menuOpen}
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
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2.5 px-3 text-[14px] font-medium rounded-md transition-colors
                    ${isActive
                      ? 'text-[#1E3A8A] bg-[#F0F4FF]'
                      : 'text-[#374151] hover:text-[#1E3A8A] hover:bg-[#F7F8FA]'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="mt-2 py-2.5 px-3 bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors
                text-white text-[14px] font-semibold rounded-md text-center"
            >
              Đăng ký tư vấn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
