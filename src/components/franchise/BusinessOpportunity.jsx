import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { opportunityItems } from '../../data/franchiseLandingData';

const iconMap = {
  school: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="#1E3A8A" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M2 7v8l9 5 9-5V7" stroke="#1E3A8A" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M20 7v5" stroke="#1E3A8A" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  family: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="8" cy="7" r="3" stroke="#1E3A8A" strokeWidth="1.6"/>
      <path d="M2 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#1E3A8A" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="16" cy="8" r="2.5" stroke="#1E3A8A" strokeWidth="1.4"/>
      <path d="M14 19c0-2.209 1.343-4 3-4s3 1.791 3 4" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  partner: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="6" width="8" height="12" rx="1.5" stroke="#1E3A8A" strokeWidth="1.6"/>
      <rect x="12" y="2" width="8" height="16" rx="1.5" stroke="#1E3A8A" strokeWidth="1.6"/>
      <path d="M5 10h2M5 13h2M15 6h2M15 9h2M15 12h2" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  digital: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="3" width="16" height="12" rx="2" stroke="#1E3A8A" strokeWidth="1.6"/>
      <path d="M8 19h6M11 15v4" stroke="#1E3A8A" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7 9l2 2 3-3 3 3" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function BusinessOpportunity() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Cơ hội đầu tư
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Cơ hội từ chuyển đổi số an ninh trường học
          </h2>
          <p className="text-[15px] text-[#4B5563] leading-relaxed">
            Nhà trường cần công cụ kiểm soát học sinh ra/vào hiệu quả hơn, phụ huynh cần thông tin
            kịp thời, trong khi mô hình xã hội hóa giúp giảm áp lực đầu tư ban đầu cho trường học.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunityItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} group bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6
                hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.08)] transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center mb-4
                group-hover:border-[#D1E2FF] transition-colors">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-[13.5px] text-[#6B7280] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
