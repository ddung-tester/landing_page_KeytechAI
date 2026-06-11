import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { requirementItems } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const REQ_ICONS = [
  // Network/connection icon
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="5" r="2.5" stroke="#1E3A8A" strokeWidth="1.4"/>
    <circle cx="4" cy="15" r="2.5" stroke="#1E3A8A" strokeWidth="1.4"/>
    <circle cx="16" cy="15" r="2.5" stroke="#1E3A8A" strokeWidth="1.4"/>
    <path d="M10 7.5v3M10 10.5l-4 2M10 10.5l4 2" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  // Team/people icon
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="8" cy="6" r="2.5" stroke="#1E3A8A" strokeWidth="1.4"/>
    <path d="M3 17c0-3 2.24-5 5-5s5 2 5 5" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="14.5" cy="6.5" r="2" stroke="#1E3A8A" strokeWidth="1.3"/>
    <path d="M17 17c0-2.5-1.5-4-3.5-4" stroke="#1E3A8A" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>,
  // Investment/money icon
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="5" width="16" height="11" rx="2" stroke="#1E3A8A" strokeWidth="1.4"/>
    <circle cx="10" cy="10.5" r="2.5" stroke="#1E3A8A" strokeWidth="1.4"/>
    <path d="M5.5 7.5v0M14.5 13.5v0" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // Growth/direction icon
  <svg key="4" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 15l4.5-5 3.5 3 5-7" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 6H17v3.5" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function PartnerRequirements() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="page-auth border-t border-[#E2E8F0] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* LEFT: Title + context */}
          <div ref={titleRef} className="fade-up">
            <span className="section-eyebrow" style={{ color: '#1E3A8A' }}>Đối tác phù hợp</span>
            <h2 className="section-title">Dành cho người hiểu địa phương</h2>
            <div className="section-divider" style={{ color: '#1E3A8A' }} />
            <p className="section-desc mb-5">
              Phù hợp với đội ngũ có kết nối trường học và muốn làm bài bản.
            </p>

            {/* Quote-style highlight */}
            <div className="bg-[#F0F4FF] border-l-4 border-[#1E3A8A] rounded-r-xl px-5 py-4">
              <p className="text-[13.5px] text-[#1E3A8A] font-medium leading-relaxed">
                Càng hiểu trường học địa phương, càng dễ đi xa cùng Keytech.
              </p>
            </div>
          </div>

          {/* RIGHT: 4 requirement cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {requirementItems.map((item, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${(i % 2) + 1} group bg-white border border-[#E2E8F0]
                  rounded-2xl p-5 hover:border-[#1E3A8A] hover:bg-[#FAFCFF]
                  hover:shadow-[0_4px_16px_rgba(30,58,138,0.08)] transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] border border-[#E2E8F0] flex items-center justify-center mb-3.5
                  group-hover:border-[#D1E2FF] group-hover:bg-[#E8F0FF] transition-all duration-300">
                  {REQ_ICONS[i]}
                </div>
                <p className="text-[13.5px] text-[#374151] leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>

        </div>

        <p className="mt-5 text-[11.5px] text-[#9CA3AF] max-w-4xl">
          * Điều kiện hợp tác sẽ được trao đổi rõ trong buổi tư vấn.
        </p>

        <ScrollNext href="#du-lieu" />
      </div>
    </section>
  );
}
