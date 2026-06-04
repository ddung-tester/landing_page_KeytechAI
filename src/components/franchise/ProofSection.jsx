import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { proofStats } from '../../data/franchiseLandingData';

const iconMap = {
  'check-circle': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="#166534" strokeWidth="1.6"/>
      <path d="M7 11l3 3 5-6" stroke="#166534" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'bar-chart': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="12" width="4" height="7" rx="0.8" stroke="#166534" strokeWidth="1.5"/>
      <rect x="9" y="7" width="4" height="12" rx="0.8" stroke="#166534" strokeWidth="1.5"/>
      <rect x="15" y="3" width="4" height="16" rx="0.8" stroke="#166534" strokeWidth="1.5"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="#1E3A8A" strokeWidth="1.6"/>
      <path d="M11 7v4l2.5 2.5" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  document: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="4" y="2" width="14" height="18" rx="2" stroke="#1E3A8A" strokeWidth="1.5"/>
      <path d="M8 7h6M8 11h6M8 15h4" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

export default function ProofSection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Bằng chứng triển khai
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Không bắt đầu từ ý tưởng — mô hình đã có triển khai thực tế
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofStats.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} bg-white border border-[#E5E7EB] rounded-xl p-6
                hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-shadow duration-300`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#F0F9F1] flex items-center justify-center mb-4">
                {iconMap[item.icon]}
              </div>
              <div className="text-[15px] font-bold text-[#0F172A] mb-2">{item.stat}</div>
              <p className="text-[13px] text-[#6B7280] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
