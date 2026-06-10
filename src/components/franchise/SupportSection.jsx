import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const JOURNEY_STEPS = [
  {
    title: 'Khảo sát',
    desc: 'Đánh giá nhu cầu và lập phương án triển khai.',
    color: '#1D4ED8',
    bg: '#EEF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Triển khai',
    desc: 'Lắp đặt và cấu hình hệ thống tại điểm trường.',
    color: '#6D28D9',
    bg: '#F3EEFF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Đào tạo',
    desc: 'Hướng dẫn vận hành cho nhà trường và đội ngũ.',
    color: '#2563EB',
    bg: '#EEF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      </svg>
    ),
  },
  {
    title: 'Vận hành',
    desc: 'Hỗ trợ kỹ thuật và bảo trì liên tục.',
    color: '#6D28D9',
    bg: '#F3EEFF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Mở rộng',
    desc: 'Nhân rộng mô hình sang các trường mới.',
    color: '#1D4ED8',
    bg: '#EEF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3H21V6" />
        <path d="M3 21L10 14L14 18L21 10" />
      </svg>
    ),
  },
];

export default function SupportSection({ id }) {
  const titleRef = useFadeUp();
  const journeyRef = useFadeUpChildren();
  const statsRef = useFadeUpChildren();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-white border-t border-[#EEF2F7] flex flex-col justify-center animate-fade-in"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        
        <div ref={titleRef} className="fade-up section-header">
          <span className="section-eyebrow" style={{ color: '#1D4ED8' }}>ĐỒNG HÀNH TRỌN GÓI</span>
          <h2 className="section-title">Chúng tôi không để bạn một mình trên hành trình này</h2>
          <p className="section-desc">
            Từ ngày đầu khảo sát đến khi bạn vận hành điểm trường thứ 10,
            Keytech đồng hành từng bước — quy trình, kỹ thuật, tài liệu và con người.
          </p>
        </div>

        {/* Horizontal Timeline Flow (Desktop) */}
        <div ref={journeyRef} className="w-full relative z-10 py-4 hidden lg:block">
          {/* Background Line Connector */}
          <div className="absolute left-[10%] right-[10%] top-[24px] h-[2px] -translate-y-[1px] bg-gradient-to-r from-[#1D4ED8]/30 via-[#2563EB]/30 to-[#6D28D9]/30 opacity-60" />

          <div className="grid grid-cols-5 gap-6">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group relative">
                {/* Node circle */}
                <div
                  className="w-12 h-12 rounded-2xl bg-white border-2 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-105 shadow-xs"
                  style={{
                    borderColor: step.color,
                    boxShadow: `0 6px 16px -4px ${step.color}12`
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: step.bg, color: step.color }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step label */}
                <span 
                  className="text-[10px] font-extrabold uppercase tracking-widest mt-2.5 mb-0.5"
                  style={{ color: step.color }}
                >
                  Bước 0{i + 1}
                </span>

                {/* Title */}
                <h3 className="text-[16.5px] font-extrabold text-[#0F172A] mb-1 transition-colors group-hover:text-[#1D4ED8]">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-[12.5px] text-[#4B5563] leading-relaxed max-w-[185px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Flow (Mobile/Tablet) */}
        <div className="w-full max-w-md relative z-10 space-y-6 py-4 lg:hidden">
          {/* Vertical line connector */}
          <div className="absolute left-[24px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#1D4ED8]/60 via-[#2563EB]/60 to-[#6D28D9]/60 opacity-55" />

          {JOURNEY_STEPS.map((step, i) => (
            <div key={i} className="flex gap-4 relative items-start group">
              {/* Node */}
              <div
                className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center shrink-0 relative z-10 shadow-xs"
                style={{ borderColor: step.color }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: step.bg, color: step.color }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Text */}
              <div className="pt-1">
                <span 
                  className="text-[10px] font-extrabold uppercase tracking-wider"
                  style={{ color: step.color }}
                >
                  Bước 0{i + 1}
                </span>
                <h3 className="text-[15.5px] font-bold text-[#0F172A] mt-0.5 mb-1">
                  {step.title}
                </h3>
                <p className="text-[12.5px] text-[#4B5563] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supplementary Statistics Footer */}
        <div ref={statsRef} className="w-full max-w-4xl mt-4 lg:mt-5 pt-3 border-t border-[#EEF2F7] flex flex-col sm:flex-row justify-between items-center gap-4 text-center z-10">
          
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-[26px] lg:text-[30px] font-black text-[#1D4ED8] leading-none">24/7</span>
            <span className="text-[10.5px] lg:text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mt-1.5">Hỗ trợ kỹ thuật</span>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-[#D8E2F0]" />

          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-[26px] lg:text-[30px] font-black text-[#6D28D9] leading-none">100%</span>
            <span className="text-[10.5px] lg:text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mt-1.5">Quy trình chuẩn hóa</span>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-[#D8E2F0]" />

          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-[26px] lg:text-[30px] font-black text-[#2563EB] leading-none">250+</span>
            <span className="text-[10.5px] lg:text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mt-1.5">Trường đã triển khai</span>
          </div>

        </div>

        <ScrollNext href="#lien-he" />
      </div>
    </section>
  );
}
