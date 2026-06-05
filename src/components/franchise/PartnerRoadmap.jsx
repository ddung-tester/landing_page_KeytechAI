import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { roadmapSteps } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const STEP_COLORS = [
  { bg: '#D946EF', light: '#FBE7F7', border: '#FCE1F5' }, // Pink
  { bg: '#A855F7', light: '#F5F3FF', border: '#DDD6FE' }, // Purple
  { bg: '#60A5FA', light: '#EFF6FF', border: '#BFDBFE' }, // Blue
  { bg: '#3B82F6', light: '#EFF6FF', border: '#DBEAFE' }, // Blue accent
  { bg: '#059669', light: '#ECFDF5', border: '#A7F3D0' }, // Green
];

const ICONS = ['🚀', '📣', '🏗️', '📈', '🌏'];

export default function PartnerRoadmap() {
  const titleRef = useFadeUp();
  const stepsRef = useFadeUpChildren();

  return (
    <section className="page-about border-t border-[#DDD6FE] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Header ── */}
        <div ref={titleRef} className="fade-up mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DDD6FE]
            rounded-full text-[11px] font-semibold text-[#A855F7] uppercase tracking-widest mb-3">
            Lộ trình đối tác
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight max-w-lg">
            Lộ trình khởi động rõ ràng cho đối tác
          </h2>
          <p className="mt-2 text-[13.5px] text-[#6B7280] max-w-md">
            Từ ngày đầu ký kết đến khi vận hành danh mục 10 trường — mỗi giai đoạn đều có mục tiêu cụ thể.
          </p>
        </div>

        {/* ── Timeline cards ── */}
        <div ref={stepsRef} className="relative">

          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#D946EF]/20 via-[#A855F7]/40 to-[#60A5FA]/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
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
                        flex-shrink-0 shadow-lg ring-4 ring-white text-[18px] lg:text-[20px]
                        transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ backgroundColor: color.bg }}
                    >
                      <span>{ICONS[i]}</span>
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
