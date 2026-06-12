import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const STEPS = [
  {
    time: 'Ngày 1 - 30',
    phase: 'Giai đoạn 1',
    title: 'Nhận bàn giao',
    color: '#2563EB',
    bg: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.10) 100%)',
    border: 'rgba(37, 99, 235, 0.22)',
    glow: 'rgba(37, 99, 235, 0.22)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10" />
      </svg>
    )
  },
  {
    time: 'Ngày 31 - 60',
    phase: 'Giai đoạn 2',
    title: 'Khảo sát trường',
    color: '#3B82F6', // Blue
    bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%)',
    border: 'rgba(59, 130, 246, 0.15)',
    glow: 'rgba(59, 130, 246, 0.2)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
      </svg>
    )
  },
  {
    time: 'Ngày 61 - 90',
    phase: 'Giai đoạn 3',
    title: 'Lắp đặt đầu tiên',
    color: '#0EA5E9',
    bg: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(6, 182, 212, 0.12) 100%)',
    border: 'rgba(14, 165, 233, 0.22)',
    glow: 'rgba(14, 165, 233, 0.22)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    time: 'Ngày 91 - 180',
    phase: 'Giai đoạn 4',
    title: 'Bắt đầu doanh thu',
    color: '#0891B2',
    bg: 'linear-gradient(135deg, rgba(8, 145, 178, 0.08) 0%, rgba(6, 182, 212, 0.12) 100%)',
    border: 'rgba(8, 145, 178, 0.22)',
    glow: 'rgba(8, 145, 178, 0.22)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    time: 'Tháng 6 trở đi',
    phase: 'Giai đoạn 5',
    title: 'Mở rộng bền vững',
    color: '#2563EB',
    bg: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.10) 100%)',
    border: 'rgba(37, 99, 235, 0.22)',
    glow: 'rgba(37, 99, 235, 0.22)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      className="landing-section snap-section bg-section-timeline bg-tech-grid border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="roadmap-horizontal-wrap">

        {/* Header */}
        <div ref={titleRef} className="fade-up roadmap-horizontal-header">
          <span style={{
            fontFamily: BV, fontSize: 13, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 10,
          }}>
            Lộ trình hành động
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 600,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto 12px',
            maxWidth: '760px'
          }}>
            Cùng đi đến dòng tiền bền vững
          </h2>
          <p style={{
            fontFamily: BV, fontSize: '17.5px', color: '#475569',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.5,
          }}>
            Rõ từng bước. An tâm triển khai.
          </p>
        </div>

        <div ref={stepsRef} className="roadmap-horizontal-track">
          <div className="roadmap-horizontal-line" />

          <div className="roadmap-horizontal-steps">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} group roadmap-horizontal-step`}
              >
                <div
                  className="roadmap-horizontal-icon"
                  style={{
                    backgroundColor: step.color,
                    color: '#fff',
                    boxShadow: `0 8px 20px ${step.glow}`
                  }}
                >
                  {step.icon}
                </div>

                <div
                  className="roadmap-horizontal-time"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    border: `1px solid ${step.color}30`,
                    fontFamily: BV
                  }}
                >
                  {step.time}
                </div>

                <div
                  className="roadmap-horizontal-card"
                  style={{ borderColor: step.border }}
                >
                  <div
                    style={{
                      fontFamily: BV,
                      fontSize: 15.5,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: step.color,
                      marginBottom: 8
                    }}
                  >
                    {step.phase}
                  </div>
                  <h3
                    style={{
                      fontFamily: PD,
                      fontSize: '23px',
                      fontWeight: 600,
                      color: '#0F172A',
                      marginBottom: 0,
                      lineHeight: 1.3
                    }}
                  >
                    {step.title}
                  </h3>
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
