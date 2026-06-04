import { useFadeUpChildren } from '../../hooks/useFadeUp';
import { heroStats } from '../../data/franchiseLandingData';

// SVG icon cho visual bên phải
function FeatureCard({ icon, label, value, sub }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex items-start gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="w-9 h-9 rounded-lg bg-[#FDF4FD] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wide mb-0.5">{label}</div>
        <div className="text-[13.5px] font-semibold text-[#0F172A]">{value}</div>
        {sub && <div className="text-[11px] text-[#9CA3AF] mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

function StatCard({ stat }) {
  return (
    <div className="fade-up bg-white border border-[#E5E7EB] rounded-xl px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="text-[28px] sm:text-[32px] font-extrabold text-[#C039B4] leading-none tracking-tight">
        {stat.value}
      </div>
      <div className="mt-1.5 text-[12.5px] text-[#6B7280] font-medium leading-snug">
        {stat.label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const statsRef = useFadeUpChildren(0.1);

  return (
    <section className="pt-24 pb-16 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

          {/* LEFT: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FDF4FD] border border-[#F9DDF7] rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#C039B4] to-[#4582F2] transition-all duration-300 hover:opacity-90" />
              <span className="text-[11.5px] font-semibold text-[#C039B4] tracking-wide uppercase">
                Cơ hội hợp tác &amp; nhượng quyền khai thác
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-5">
              Nhượng quyền<br />
              <span className="bg-gradient-to-r from-[#C039B4] to-[#4582F2] bg-clip-text text-transparent">Camera AI</span> điểm danh<br />
              trường học
            </h1>

            <p className="text-[15px] text-[#4B5563] leading-relaxed mb-8 max-w-[480px]">
              Mô hình an ninh trường học ứng dụng AI, đã triển khai thực tế tại nhiều địa phương,
              có quy trình chuyển giao và cơ chế doanh thu rõ ràng cho đối tác.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C039B4] to-[#4582F2] transition-all duration-300 hover:opacity-90 text-white font-semibold text-[14px] rounded-lg
                  hover:-translate-y-px hover:shadow-md transition-all duration-200"
              >
                Nhận hồ sơ hợp tác
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#revenue"
                onClick={(e) => { e.preventDefault(); document.querySelector('#revenue')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E5E7EB] text-[#374151] font-semibold text-[14px] rounded-lg
                  hover:border-[#C039B4] hover:text-[#C039B4] hover:-translate-y-px transition-all duration-200"
              >
                Xem mô hình doanh thu
              </a>
            </div>
          </div>

          {/* RIGHT: Visual mockup */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              <FeatureCard
                label="Camera AI"
                value="Nhận diện khuôn mặt"
                sub="AI Face Recognition"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="6" r="3" stroke="#C039B4" strokeWidth="1.6"/>
                    <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#C039B4" strokeWidth="1.6" strokeLinecap="round"/>
                    <rect x="1" y="1" width="16" height="16" rx="3" stroke="#C039B4" strokeWidth="1.2" strokeDasharray="2 2"/>
                  </svg>
                }
              />
              <FeatureCard
                label="Điểm danh"
                value="Tự động hoá"
                sub="Auto Attendance"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9l4 4 8-8" stroke="#C039B4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="1" y="1" width="16" height="16" rx="3" stroke="#C039B4" strokeWidth="1.2"/>
                  </svg>
                }
              />
              <FeatureCard
                label="Thông báo phụ huynh"
                value="Realtime Push"
                sub="Vào/ra cổng trường"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2a5 5 0 015 5v2l1.5 2.5H2.5L4 9V7a5 5 0 015-5z" stroke="#C039B4" strokeWidth="1.5"/>
                    <path d="M7 14a2 2 0 004 0" stroke="#C039B4" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                }
              />
              <FeatureCard
                label="Báo cáo nhà trường"
                value="Dashboard & Reports"
                sub="Quản trị tập trung"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="10" width="3" height="6" rx="0.5" fill="#C039B4" opacity="0.4"/>
                    <rect x="7" y="6" width="3" height="10" rx="0.5" fill="#C039B4" opacity="0.7"/>
                    <rect x="12" y="2" width="3" height="14" rx="0.5" fill="#C039B4"/>
                  </svg>
                }
              />
            </div>

            {/* Decoration badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#C039B4] to-[#4582F2] transition-all duration-300 hover:opacity-90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md">
              Đã triển khai 100+ trường
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {heroStats.map((stat, i) => (
            <div key={i} className={`fade-up fade-up-delay-${i + 1}`}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
