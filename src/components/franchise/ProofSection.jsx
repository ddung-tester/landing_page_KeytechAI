import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { proofStats } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const iconMap = {
  'check-circle': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.6"/>
      <path d="M7 12l3.5 3.5L17 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'bar-chart': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4.5" height="8" rx="1" stroke="#FFFFFF" strokeWidth="1.5"/>
      <rect x="9.75" y="8" width="4.5" height="13" rx="1" stroke="#FFFFFF" strokeWidth="1.5"/>
      <rect x="16.5" y="3" width="4.5" height="18" rx="1" stroke="#FFFFFF" strokeWidth="1.5"/>
    </svg>
  ),
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.6"/>
      <path d="M12 7v5l3 3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  document: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="#FFFFFF" strokeWidth="1.5"/>
      <path d="M8 8h8M8 12h8M8 16h5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

export default function ProofSection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="page-guide border-t border-[#CFFAFE] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">

          {/* LEFT: Title only */}
          <div>
            <div ref={titleRef} className="fade-up">
              <span className="section-eyebrow" style={{ color: '#A855F7' }}>Bằng chứng triển khai</span>
              <h2 className="section-title">Mô hình đã được kiểm chứng bằng triển khai thực tế</h2>
              <div className="section-divider" style={{ color: '#A855F7' }} />
              <p className="section-desc">
                Không chỉ là ý tưởng — hệ thống đã vận hành ổn định tại nhiều địa phương và tiếp tục được nhân rộng.
              </p>
            </div>
          </div>

          {/* RIGHT: Proof cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {proofStats.map((item, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} bg-white border border-[#CFFAFE] rounded-xl p-5
                  hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-[#06B6D4] transition-all duration-300`}
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#D946EF] to-[#60A5FA] flex items-center justify-center mb-4 shadow-sm">
                  {iconMap[item.icon]}
                </div>
                <div className="text-[15px] font-bold text-[#0F172A] mb-2">{item.stat}</div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <ScrollNext href="#doanh-thu" />
      </div>
    </section>
  );
}
