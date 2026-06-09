import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const ROLE_CARDS = [
  {
    label: 'Đối tác',
    title: 'Mở thị trường địa phương',
    desc: 'Tiếp cận trường học, khảo sát nhu cầu, phối hợp triển khai và chăm sóc quan hệ tại khu vực.',
    tone: 'blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.7" />
        <path d="M16 3.3a4 4 0 0 1 0 7.4" />
      </svg>
    ),
  },
  {
    label: 'Keytech',
    title: 'Cung cấp nền tảng vận hành',
    desc: 'Chuyển giao Camera AI, Cloud, phần mềm, đào tạo quy trình và hỗ trợ kỹ thuật.',
    tone: 'purple',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="3" />
        <path d="M8 20h8" />
        <path d="M12 18v2" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    label: 'Nhà trường',
    title: 'Nhận hệ thống sẵn dùng',
    desc: 'Có công cụ điểm danh, thông báo phụ huynh và dữ liệu quản trị rõ ràng trong vận hành hằng ngày.',
    tone: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      </svg>
    ),
  },
];

const FLOW_STEPS = ['Khảo sát', 'Thiết kế điểm lắp', 'Bàn giao hệ thống', 'Vận hành cùng trường'];

const toneClass = {
  blue: {
    icon: 'bg-[#EFF6FF] text-[#2563EB]',
    border: 'border-[#DBEAFE]',
    text: 'text-[#2563EB]',
  },
  purple: {
    icon: 'bg-[#F5F3FF] text-[#7C3AED]',
    border: 'border-[#DDD6FE]',
    text: 'text-[#7C3AED]',
  },
  green: {
    icon: 'bg-[#ECFDF5] text-[#059669]',
    border: 'border-[#A7F3D0]',
    text: 'text-[#059669]',
  },
};

export default function PartnershipModel({ id = 'kiem-chung' }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const flowRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] border-t border-[#DBEAFE] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up section-header">
          <span className="section-eyebrow" style={{ color: '#2563EB' }}>Mô hình hợp tác</span>
          <h2 className="section-title">Cách hai bên phối hợp triển khai</h2>
          <p className="section-desc">
            Một mô hình rõ trách nhiệm: đối tác mở thị trường, Keytech vận hành nền tảng, nhà trường nhận giải pháp sẵn dùng.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-4 lg:gap-5">
          {ROLE_CARDS.map((role, i) => {
            const tone = toneClass[role.tone];

            return (
              <article
                key={role.label}
                className={`fade-up fade-up-delay-${i + 1} group card-standard flex flex-col`}
                style={{
                  '--card-border': role.tone === 'blue' ? '#DBEAFE' : role.tone === 'purple' ? '#DDD6FE' : '#A7F3D0',
                  '--card-hover-border': role.tone === 'blue' ? '#2563EB' : role.tone === 'purple' ? '#7C3AED' : '#059669'
                }}
              >
                <div className={`w-12 h-12 rounded-xl ${tone.icon} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  {role.icon}
                </div>
                <div className={`text-[11px] font-black uppercase tracking-[0.16em] mb-2 ${tone.text}`}>
                  {role.label}
                </div>
                <h3 className="text-[20px] font-extrabold text-[#0F172A] leading-tight mb-3">
                  {role.title}
                </h3>
                <p className="text-[13.5px] text-[#4B5563] leading-relaxed">
                  {role.desc}
                </p>
              </article>
            );
          })}
        </div>

        <div
          ref={flowRef}
          className="fade-up mt-5 bg-white border border-[#E5E7EB] rounded-2xl px-5 py-5 lg:px-6 shadow-[0_4px_18px_rgba(15,23,42,0.02)] relative overflow-hidden"
        >
          {/* Subtle brand top border line */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#A855F7] opacity-70" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 relative z-10">
            <div className="lg:w-[190px] shrink-0">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2563EB]">Luồng phối hợp</div>
              <div className="text-[14px] font-extrabold text-[#0F172A] mt-1">Từ khảo sát đến vận hành</div>
            </div>

            <div className="flex-1 grid sm:grid-cols-4 gap-3">
              {FLOW_STEPS.map((step, i) => (
                <div
                  key={step}
                  className="relative flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5
                    hover:border-[#2563EB]/50 hover:bg-[#EFF6FF] hover:shadow-[0_2px_8px_rgba(37,99,235,0.04)]
                    transition-all duration-300 group cursor-default"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full 
                    bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-extrabold
                    group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300"
                  >
                    0{i + 1}
                  </span>
                  <span className="text-[12.5px] font-bold text-[#4B5563] group-hover:text-[#0F172A] transition-colors leading-snug">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollNext href="#doanh-thu" />
      </div>
    </section>
  );
}
