import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const ROLE_CARDS = [
  {
    label: 'Đối tác địa phương',
    title: 'Mở thị trường, kết nối trường học',
    desc: 'Đối tác am hiểu địa phương, có mối quan hệ rộng và nắm rõ cơ hội kinh doanh. Đó là giá trị cốt lõi không thể thay thế.',
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
    label: 'Keytech — Đối tác chiến lược',
    title: 'Cung cấp nền tảng, hỗ trợ toàn trình',
    desc: 'Công nghệ, quy trình, đào tạo và hỗ trợ kỹ thuật — Keytech hỗ trợ trọn gói giúp Đối tác tập trung phát triển thị trường.',
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
    label: 'Nhà trường — Khách hàng',
    title: 'Nhận hệ thống, vận hành ngay',
    desc: 'Điểm danh tự động, thông báo phụ huynh, báo cáo sĩ số — nhà trường yêu mến, phụ huynh tin tưởng. Đó là nền tảng giữ khách hàng dài hạn.',
    tone: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      </svg>
    ),
  },
];

const FLOW_STEPS = ['Khảo sát & ký kết', 'Thiết kế lắp đặt', 'Bàn giao & đào tạo', 'Vận hành & mở rộng'];

const toneClass = {
  blue: {
    icon: 'bg-[#EEF6FF] text-[#1D4ED8]',
    border: 'border-[#BFDBFE]',
    text: 'text-[#1D4ED8]',
  },
  purple: {
    icon: 'bg-[#F3EEFF] text-[#6D28D9]',
    border: 'border-[#DDD6FE]',
    text: 'text-[#6D28D9]',
  },
  green: {
    icon: 'bg-[#ECFDF5] text-[#047857]',
    border: 'border-[#A7F3D0]',
    text: 'text-[#047857]',
  },
};

export default function PartnershipModel({ id = 'kiem-chung' }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const flowRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-partners bg-tech-grid border-t border-[#E5E7EB] flex flex-col justify-center relative overflow-hidden"
      style={{ scrollMarginTop: 0 }}
    >
      {/* ── Glow blobs */}
      <div className="glow-blob glow-purple -right-20 -bottom-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div ref={titleRef} className="fade-up section-header">
          <span className="section-eyebrow" style={{ color: '#6D28D9' }}>MÔ HÌNH HỢP TÁC</span>
          <h2 className="section-title">Đối tác kết nối cơ hội — Keytech cung cấp nền tảng</h2>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-4 lg:gap-5">
          {ROLE_CARDS.map((role, i) => {
            const tone = toneClass[role.tone];

            return (
              <article
                key={role.label}
                className={`fade-up fade-up-delay-${i + 1} group card-standard flex flex-col`}
                style={{
                  '--card-border': role.tone === 'blue' ? '#BFDBFE' : role.tone === 'purple' ? '#DDD6FE' : '#A7F3D0',
                  '--card-hover-border': role.tone === 'blue' ? '#1D4ED8' : role.tone === 'purple' ? '#6D28D9' : '#047857'
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
          className="fade-up mt-5 bg-white border border-[#C4B5FD] bg-[#F3EEFF]/40 rounded-2xl px-5 py-5 lg:px-6 shadow-[0_4px_18px_rgba(15,23,42,0.02)] relative overflow-hidden"
        >
          {/* Subtle brand top border line */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#6D28D9] opacity-70" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 relative z-10">
            <div className="lg:w-[190px] shrink-0">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#6D28D9]">Luồng phối hợp</div>
              <div className="text-[14px] font-extrabold text-[#0F172A] mt-1">Từ khảo sát đến vận hành</div>
            </div>

            <div className="flex-1 grid sm:grid-cols-4 gap-3">
              {FLOW_STEPS.map((step, i) => (
                <div
                  key={step}
                  className="relative flex items-center gap-3 bg-[#FBF7F0] border border-[#D8E2F0] rounded-xl px-3.5 py-2.5
                    hover:border-[#6D28D9]/50 hover:bg-[#F3EEFF] hover:shadow-[0_2px_8px_rgba(109,40,217,0.04)]
                    transition-all duration-300 group cursor-default"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full 
                    bg-[#6D28D9]/10 text-[#6D28D9] text-[11px] font-extrabold
                    group-hover:bg-[#6D28D9] group-hover:text-white transition-colors duration-300"
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
