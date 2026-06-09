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
            <div ref={titleRef} className="fade-up section-header">
              <span className="section-eyebrow" style={{ color: '#A855F7' }}>Quy mô triển khai</span>
              <h2 className="section-title">Quy mô tối ưu, tiềm năng mở rộng theo danh mục</h2>
              <p className="section-desc">
                Đại lý tập trung phát triển danh mục trường học mục tiêu tại địa phương và mở rộng theo lộ trình tăng trưởng thực tế.
              </p>
            </div>

            <div ref={cardsRef} className="grid grid-cols-2 gap-3">
              {investmentHighlights.map((item, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${i + 1} card-standard flex flex-col`}
                  style={{
                    '--card-border': '#E2E8F0',
                    '--card-hover-border': '#A855F7'
                  }}
                >
                  <div className="text-[22px] sm:text-[25px] xl:text-[28px] font-extrabold text-[#0F172A] leading-tight tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] xl:text-[12px] text-[#A855F7] font-bold mt-0.5 mb-1.5 uppercase tracking-wide">{item.unit}</div>
                  <p className="text-[12px] xl:text-[13px] text-[#6B7280] leading-snug">{item.label}</p>
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
                className="w-full aspect-[4/3] lg:aspect-[16/10] xl:aspect-[4/3] rounded-xl object-cover max-h-[300px] sm:max-h-[340px] lg:max-h-[380px] xl:max-h-[420px]"
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
