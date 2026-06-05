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

const BIG_STATS = [
  { value: '250+', label: 'Trường học', sub: 'trong danh mục triển khai thực tế' },
  { value: '70%', label: 'Doanh thu', sub: 'thực thu cho đại lý mỗi năm học' },
  { value: '5 năm', label: 'Bảo hành', sub: 'camera AI — an tâm đầu tư dài hạn' },
];

export default function ProofSection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const statsRef = useFadeUpChildren();

  return (
    <section className="page-guide border-t border-[#CFFAFE] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">

          {/* LEFT: Title + big stats */}
          <div>
            <div ref={titleRef} className="fade-up mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#CFFAFE]
                rounded-full text-[11px] font-semibold text-[#A855F7] uppercase tracking-widest mb-3">
                Bằng chứng triển khai
              </div>
              <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0F172A] leading-tight mb-3">
                Mô hình đã được kiểm chứng bằng triển khai thực tế
              </h2>
              <p className="text-[14px] text-[#4B5563] leading-relaxed">
                Không chỉ là ý tưởng — hệ thống đã vận hành ổn định tại nhiều địa phương và tiếp tục được nhân rộng.
              </p>
            </div>

            {/* Big stats */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {BIG_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="fade-up bg-white rounded-xl border border-[#CFFAFE] p-4
                    shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <div className="text-[28px] font-extrabold text-[#A855F7] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[13px] font-bold text-[#0F172A] mb-0.5">{stat.label}</div>
                  <div className="text-[11.5px] text-[#6B7280] leading-snug">{stat.sub}</div>
                </div>
              ))}
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
