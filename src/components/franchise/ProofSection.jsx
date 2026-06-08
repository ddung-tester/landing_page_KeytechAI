import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { proofStats } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const iconMap = {
  'check-circle': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  'bar-chart': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  document: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
};

export default function ProofSection({ id }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const imageRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section page-guide border-t border-[#CFFAFE] flex flex-col justify-center animate-fade-in"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

          {/* LEFT: Text Header & List of Features */}
          <div>
            <div ref={titleRef} className="fade-up mb-6">
              <span className="section-eyebrow" style={{ color: '#A855F7' }}>
                Ưu thế hệ thống
              </span>
              <h2 className="section-title mt-2">
                Mô hình vận hành đã được kiểm chứng
              </h2>
              <div className="section-divider" style={{ color: '#A855F7' }} />
              <p className="section-desc">
                Giải pháp được chuẩn hóa quy trình, tối ưu hóa cho nhu cầu quản trị của nhà trường và mang lại hiệu quả kinh tế lâu dài cho đối tác.
              </p>
            </div>

            {/* List format features */}
            <div ref={cardsRef} className="space-y-5">
              {proofStats.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] text-[#A855F7] flex items-center justify-center flex-shrink-0
                    group-hover:bg-[#A855F7] group-hover:text-white transition-all duration-300 shadow-sm">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0F172A] mb-0.5 group-hover:text-[#A855F7] transition-colors">{item.stat}</h3>
                    <p className="text-[12.5px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Successful attendance screenshot image */}
          <div ref={imageRef} className="fade-up flex justify-center lg:justify-end w-full">
            <img
              src="/assets/điểm danh thành công.png"
              alt="Giao diện điểm danh thành công"
              className="w-full h-auto object-contain rounded-2xl shadow-md border border-[#E5E7EB]"
            />
          </div>

        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <ScrollNext href="#doanh-thu" />
      </div>
    </section>
  );
}
