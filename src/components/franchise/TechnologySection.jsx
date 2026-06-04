import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const CAM_IMAGE_SRC = '/assets/%E1%BA%A3nh%20cam.jpg';

const TECH_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#1E3A8A" strokeWidth="1.5"/>
        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="13" y="1" width="6" height="6" rx="1.5" stroke="#1E3A8A" strokeWidth="1.3" strokeDasharray="1.5 1.5"/>
        <path d="M14.5 3.5l1 1 1.5-1.5" stroke="#1E3A8A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Nhận diện tự động',
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
    title: 'Thông báo tức thời',
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
    title: 'Quản trị tập trung',
    desc: 'Nhà trường theo dõi dữ liệu điểm danh, lịch sử và báo cáo tập trung.',
  },
];

export default function TechnologySection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="bg-white border-t border-[#DBEAFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up max-w-3xl mb-7 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Công nghệ Camera AI
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Camera AI điểm danh cho trường học
          </h2>
          <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-2xl">
            Camera AI kết hợp phần mềm nhận diện và dashboard quản trị để tự động ghi nhận học sinh ra/vào, cập nhật dữ liệu điểm danh và hỗ trợ thông báo phụ huynh.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-7 lg:gap-10 items-center">
          <div ref={cardsRef} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
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

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
              <img
                src={CAM_IMAGE_SRC}
                alt="Camera AI điểm danh trường học - Keytech AI"
                className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add(
                    'flex', 'items-center', 'justify-center',
                    'min-h-[260px]', 'bg-[#F7F8FA]'
                  );
                  const msg = document.createElement('div');
                  msg.className = 'text-[#94A3B8] text-[13px] text-center px-6';
                  msg.textContent = 'Camera AI điểm danh trường học';
                  e.target.parentElement.appendChild(msg);
                }}
              />
            </div>
          </div>
        </div>

        <ScrollNext href="#truong-da-trien-khai" />
      </div>
    </section>
  );
}
