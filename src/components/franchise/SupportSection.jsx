import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const PARTNER_SUPPORTS = [
  {
    category: 'Tài liệu',
    color: '#2563EB', // Blue
    bg: '#EFF6FF',
    border: 'rgba(37, 99, 235, 0.15)',
    items: [
      'Chia sẻ 70% rõ trên hợp đồng.',
      'Có sẵn tài liệu gặp trường.'
    ],
  },
  {
    category: 'Công nghệ',
    color: '#0EA5E9',
    bg: '#E0F7FF',
    border: 'rgba(14, 165, 233, 0.22)',
    items: [
      'Camera AI chuyên dụng.',
      'Phần mềm và app đồng bộ.'
    ],
  },
  {
    category: 'Vận hành',
    color: '#0891B2',
    bg: '#CFFAFE',
    border: 'rgba(8, 145, 178, 0.22)',
    items: [
      'Đào tạo kỹ thuật thực tế.',
      'Theo dõi và hỗ trợ liên tục.'
    ],
  },
];

export default function SupportSection({ id = 'ho-tro' }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren(0.08);
  const ctaRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-support bg-tech-grid border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="glow-blob glow-purple -right-20 -top-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-8">
          <span style={{
            fontFamily: BV, fontSize: 13, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 10,
          }}>
            Hỗ trợ từ Keytech
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 600,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto 12px',
            maxWidth: '800px'
          }}>
            Bạn mở thị trường, Keytech lo công nghệ
          </h2>
          <p style={{
            fontFamily: BV, fontSize: '17.5px', color: '#475569',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.5,
          }}>
            Đồng hành từ lắp đặt đến vận hành.
          </p>
        </div>

        {/* Support Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PARTNER_SUPPORTS.map((group, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} bg-white rounded-2xl border
                shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] 
                hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden`}
              style={{ borderColor: group.border }}
            >
              {/* Header bar */}
              <div className="px-6 py-4" style={{ background: `${group.color}08`, borderBottom: `1px solid ${group.border}` }}>
                <div
                  style={{
                    fontFamily: BV,
                    fontSize: '14.5px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: group.color
                  }}
                >
                  {group.category}
                </div>
              </div>
              {/* Items */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-center">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${group.color}15` }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke={group.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{
                      fontFamily: BV,
                      fontSize: '17px',
                      color: '#334155',
                      fontWeight: 505,
                      lineHeight: 1.45
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight banner */}
        <div
          ref={ctaRef}
          className="fade-up fade-up-delay-4 rounded-3xl p-8 text-center relative overflow-hidden shadow-xl border border-sky-950/20"
          style={{
            background: 'linear-gradient(135deg, #06355A 0%, #075E73 100%)',
          }}
        >
          {/* Subtle decoration glow inside the banner */}
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3
              style={{
                fontFamily: PD,
                fontSize: 'clamp(20px, 2vw, 26px)',
                fontWeight: 600,
                color: '#fff',
                marginBottom: 8,
                lineHeight: 1.2
              }}
            >
              Đi cùng nhau, lớn cùng nhau
            </h3>
            <p
              style={{
                fontFamily: BV,
                fontSize: '17.5px',
                color: '#CBD5E1',
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              Công nghệ của Keytech và lợi thế địa phương của bạn tạo nên dòng tiền an tâm.
            </p>
          </div>
        </div>

        <ScrollNext href="#doi-tuong" />
      </div>
    </section>
  );
}
