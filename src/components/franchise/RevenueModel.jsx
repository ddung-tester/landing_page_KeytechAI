import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const REVENUE_STREAMS = [
  {
    title: 'Phí triển khai — Thu ngay',
    desc: 'Mỗi trường được ký kết là một khoản thu gọi nờ tức thì. Chi phí lắp đặt và cài đặt được tính vào phiếu thu.',
    color: '#1D4ED8',
    bg: '#EEF6FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M6 21V8l6-4 6 4v13" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    title: 'Phí duy trì — Thu định kỳ',
    desc: 'Mỗi năm học trường tiếp tục sử dụng, bạn tiếp tục thu. Đây là dòng tiền bền vững nhất của mô hình.',
    color: '#6D28D9',
    bg: '#F3EEFF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-2.6-6.4" />
        <path d="M21 4v6h-6" />
      </svg>
    ),
  },
  {
    title: 'Dịch vụ bổ sung — Tăng biên lợi nhuận',
    desc: 'Ngoài gói cơ bản, phụ huynh và nhà trường có thể nâng cấp dịch vụ — tăng giá trị theo từng đương hàng.',
    color: '#2563EB',
    bg: '#EEF6FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Mở rộng trường mới — Tăng trưởng không giới hạn',
    desc: 'Khu vực càng nhiều trường, danh mục càng lớn, tổng doanh thu càng tăng. Không có trần.',
    color: '#6D28D9',
    bg: '#F3EEFF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17 9 11l4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
];

export default function RevenueModel({ id = 'doanh-thu' }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const splitRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-white border-t border-[#EEF2F7] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up section-header">
          <span className="section-eyebrow" style={{ color: '#1D4ED8' }}>MÔ HÌNH DOANH THU</span>
          <h2 className="section-title">Thu nhập của bạn tăng theo từng trường bạn phát triển</h2>
          <p className="section-desc">
            Không phải lương cố định — đây là danh mục tài sản.
            Mỗi trường bạn phát triển tạo ra dòng thu định kỳ năm này qua năm khác.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 lg:gap-6 items-stretch">
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {REVENUE_STREAMS.map((item, i) => (
              <article
                key={item.title}
                className={`fade-up fade-up-delay-${i + 1} card-standard flex flex-col`}
                style={{
                  '--card-border': '#BFDBFE',
                  '--card-hover-border': '#1D4ED8'
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-[20px] font-extrabold text-[#0F172A] leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#4B5563] leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <aside
            ref={splitRef}
            className="fade-up bg-white text-[#0F172A] border border-[#BFDBFE] rounded-2xl p-6 lg:p-7 flex flex-col justify-between overflow-hidden relative shadow-[0_4px_18px_rgba(15,23,42,0.02)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#6D28D9]" />

            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6D28D9] mb-3">
                Tỷ lệ chia sẻ doanh thu
              </div>
              <h3 className="text-[28px] lg:text-[32px] font-black leading-tight tracking-tight text-[#0F172A]">
                Phần lớn nhất luôn thuộc về bạn
              </h3>
            </div>

            <div className="my-4 lg:my-6 xl:my-7">
              <div className="h-5 w-full rounded-full overflow-hidden bg-slate-100 flex">
                <div className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#6D28D9]" style={{ width: '70%' }} />
                <div className="h-full bg-[#93C5FD]" style={{ width: '30%' }} />
              </div>
              <div className="mt-4 grid grid-cols-[7fr_3fr] gap-3">
                <div className="rounded-xl bg-[#F3EEFF]/40 border border-[#DDD6FE] p-4 hover:shadow-[0_2px_8px_rgba(109,40,217,0.03)] transition-all duration-300">
                  <div className="text-[42px] font-black leading-none text-[#6D28D9]">70%</div>
                  <div className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider mt-2">Đối tác</div>
                </div>
                <div className="rounded-xl bg-[#EEF6FF]/40 border border-[#BFDBFE] p-4 hover:shadow-[0_2px_8px_rgba(37,99,235,0.03)] transition-all duration-300">
                  <div className="text-[42px] font-black leading-none text-[#1D4ED8]">30%</div>
                  <div className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider mt-2">Keytech</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#FBF7F0] border border-[#D8E2F0] p-4 text-[#4B5563]">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#6D28D9] mb-1">Tăng theo danh mục</div>
              <div className="text-[14.5px] font-bold leading-snug text-[#374151]">
                10 trường → ~1,4 tỷ/năm. 20 trường → gấp đôi. Không có giới hạn nào cho danh mục bạn có thể xây dựng.
              </div>
            </div>
          </aside>
        </div>

        <ScrollNext href="#dau-tu" />
      </div>
    </section>
  );
}
