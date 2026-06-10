import { useState, useEffect } from 'react';
import ScrollNext from './ScrollNext';
import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

function handleAnchorClick(event, selector) {
  event.preventDefault();
  const target = document.querySelector(selector);
  if (target) scrollToLandingTarget(target);
}

export default function HeroStory({ id = 'hero' }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if background image has loaded
    const img = new Image();
    img.src = '/assets/background-hero1.png';
    
    const handleLoad = () => {
      // Small timeout to ensure the browser has painted and is ready
      setTimeout(() => setLoaded(true), 50);
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.onload = handleLoad;
      img.onerror = handleLoad; // fallback if image fails
    }
  }, []);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-hero bg-tech-grid relative isolate overflow-hidden flex flex-col min-h-[500px] lg:min-h-[600px]"
      style={{ scrollMarginTop: 0 }}
    >
      {/* ── Glow blobs */}
      <div className="glow-blob glow-purple -left-20 -top-20 -z-10" />
      <div className="glow-blob glow-blue right-0 bottom-10 -z-10" />

      {/* ── Background image
           x=58%  → image shifts right, freeing up left text area
           y=20%  → shifts the image content up slightly to reveal the parent at the bottom      */}
      <img
        src="/assets/background-hero1.png"
        alt=""
        className={`absolute inset-y-0 left-0 lg:left-auto lg:right-0 -z-20 h-full w-full lg:w-[82%] object-cover ${
          loaded ? 'animate-premium-hero-bg' : 'opacity-0'
        }`}
        style={{ objectPosition: '58% 22%' }}
        aria-hidden="true"
        onLoad={() => setLoaded(true)}
      />

      {/* ── Overlay layers ─────────────────────────────────────────────
          Mobile:  near-opaque so text always readable over the photo
          Desktop: horizontal gradient — 100% white left → transparent ~60%
                   Breakpoint is wider (60% vs old 44%) to give text more room
          Bottom:  soft vignette to anchor the section                    */}
      <div 
        className={`absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,242,255,0.95)_0%,rgba(247,242,255,0.85)_50%,rgba(239,247,255,0.60)_100%)] lg:bg-[linear-gradient(90deg,rgba(247,242,255,1)_0%,rgba(247,242,255,0.96)_20%,rgba(247,242,255,0.85)_33%,rgba(239,247,255,0.45)_47%,rgba(239,247,255,0.10)_58%,rgba(239,247,255,0)_68%)] ${
          loaded ? 'animate-premium-hero-bg' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute inset-x-0 bottom-0 -z-10 h-[28%] bg-gradient-to-t from-[#EFF7FF]/60 via-[#EFF7FF]/15 to-transparent ${
          loaded ? 'animate-premium-hero-bg' : 'opacity-0'
        }`} 
      />

      {/* ── Content wrapper ────────────────────────────────────────── */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 flex items-center">

        {/* Grid: 44% text | 56% photo (desktop) */}
        <div className="w-full grid lg:grid-cols-[44%_56%] items-center gap-8 lg:gap-0">

          {/* ── LEFT: Text column ─────────────────────────────────── */}
          <div 
            className={`relative z-10 min-w-0 lg:pt-3 lg:pb-9 lg:-mt-5 ${
              loaded ? 'animate-premium-hero-content' : 'opacity-0'
            }`}
          >

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-gradient-to-r from-[#2563EB]/70 to-transparent" />
              <span className="text-[11px] sm:text-[11.5px] font-semibold tracking-[0.12em] uppercase text-[#2563EB]/80">
                Đồng hành cùng nhà trường và gia đình
              </span>
            </div>

            {/* H1 — 6 lines, editorial grouping with breathing room */}
            <h1 className="mt-5 text-[24px] min-[380px]:text-[27px] sm:text-[31px]
              lg:text-[29px] xl:text-[33px] 2xl:text-[37px]
              text-[#0F172A] leading-[1.3] tracking-[-0.01em]">
              <span className="block font-light">Làm thế nào để</span>
              <span className="block font-semibold mt-1">mỗi buổi sáng đến trường,</span>
              <span className="block font-light text-[#6B7280] mt-3">không chỉ là hành trình</span>
              <span className="block font-light text-[#6B7280]">của học sinh,</span>
              <span className="block font-normal mt-3">mà còn là{' '}
                <span className="inline-block pr-2 italic font-semibold text-transparent bg-clip-text
                  bg-gradient-to-r from-[#1D4ED8] to-[#0EA5E9]">sự an tâm</span>
              </span>
              <span className="block font-normal">
                <span className="inline-block pr-2 italic font-semibold text-transparent bg-clip-text
                  bg-gradient-to-r from-[#1D4ED8] to-[#0EA5E9]">của cả gia đình?</span>
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-4 max-w-[420px] sm:max-w-[480px]
              text-[14px] sm:text-[15px] lg:text-[15.5px]
              leading-[1.75] text-[#64748B] font-light">
              Một kết nối âm thầm giữa nhà trường,
              phụ huynh và học sinh,
              để sự an tâm luôn hiện diện
              trong những khoảnh khắc quan trọng nhất.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#lien-he"
                onClick={(e) => handleAnchorClick(e, '#lien-he')}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto
                  items-center justify-center gap-2 rounded-full
                  px-6 sm:px-7 btn-brand-primary text-[14.5px] font-bold text-white"
              >
                Khám phá mô hình
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#kiem-chung"
                onClick={(e) => handleAnchorClick(e, '#kiem-chung')}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto
                  items-center justify-center gap-2 rounded-full
                  border border-[#D1D5DB] bg-white/90
                  px-6 sm:px-7 text-[14.5px] font-bold text-[#334155]
                  shadow-[0_4px_14px_rgba(15,23,42,0.04)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:border-[#3B82F6]
                  hover:text-[#2563EB] hover:shadow-[0_6px_20px_rgba(37,99,235,0.10)]"
              >
                Xem thực tế triển khai
              </a>
            </div>

          </div>

          {/* ── RIGHT: empty — background photo bleeds through ─────── */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <div 
        className={`pb-6 sm:pb-8 flex justify-center relative z-10 ${
          loaded ? 'animate-premium-hero-scroll' : 'opacity-0'
        }`}
      >
        <ScrollNext href="#cong-nghe" />
      </div>
    </section>
  );
}
