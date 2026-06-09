import { useFadeUp } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const BANNER_SRC = '/assets/market-demand-banner.png';

const DEMAND_CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    title: 'Nhà trường cần',
    desc: 'Kiểm soát ra vào, minh bạch điểm danh và tăng an toàn cổng trường.',
    iconColor: 'bg-[#EFF6FF] text-[#3B82F6]',
    borderColor: 'hover:border-[#3B82F6]'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Phụ huynh cần',
    desc: 'Nhận thông tin khi con đến trường, tan học và qua cổng.',
    iconColor: 'bg-[#F5F3FF] text-[#7C3AED]',
    borderColor: 'hover:border-[#7C3AED]'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Nhà đầu tư cần',
    desc: 'Một mô hình có nhu cầu thật, đã triển khai và có thể nhân rộng.',
    iconColor: 'bg-[#ECFDF5] text-[#10B981]',
    borderColor: 'hover:border-[#10B981]'
  }
];

export default function MarketDemandSection({ id = 'thi-truong' }) {
  const leftRef = useFadeUp();
  const rightRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-gradient-to-tr from-[#FAF5FF] via-[#FFFFFF] to-[#EFF6FF] border-t border-[#E5E7EB] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">

          {/* LEFT: Market demand banner */}
          <div ref={leftRef} className="fade-up order-2 lg:order-1 flex items-stretch justify-center h-full">
            <div className="w-full max-w-[620px] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 flex">
              <img
                src={BANNER_SRC}
                alt="Nhu cầu thị trường điểm danh an ninh trường học"
                className="w-full h-full object-cover object-left min-h-[320px] lg:min-h-[360px] xl:min-h-[420px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Text & Cards */}
          <div ref={rightRef} className="fade-up order-1 lg:order-2 flex flex-col justify-center gap-5">
            <div className="section-header">
              <span className="section-eyebrow" style={{ color: '#7C3AED' }}>THỊ TRƯỜNG THỰC TẾ</span>
              <h2 className="section-title">
                An ninh trường học đang trở thành nhu cầu cấp thiết
              </h2>
              <p className="section-desc">
                Điểm danh và an toàn cổng trường đang chuyển từ nhu cầu vận hành sang tiêu chuẩn dịch vụ mà nhà trường và phụ huynh cùng kỳ vọng.
              </p>
            </div>

            {/* 3 cards */}
            <div className="space-y-3 lg:space-y-4">
              {DEMAND_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="card-standard flex items-center gap-4 xl:gap-4.5"
                  style={{
                    '--card-border': '#E5E7EB',
                    '--card-hover-border': i === 0 ? '#3B82F6' : i === 1 ? '#7C3AED' : '#10B981'
                  }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 xl:w-11 h-11 rounded-lg flex items-center justify-center ${card.iconColor} shadow-sm`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-[13.5px] xl:text-[15px] font-extrabold text-[#0F172A] mb-0.5">{card.title}</h3>
                    <p className="text-[12px] xl:text-[13px] text-[#6B7280] leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <ScrollNext href="#cong-nghe" />
      </div>
    </section>
  );
}
