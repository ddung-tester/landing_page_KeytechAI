import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const REVENUE_STREAMS = [
  {
    title: 'Phí triển khai',
    desc: 'Thu khi khảo sát, lắp đặt và bàn giao điểm trường.',
    color: '#2563EB',
    bg: '#EFF6FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M6 21V8l6-4 6 4v13" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    title: 'Phí duy trì',
    desc: 'Nguồn thu định kỳ theo học sinh hoặc theo trường.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-2.6-6.4" />
        <path d="M21 4v6h-6" />
      </svg>
    ),
  },
  {
    title: 'Dịch vụ bổ sung',
    desc: 'Gia tăng giá trị từ hỗ trợ, dữ liệu và gói vận hành.',
    color: '#059669',
    bg: '#ECFDF5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Mở rộng trường mới',
    desc: 'Tăng trưởng theo danh mục điểm trường trong khu vực.',
    color: '#EA580C',
    bg: '#FFF7ED',
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
      className="landing-section snap-section page-about border-t border-[#DDD6FE] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up section-header">
          <span className="section-eyebrow" style={{ color: '#7C3AED' }}>Mô hình doanh thu</span>
          <h2 className="section-title">Dòng tiền từ triển khai đến mở rộng danh mục</h2>
          <p className="section-desc">
            Mỗi điểm trường tạo phí ban đầu, phí sử dụng định kỳ và cơ hội mở rộng theo khu vực.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 lg:gap-6 items-stretch">
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {REVENUE_STREAMS.map((item, i) => (
              <article
                key={item.title}
                className={`fade-up fade-up-delay-${i + 1} card-standard flex flex-col`}
                style={{
                  '--card-border': '#E9D5FF',
                  '--card-hover-border': '#7C3AED'
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
            className="fade-up bg-[#0F172A] text-white rounded-xl p-6 lg:p-7 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#60A5FA]" />

            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#CBD5E1] mb-3">
                Tỷ lệ chia sẻ doanh thu
              </div>
              <h3 className="text-[28px] lg:text-[32px] font-black leading-tight tracking-tight">
                70% cho đối tác triển khai
              </h3>
            </div>

            <div className="my-4 lg:my-6 xl:my-7">
              <div className="h-5 w-full rounded-full overflow-hidden bg-white/10 flex">
                <div className="h-full bg-gradient-to-r from-[#D946EF] to-[#A855F7]" style={{ width: '70%' }} />
                <div className="h-full bg-[#60A5FA]" style={{ width: '30%' }} />
              </div>
              <div className="mt-4 grid grid-cols-[7fr_3fr] gap-3">
                <div className="rounded-lg bg-white/10 border border-white/10 p-4">
                  <div className="text-[42px] font-black leading-none">70%</div>
                  <div className="text-[12px] font-bold text-white/70 uppercase tracking-wider mt-2">Đối tác</div>
                </div>
                <div className="rounded-lg bg-white/10 border border-white/10 p-4">
                  <div className="text-[42px] font-black leading-none text-white/75">30%</div>
                  <div className="text-[12px] font-bold text-white/55 uppercase tracking-wider mt-2">Keytech</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white text-[#0F172A] p-4">
              <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#7C3AED] mb-1">Khả năng mở rộng</div>
              <div className="text-[15px] font-extrabold leading-snug">
                Một danh mục nhiều trường giúp dòng thu duy trì đều hơn qua từng năm học.
              </div>
            </div>
          </aside>
        </div>

        <ScrollNext href="#dau-tu" />
      </div>
    </section>
  );
}
