import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { supportItems } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const iconMap = {
  badge: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2l2 4 4.5.7-3.25 3.15.77 4.5L11 12.2l-4.02 2.15.77-4.5L4.5 6.7 9 6 11 2z" stroke="#1E3A8A" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  training: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="4" width="18" height="12" rx="2" stroke="#1E3A8A" strokeWidth="1.4"/>
      <path d="M8 19h6M11 16v3" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M7 9l3 3 5-5" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  support: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="#1E3A8A" strokeWidth="1.4"/>
      <path d="M8 9a3 3 0 016 0c0 2.5-3 3-3 3" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="11" cy="16" r="0.8" fill="#1E3A8A"/>
    </svg>
  ),
  server: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="3" width="18" height="6" rx="1.5" stroke="#1E3A8A" strokeWidth="1.4"/>
      <rect x="2" y="13" width="18" height="6" rx="1.5" stroke="#1E3A8A" strokeWidth="1.4"/>
      <circle cx="17" cy="6" r="1.2" fill="#1E3A8A" opacity="0.5"/>
      <circle cx="17" cy="16" r="1.2" fill="#1E3A8A" opacity="0.5"/>
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2l8 3.5v5.5c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V5.5L11 2z" stroke="#1E3A8A" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M8 11l2 2 4-4" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  report: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="2" width="16" height="18" rx="2" stroke="#1E3A8A" strokeWidth="1.4"/>
      <path d="M7 7h8M7 11h8M7 15h5" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

export default function SupportSection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="bg-[#F8FAFC] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={titleRef} className="fade-up max-w-2xl mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-3">
            Hỗ trợ đại lý
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0F172A] leading-tight mb-2">
            VNS/Keytech đồng hành để đại lý dễ bắt đầu và mở rộng
          </h2>
          <p className="text-[14px] text-[#4B5563] leading-relaxed">
            Toàn bộ hạ tầng công nghệ, quy trình vận hành và hỗ trợ kỹ thuật được đảm bảo bởi đội ngũ VNS/Keytech.
          </p>
        </div>

        {/* 6-card grid: 3 columns on lg */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${(i % 3) + 1} group bg-white border border-[#E5E7EB] rounded-xl p-5
                hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.08)] transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#F0F4FF] flex items-center justify-center mb-3
                group-hover:bg-[#D1E2FF] transition-colors">
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
