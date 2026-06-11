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
    desc: 'Cổng an toàn. Điểm danh nhẹ.',
    iconColor: 'bg-[#EEF6FF] text-[#1D4ED8]',
    accentColor: '#1D4ED8',
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
    desc: 'Biết con đến lớp, ra về. An tâm.',
    iconColor: 'bg-[#EEF6FF] text-[#2563EB]',
    accentColor: '#2563EB',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Đối tác địa phương',
    desc: 'Có quan hệ địa phương. Cần mô hình đủ tốt để đi xa.',
    iconColor: 'bg-[#F3EEFF] text-[#6D28D9]',
    accentColor: '#6D28D9',
  },
];

const MARKET_NUMBERS = [
  { value: '25.000+', label: 'Trường học toàn quốc' },
  { value: '22 triệu', label: 'Học sinh cần bảo vệ' },
  { value: '<5%', label: 'Đã có giải pháp AI' },
];

export default function MarketDemandSection({ id = 'thi-truong' }) {
  const leftRef = useFadeUp();
  const rightRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-gradient-to-tr from-[#FBF7F0] via-[#FFFFFF] to-[#F5EFE6] border-t border-[#D8E2F0] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">

          {/* LEFT: Market demand banner */}
          <div ref={leftRef} className="fade-up order-2 lg:order-1 flex items-stretch justify-center h-full">
            <div className="w-full max-w-[620px] rounded-2xl overflow-hidden border border-[#D8E2F0] shadow-[0_8px_30px_rgba(15,23,42,0.04)] bg-white flex flex-col">
              <img
                src={BANNER_SRC}
                alt="Thị trường an ninh trường học Việt Nam"
                className="w-full h-full object-cover object-left min-h-[280px] lg:min-h-[340px] xl:min-h-[380px]"
                loading="lazy"
              />
              {/* Market numbers strip */}
              <div className="grid grid-cols-3 divide-x divide-[#D8E2F0] border-t border-[#D8E2F0] bg-[#FBF7F0]/40">
                {MARKET_NUMBERS.map((n) => (
                  <div key={n.label} className="px-3 py-3.5 text-center">
                    <div className="text-[18px] sm:text-[20px] font-extrabold text-[#0F172A] leading-tight">{n.value}</div>
                    <div className="text-[10px] sm:text-[10.5px] text-[#6B7280] font-medium mt-0.5 leading-snug">{n.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Text & Cards */}
          <div ref={rightRef} className="fade-up order-1 lg:order-2 flex flex-col justify-center gap-5">
            <div className="section-header">
              <span className="section-eyebrow" style={{ color: '#1D4ED8' }}>CƠ HỘI ĐANG MỞ RA</span>
              <h2 className="section-title">
                Trường học đang cần một cách làm mới
              </h2>
            </div>

            {/* 3 cards */}
            <div className="space-y-3">
              {DEMAND_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="card-standard flex items-start gap-4"
                  style={{
                    '--card-border': '#D8E2F0',
                    '--card-hover-border': card.accentColor,
                  }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${card.iconColor} shadow-sm mt-0.5`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#0F172A] mb-0.5">{card.title}</h3>
                    <p className="text-[12.5px] text-[#6B7280] leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key insight pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C4B5FD] bg-[#EEF0FF] px-4 py-2.5 w-fit">
              <span className="text-[18px]">💡</span>
              <p className="text-[12.5px] text-[#4C1D95] font-semibold">
                Dưới 5% trường đã có AI điểm danh. Cơ hội vẫn còn rất rộng.
              </p>
            </div>
          </div>

        </div>

        <ScrollNext href="#kiem-chung" />
      </div>
    </section>
  );
}
