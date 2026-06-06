import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { proofStats } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const iconMap = {
  'check-circle': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.6"/>
      <path d="M7 12l3.5 3.5L17 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'bar-chart': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4.5" height="8" rx="1" stroke="#FFFFFF" strokeWidth="1.5"/>
      <rect x="9.75" y="8" width="4.5" height="13" rx="1" stroke="#FFFFFF" strokeWidth="1.5"/>
      <rect x="16.5" y="3" width="4.5" height="18" rx="1" stroke="#FFFFFF" strokeWidth="1.5"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.6"/>
      <path d="M12 7v5l3 3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  document: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="#FFFFFF" strokeWidth="1.5"/>
      <path d="M8 8h8M8 12h8M8 16h5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

export default function ProofSection({ id }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section
      id={id}
      className="landing-section snap-section page-guide border-t border-[#CFFAFE] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Centered Header */}
        <div ref={titleRef} className="fade-up text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="section-eyebrow section-eyebrow--centered" style={{ color: '#A855F7' }}>
            Ưu thế mô hình
          </span>
          <h2 className="section-title text-center mt-2">
            Mô hình đã được kiểm chứng thực tế
          </h2>
          <div className="section-divider mx-auto" style={{ color: '#A855F7' }} />
          <p className="section-desc text-center mx-auto max-w-2xl">
            Giải pháp được xây dựng bài bản, tối ưu cho nhu cầu thực tế của nhà trường và mở ra tiềm năng kinh doanh bền vững cho đối tác.
          </p>
        </div>

        {/* 4-column cards grid layout */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofStats.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} group bg-white border border-[#DDD6FE] rounded-2xl p-5 sm:p-6
                hover:border-[#A855F7] hover:shadow-[0_8px_30px_rgba(168,85,247,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#60A5FA] flex items-center justify-center mb-4
                group-hover:scale-105 transition-transform duration-300 shadow-[0_2px_8px_rgba(217,70,239,0.15)]">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-[15px] font-bold text-[#0F172A] mb-2 leading-snug">{item.stat}</h3>
              <p className="text-[12.5px] text-[#6B7280] leading-relaxed flex-1">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <ScrollNext href="#doanh-thu" />
      </div>
    </section>
  );
}
