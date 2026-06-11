import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const STEPS = [
  {
    time: 'Ngày 1 - 30',
    phase: 'Giai đoạn 1',
    title: 'Nhận chuyển giao & Onboarding',
    desc: 'Đào tạo và bàn giao tài liệu kịch bản tiếp cận trường học.',
    color: '#8B5CF6', // Purple
    bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.1) 100%)',
    border: 'rgba(139, 92, 246, 0.15)',
    glow: 'rgba(139, 92, 246, 0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10" />
      </svg>
    )
  },
  {
    time: 'Ngày 31 - 60',
    phase: 'Giai đoạn 2',
    title: 'Tiếp cận & Khảo sát thực tế',
    desc: 'Lên danh mục trường và đồng hành khảo sát hạ tầng.',
    color: '#3B82F6', // Blue
    bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%)',
    border: 'rgba(59, 130, 246, 0.15)',
    glow: 'rgba(59, 130, 246, 0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
      </svg>
    )
  },
  {
    time: 'Ngày 61 - 90',
    phase: 'Giai đoạn 3',
    title: 'Triển khai điểm trường đầu',
    desc: 'Ký kết hợp đồng và triển khai lắp đặt hệ thống.',
    color: '#10B981', // Emerald
    bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%)',
    border: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    time: 'Ngày 91 - 180',
    phase: 'Giai đoạn 4',
    title: 'Vận hành & Kích hoạt dòng tiền',
    desc: 'Bàn giao vận hành và bắt đầu nhận doanh thu định kỳ.',
    color: '#EA580C', // Orange
    bg: 'linear-gradient(135deg, rgba(234, 88, 12, 0.05) 0%, rgba(234, 88, 12, 0.1) 100%)',
    border: 'rgba(234, 88, 12, 0.15)',
    glow: 'rgba(234, 88, 12, 0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    time: 'Tháng 6 trở đi',
    phase: 'Giai đoạn 5',
    title: 'Nhân bản & Tối ưu hóa ROI',
    desc: 'Mở rộng quy mô danh mục trường học tại địa phương.',
    color: '#D946EF', // Magenta
    bg: 'linear-gradient(135deg, rgba(217, 70, 239, 0.05) 0%, rgba(217, 70, 239, 0.1) 100%)',
    border: 'rgba(217, 70, 239, 0.15)',
    glow: 'rgba(217, 70, 239, 0.2)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
];

export default function PartnerRoadmap({ id }) {
  const titleRef = useFadeUp();
  const stepsRef = useFadeUpChildren(0.08);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-slate-50/50 border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="glow-blob glow-purple -left-20 -bottom-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-16">
          <span style={{
            fontFamily: BV, fontSize: 10.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7C3AED',
            display: 'block', marginBottom: 10,
          }}>
            Lộ trình hành động
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 800,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto 12px',
            maxWidth: '800px'
          }}>
            Đồng hành chặt chẽ từ ngày đầu đến khi dòng tiền tự động vận hành
          </h2>
          <p style={{
            fontFamily: BV, fontSize: '14.5px', color: '#475569',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.5,
          }}>
            Lộ trình chuẩn hóa giúp đối tác làm chủ thị trường nhanh chóng.
          </p>
        </div>

        {/* Timeline Grid */}
        <div ref={stepsRef} className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[62px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-pink-500/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} group flex flex-col items-center text-center`}
              >
                {/* Step indicator circle */}
                <div className="mb-4 relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md relative z-10 ring-4 ring-white transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: step.color,
                      color: '#fff',
                      boxShadow: `0 8px 20px ${step.glow}`
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Day Badge */}
                <div
                  className="mb-3 px-3 py-1 rounded-full text-[12px] font-bold tracking-wide"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    border: `1px solid ${step.color}30`,
                    fontFamily: BV
                  }}
                >
                  {step.time}
                </div>

                {/* Glass card */}
                <div
                  className="flex-1 w-full bg-white/70 backdrop-blur-md rounded-2xl p-5 border shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                  style={{ borderColor: step.border }}
                >
                  <div
                    style={{
                      fontFamily: BV,
                      fontSize: 10.5,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: step.color,
                      marginBottom: 6
                    }}
                  >
                    {step.phase}
                  </div>
                  <h3
                    style={{
                      fontFamily: PD,
                      fontSize: '16px',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: 10,
                      lineHeight: 1.3
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: BV,
                      fontSize: '12.5px',
                      color: '#64748B',
                      lineHeight: 1.5,
                      marginTop: 'auto'
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ScrollNext href="#ho-tro" />
      </div>
    </section>
  );
}
