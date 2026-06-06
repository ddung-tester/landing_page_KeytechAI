import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { supportItems } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const iconMap = {
  badge: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <path d="M11 2l2 4 4.5.7-3.25 3.15.77 4.5L11 12.2l-4.02 2.15.77-4.5L4.5 6.7 9 6 11 2z" stroke="#FFFFFF" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  training: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="4" width="18" height="12" rx="2" stroke="#FFFFFF" strokeWidth="1.4" />
      <path d="M8 19h6M11 16v3" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 9l3 3 5-5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="#FFFFFF" strokeWidth="1.4" />
      <path d="M8 9a3 3 0 016 0c0 2.5-3 3-3 3" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="11" cy="16" r="0.8" fill="#FFFFFF" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="3" width="18" height="6" rx="1.5" stroke="#FFFFFF" strokeWidth="1.4" />
      <rect x="2" y="13" width="18" height="6" rx="1.5" stroke="#FFFFFF" strokeWidth="1.4" />
      <circle cx="17" cy="6" r="1.2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="17" cy="16" r="1.2" fill="#FFFFFF" opacity="0.5" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <path d="M11 2l8 3.5v5.5c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V5.5L11 2z" stroke="#FFFFFF" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 11l2 2 4-4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  report: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="2" width="16" height="18" rx="2" stroke="#FFFFFF" strokeWidth="1.4" />
      <path d="M7 7h8M7 11h8M7 15h5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

export default function SupportSection({ id }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section
      id={id}
      className="landing-section snap-section page-news border-t border-[#DBEAFE] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={titleRef} className="section-header--row fade-up">
          <div className="section-left">
            <span className="section-eyebrow" style={{ color: '#60A5FA' }}>Hỗ trợ đại lý</span>
            <h2 className="section-title">Hệ thống đồng hành để đại lý dễ bắt đầu và mở rộng</h2>
          </div>
          <div className="section-right">
            <p className="section-desc">
              Toàn bộ hạ tầng công nghệ, quy trình vận hành và hỗ trợ kỹ thuật được cung cấp đầy đủ cho đối tác.
            </p>
          </div>
        </div>

        {/* 6-card grid: 3 columns on lg */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${(i % 3) + 1} group bg-white border border-[#DBEAFE] rounded-2xl p-5
                hover:border-[#60A5FA] hover:shadow-[0_6px_20px_rgba(96,165,250,0.08)] transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#60A5FA] flex items-center justify-center mb-3.5
                group-hover:scale-105 transition-transform duration-300 shadow-[0_2px_8px_rgba(217,70,239,0.15)]">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-[14px] font-bold text-[#0F172A] mb-1.5">{item.title}</h3>
              <p className="text-[12.5px] text-[#6B7280] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        <ScrollNext href="#lo-trinh" />
      </div>
    </section>
  );
}
