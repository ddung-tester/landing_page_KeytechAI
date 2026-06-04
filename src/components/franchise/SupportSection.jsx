import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { supportItems } from '../../data/franchiseLandingData';

const iconMap = {
  badge: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l1.8 3.6L16 6.4l-3 2.9.7 4.1L10 11.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L10 2z" stroke="#C039B4" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  training: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="11" rx="2" stroke="#C039B4" strokeWidth="1.4"/>
      <path d="M7 18h6M10 15v3" stroke="#C039B4" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M6 8l3 3 5-5" stroke="#C039B4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#C039B4" strokeWidth="1.4"/>
      <path d="M7 8a3 3 0 016 0c0 2-3 3-3 3" stroke="#C039B4" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r="0.75" fill="#C039B4"/>
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="5" rx="1.5" stroke="#C039B4" strokeWidth="1.4"/>
      <rect x="2" y="12" width="16" height="5" rx="1.5" stroke="#C039B4" strokeWidth="1.4"/>
      <circle cx="15.5" cy="5.5" r="1" fill="#C039B4" opacity="0.5"/>
      <circle cx="15.5" cy="14.5" r="1" fill="#C039B4" opacity="0.5"/>
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l7 3v5c0 4-3 7-7 8C7 17 3 14 3 10V5l7-3z" stroke="#C039B4" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M7 10l2 2 4-4" stroke="#C039B4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  report: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="#C039B4" strokeWidth="1.4"/>
      <path d="M7 6h6M7 10h6M7 14h4" stroke="#C039B4" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

export default function SupportSection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section id="support" className="py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-12">
          <div className="text-[11px] font-semibold text-[#C039B4] uppercase tracking-widest mb-3">
            Hỗ trợ đại lý
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight">
            Đồng hành từ chuyển giao đến vận hành
          </h2>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${(i % 3) + 1} group bg-white border border-[#E5E7EB] rounded-xl p-6
                hover:border-[#C039B4] hover:shadow-[0_4px_16px_rgba(192,57,180,0.08)] transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#FDF4FD] flex items-center justify-center mb-4
                group-hover:bg-[#F9DDF7] transition-colors">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-[14.5px] font-bold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#6B7280] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
