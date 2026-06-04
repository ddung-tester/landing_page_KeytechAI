import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { securityCards } from '../../data/franchiseLandingData';

function Icon({ index }) {
  if (index === 0) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 00-6 6c0 4.5 6 9.5 6 9.5s6-5 6-9.5a6 6 0 00-6-6z" stroke="#1E3A8A" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="10" cy="8" r="2.5" stroke="#1E3A8A" strokeWidth="1.6"/>
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#1E3A8A" strokeWidth="1.6"/>
        <path d="M7 10l2 2 4-4" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10c0-3.5 2.5-6 6.5-6s6.5 2.5 6.5 6c0 4-4.5 7.5-6.5 7.5S3.5 14 3.5 10z" stroke="#1E3A8A" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M7.5 10l1.5 1.5 3.5-3.5" stroke="#1E3A8A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function DataSecuritySection() {
  const titleRef = useFadeUp();
  const listRef = useFadeUpChildren();

  return (
    <section className="bg-[#F6FBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-7 lg:gap-10 items-center">
          <div ref={titleRef} className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB]
              rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
              Tiêu chuẩn dữ liệu
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-4">
              Tiêu chuẩn dữ liệu rõ ràng khi triển khai tại trường học
            </h2>
            <p className="text-[14.5px] text-[#4B5563] leading-relaxed max-w-xl">
              Hệ thống được thiết kế để nhà trường, phụ huynh và đối tác vận hành dữ liệu điểm danh theo đúng vai trò, đúng mục đích và dễ kiểm soát.
            </p>
          </div>

          <div ref={listRef} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {securityCards.map((card, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} flex items-start gap-4 bg-white border border-[#E5E7EB]
                  rounded-lg p-4 hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.05)]
                  transition-all duration-300`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#F0F4FF] flex items-center justify-center flex-shrink-0">
                  <Icon index={i} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0F172A] mb-1">{card.title}</h3>
                  <p className="text-[13px] text-[#556987] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
