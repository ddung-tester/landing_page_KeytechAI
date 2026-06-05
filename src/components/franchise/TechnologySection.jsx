import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const VIDEO_SRC = '/assets/video_show_cong_nghe.mp4';

const TECH_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="13" y="1" width="6" height="6" rx="1.5" stroke="#FFFFFF" strokeWidth="1.3" strokeDasharray="1.5 1.5" />
        <path d="M14.5 3.5l1 1 1.5-1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Nhận diện tự động',
    desc: 'Đối chiếu dữ liệu học sinh để tạo bản ghi điểm danh.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a5 5 0 015 5v2l1.5 2.5H3.5L5 9V7a5 5 0 015-5z" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M8 14.5a2 2 0 004 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15.5" cy="5.5" r="2.5" fill="#FFFFFF" />
        <path d="M14.5 5.5l.7.7 1.3-1.3" stroke="#D946EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Thông báo tức thời',
    desc: 'Cập nhật thông tin đi học, tan học hoặc ra/vào trường.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="2.5" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect x="5" y="11" width="2.5" height="4" rx="0.4" fill="#FFFFFF" opacity="0.4" />
        <rect x="8.75" y="8" width="2.5" height="7" rx="0.4" fill="#FFFFFF" opacity="0.7" />
        <rect x="12.5" y="5" width="2.5" height="10" rx="0.4" fill="#FFFFFF" />
      </svg>
    ),
    title: 'Quản trị tập trung',
    desc: 'Nhà trường theo dõi dữ liệu điểm danh, lịch sử và báo cáo tập trung.',
  },
];

export default function TechnologySection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="page-products border-t border-[#FBE7F7] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={titleRef} className="fade-up grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-end mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gradient-to-r from-[#D946EF] to-[#60A5FA] text-white
              rounded-full text-[11px] font-bold uppercase tracking-widest mb-3 shadow-sm">
              Công nghệ Camera AI
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0F172A] leading-tight">
              Camera AI điểm danh cho trường học
            </h2>
          </div>
          <div>
            <p className="text-[14px] text-[#4B5563] leading-relaxed max-w-xl">
              Camera AI kết hợp phần mềm nhận diện và dashboard quản trị để tự động ghi nhận học sinh
              ra/vào, cập nhật dữ liệu điểm danh và hỗ trợ thông báo phụ huynh.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">

          {/* LEFT: Feature cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {TECH_FEATURES.map((feat, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} group bg-white border border-[#FBE7F7]
                  rounded-2xl p-4 hover:border-[#D946EF] hover:shadow-[0_4px_16px_rgba(217,70,239,0.06)]
                  transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D946EF] to-[#60A5FA] flex items-center justify-center
                  mb-3 group-hover:scale-105 transition-transform duration-300 shadow-[0_2px_8px_rgba(217,70,239,0.2)]">
                  {feat.icon}
                </div>
                <h3 className="text-[13px] font-bold text-[#0F172A] mb-1 leading-snug">{feat.title}</h3>
                <p className="text-[12px] text-[#6B7280] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Video */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_4px_24px_rgba(30,58,138,0.08)]">
              <video
                src={VIDEO_SRC}
                autoPlay
                loop
                muted
                playsInline
                className="w-full block"
                style={{ minHeight: 'clamp(300px, 50vh, 520px)', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>

        <ScrollNext href="#truong-da-trien-khai" />
      </div>
    </section>
  );
}
