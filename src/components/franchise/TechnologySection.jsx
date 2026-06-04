import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';

// ảnh cam.jpg → dùng alias không dấu đã copy sang public/assets/anh-cam.jpg
const CAM_IMAGE_SRC = '/assets/anh-cam.jpg';

const TECH_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="5" width="18" height="12" rx="2" stroke="#1E3A8A" strokeWidth="1.6"/>
        <circle cx="10" cy="11" r="3" stroke="#1E3A8A" strokeWidth="1.5"/>
        <path d="M7 5V4a2 2 0 012-2h2a2 2 0 012 2v1" stroke="#1E3A8A" strokeWidth="1.4"/>
        <circle cx="10" cy="11" r="1" fill="#1E3A8A" opacity="0.35"/>
      </svg>
    ),
    title: 'Camera AI tại cổng trường',
    desc: 'Ghi nhận học sinh ra/vào tại khu vực kiểm soát.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#1E3A8A" strokeWidth="1.5"/>
        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="13" y="1" width="6" height="6" rx="1.5" stroke="#1E3A8A" strokeWidth="1.3" strokeDasharray="1.5 1.5"/>
        <path d="M14.5 3.5l1 1 1.5-1.5" stroke="#1E3A8A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Nhận diện khuôn mặt tự động',
    desc: 'Đối chiếu dữ liệu học sinh để tạo bản ghi điểm danh.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a5 5 0 015 5v2l1.5 2.5H3.5L5 9V7a5 5 0 015-5z" stroke="#1E3A8A" strokeWidth="1.5"/>
        <path d="M8 14.5a2 2 0 004 0" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15.5" cy="5.5" r="2.5" fill="#1E3A8A"/>
        <path d="M14.5 5.5l.7.7 1.3-1.3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Thông báo phụ huynh',
    desc: 'Cập nhật thông tin đi học, tan học hoặc ra/vào trường.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="2.5" stroke="#1E3A8A" strokeWidth="1.5"/>
        <rect x="5" y="11" width="2.5" height="4" rx="0.4" fill="#1E3A8A" opacity="0.4"/>
        <rect x="8.75" y="8" width="2.5" height="7" rx="0.4" fill="#1E3A8A" opacity="0.7"/>
        <rect x="12.5" y="5" width="2.5" height="10" rx="0.4" fill="#1E3A8A"/>
      </svg>
    ),
    title: 'Dashboard quản trị',
    desc: 'Nhà trường theo dõi dữ liệu điểm danh, lịch sử và báo cáo tập trung.',
  },
];

const WORKFLOW_STEPS = [
  {
    label: 'Ghi nhận',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="4" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6.5 4V3.5a1.5 1.5 0 011.5-1.5h2A1.5 1.5 0 0111.5 3.5V4" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    label: 'Nhận diện',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Điểm danh',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Thông báo',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a4.5 4.5 0 014.5 4.5v2L15 11H3l1.5-2.5v-2A4.5 4.5 0 019 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 13a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Báo cáo',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 11h8M5 8h5M5 5h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function TechnologySection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const flowRef = useFadeUp();

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div ref={titleRef} className="fade-up max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Công nghệ Camera AI
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Nhận diện tự động tại cổng trường,<br className="hidden sm:block"/>
            dữ liệu điểm danh cập nhật tức thời
          </h2>
          <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-2xl">
            Keytech AI kết hợp camera AI, phần mềm nhận diện khuôn mặt và nền tảng quản trị điểm
            danh để tự động ghi nhận học sinh ra/vào trường, hỗ trợ nhà trường quản lý an toàn hơn
            và giúp phụ huynh nắm bắt thông tin kịp thời.
          </p>
        </div>

        {/* ── 2-COLUMN LAYOUT ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">

          {/* LEFT: Feature cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {TECH_FEATURES.map((feat, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} group bg-white border border-[#E5E7EB]
                  rounded-xl p-5 hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.08)]
                  transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#F0F4FF] flex items-center justify-center
                  mb-4 group-hover:bg-[#D1E2FF] transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-[13.5px] font-bold text-[#0F172A] mb-1.5 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-[12.5px] text-[#6B7280] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Camera image */}
          <div className="flex items-start justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="w-full max-w-[480px]">
              <div className="rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                <img
                  src={CAM_IMAGE_SRC}
                  alt="Camera AI điểm danh trường học – Keytech AI"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add(
                      'flex', 'items-center', 'justify-center',
                      'min-h-[240px]', 'bg-[#F7F8FA]'
                    );
                    const msg = document.createElement('div');
                    msg.className = 'text-[#94A3B8] text-[13px] text-center px-6';
                    msg.textContent = 'Camera AI điểm danh trường học';
                    e.target.parentElement.appendChild(msg);
                  }}
                />
              </div>
              <p className="mt-3 text-[11.5px] text-[#9CA3AF] text-center">
                Thiết bị camera AI lắp đặt tại khu vực kiểm soát cổng trường.
              </p>
            </div>
          </div>
        </div>

        {/* ── WORKFLOW STEPS ────────────────────────────────────── */}
        <div className="mt-14">
          <div className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-widest mb-8 text-center">
            Luồng vận hành hệ thống
          </div>

          {/* Steps grid — always visible, wraps on mobile */}
          <div className="relative">
            {/* Connecting line (only desktop) */}
            <div
              className="absolute hidden sm:block"
              style={{
                top: '22px',
                left: 'calc(10% + 28px)',
                right: 'calc(10% + 28px)',
                height: '1px',
                background: '#E5E7EB',
                zIndex: 0,
              }}
            />

            <div className="flex flex-wrap sm:flex-nowrap items-start justify-around gap-y-8 gap-x-2 relative z-10">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center flex-1 min-w-[80px] relative">
                  {/* Step badge */}
                  <div
                    className="absolute flex items-center justify-center rounded-full bg-[#1E3A8A] text-white font-bold"
                    style={{ width: '16px', height: '16px', fontSize: '8px', top: '-6px', right: 'calc(50% - 26px)' }}
                  >
                    {i + 1}
                  </div>
                  {/* Icon circle */}
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-[#1E3A8A] flex items-center justify-center text-[#1E3A8A] shadow-sm mb-3">
                    {step.icon}
                  </div>
                  {/* Label */}
                  <span className="text-[12.5px] font-semibold text-[#374151] tracking-tight text-center leading-tight">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
