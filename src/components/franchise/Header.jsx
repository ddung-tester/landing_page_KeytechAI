import { useState, useEffect } from 'react';
import { navLinks } from '../../data/franchiseLandingData';
import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

const HEADER_H = 76; // px — chiều cao header (h-19)

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  // ── Scroll shadow ────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          if (entry.isIntersecting) {
            setActiveHref(`#${id}`);
          }
        },
        {
          rootMargin: `-${HEADER_H}px 0px -50% 0px`,
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
      scrollToLandingTarget(el);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAF8FF]/92 backdrop-blur-md border-b border-[#E9D5FF]/40
      transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'} animate-premium-header-enter`}
      style={{ height: `${HEADER_H}px` }}
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-6 xl:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 flex-shrink-0 min-w-0 focus:outline-none"
            aria-label="Về trang chủ"
          >
            <img src="/keytech_logo.png" alt="Keytech Logo" className="h-14 w-auto object-contain" />
            <div className="h-5 w-px bg-[#CBD5E1]" />
            <span className="text-[12.5px] font-extrabold tracking-widest text-[#2563EB] uppercase bg-[#EFF6FF] border border-[#DBEAFE] px-2.5 py-1 rounded-md max-[360px]:hidden">
              Partnership
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="landing-desktop-nav hidden lg:flex items-center gap-1 xl:gap-2"
            role="navigation"
            aria-label="Điều hướng chính"
          >
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2 xl:px-3 py-2 text-[13.5px] xl:text-[14.5px] font-bold transition-all duration-200 whitespace-nowrap
                    ${isActive
                      ? 'text-[#2563EB] relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2.5px] after:rounded-full after:bg-[#2563EB]'
                      : 'text-[#475569] hover:text-[#2563EB]'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#lien-he"
              onClick={(e) => handleNavClick(e, '#lien-he')}
              className="landing-header-cta hidden sm:inline-flex items-center px-5 py-2.5 btn-brand-primary
                text-white text-[14px] font-bold whitespace-nowrap"
            >
              Đăng ký tư vấn
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="landing-mobile-toggle lg:hidden shrink-0 p-2 rounded-md text-[#1E293B] hover:bg-white/60 transition-colors"
              aria-label="Mở menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="landing-mobile-menu lg:hidden border-t border-[#E9D5FF]/40 bg-[#FAF8FF]/98 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2.5 px-3 text-[14px] font-bold rounded-md transition-colors
                    ${isActive
                      ? 'text-[#1D4ED8] bg-white shadow-xs'
                      : 'text-[#1E293B] hover:text-[#1D4ED8] hover:bg-white/60'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#lien-he"
              onClick={(e) => handleNavClick(e, '#lien-he')}
              className="mt-2 py-2.5 px-3 btn-brand-primary transition-colors
                text-white text-[14px] font-semibold text-center"
            >
              Đăng ký tư vấn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
