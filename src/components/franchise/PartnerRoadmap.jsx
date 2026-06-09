import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { roadmapSteps } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const STEP_COLORS = [
  { bg: '#D946EF', light: '#FDF4FF', border: '#FBE7F7' }, // Pink
  { bg: '#A855F7', light: '#F9F5FF', border: '#F3E8FF' }, // Purple
  { bg: '#8B5CF6', light: '#F5F3FF', border: '#DDD6FE' }, // Indigo
  { bg: '#3B82F6', light: '#EFF6FF', border: '#DBEAFE' }, // Blue
  { bg: '#1E3A8A', light: '#F0F4FF', border: '#D9E2FC' }, // Navy
];

const ICONS = [
  // Rocket/Launch
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 3.42-2 3.42s2.16-.5 3.42-2M15 9l-9 9M16 5l3 3" />
    <path d="M12 12l9-9-3 12-6-3z" />
  </svg>,
  // Megaphone
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>,
  // Target
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Trend
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />
  </svg>,
  // Globe
  <svg key="5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
];

export default function PartnerRoadmap({ id }) {
  const titleRef = useFadeUp();
  const stepsRef = useFadeUpChildren();

  return (
    <section
      id={id}
      className="landing-section snap-section page-about border-t border-[#DDD6FE] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={titleRef} className="section-header--row fade-up">
          <div className="section-left">
            <span className="section-eyebrow" style={{ color: '#A855F7' }}>Lộ trình đối tác</span>
            <h2 className="section-title">Lộ trình khởi động rõ ràng cho đối tác</h2>
          </div>
          <div className="section-right">
            <p className="section-desc">
              Từ ngày đầu ký kết đến khi vận hành danh mục 10 trường — mỗi giai đoạn đều có mục tiêu cụ thể.
            </p>
          </div>
        </div>

        {/* ── Timeline cards ── */}
        <div ref={stepsRef} className="relative">

          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#D946EF]/20 via-[#A855F7]/40 to-[#60A5FA]/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative z-10">
            {roadmapSteps.map((step, i) => {
              const color = STEP_COLORS[i] || STEP_COLORS[0];
              return (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${i + 1} group flex flex-col`}
                >
                  {/* Step badge */}
                  <div className="flex items-center gap-3 mb-3 lg:flex-col lg:items-center lg:gap-2">
                    <div
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center
                        flex-shrink-0 shadow-lg ring-4 ring-white
                        transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ backgroundColor: color.bg }}
                    >
                      {ICONS[i]}
                    </div>
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide lg:text-center"
                      style={{ backgroundColor: color.light, color: color.bg, border: `1px solid ${color.border}` }}
                    >
                      {step.time}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-white rounded-2xl p-4 shadow-sm
                      transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                    style={{ border: `1px solid ${color.border}` }}
                  >
                    <div
                      className="text-[11px] font-black uppercase tracking-widest mb-1"
                      style={{ color: color.bg }}
                    >
                      Giai đoạn {i + 1}
                    </div>
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0F172A] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#6B7280] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ScrollNext href="#lien-he" />
      </div>
    </section>
  );
}
