import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { investmentHighlights } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const SCHOOL_INSTALL_IMAGE_SRC = '/assets/l%E1%BA%AFp%20%C4%91%E1%BA%B7t%20t%E1%BA%A1i%20s%C3%A2n%20tr%C6%B0%E1%BB%9Dng.jpg';

export default function InvestmentOverview({ id }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const rightRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section page-auth border-t border-[#E2E8F0] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT: Title + highlight cards */}
          <div>
            <div ref={titleRef} className="fade-up mb-5">
              <span className="section-eyebrow" style={{ color: '#A855F7' }}>Quy mô triển khai</span>
              <h2 className="section-title">Quy mô tối ưu, tiềm năng mở rộng theo danh mục</h2>
              <div className="section-divider" style={{ color: '#A855F7' }} />
              <p className="section-desc">
                Đại lý tập trung phát triển danh mục trường học mục tiêu tại địa phương và mở rộng theo lộ trình tăng trưởng thực tế.
              </p>
            </div>

            {/* 2×2 highlight cards */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-3">
              {investmentHighlights.map((item, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${i + 1} bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm
                    hover:border-[#A855F7] hover:shadow-[0_4px_16px_rgba(168,85,247,0.06)] transition-all duration-300`}
                >
                  <div className="text-[22px] sm:text-[24px] font-extrabold text-[#0F172A] leading-tight tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-[#A855F7] font-bold mt-0.5 mb-1.5 uppercase tracking-wide">{item.unit}</div>
                  <p className="text-[12px] text-[#6B7280] leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Installation image */}
          <div ref={rightRef} className="fade-up flex justify-center lg:justify-end">
            <div className="w-full max-w-[640px] rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-[0_6px_24px_rgba(15,23,42,0.08)]">
              <img
                src={SCHOOL_INSTALL_IMAGE_SRC}
                alt="Lap dat Camera AI tai san truong"
                className="w-full h-auto rounded-xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <ScrollNext href="#ho-tro" />
      </div>
    </section>
  );
}
