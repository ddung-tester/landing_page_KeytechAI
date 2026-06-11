import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const PARTNER_SUPPORTS = [
  {
    category: 'Tài liệu & Pháp lý',
    color: '#2563EB', // Blue
    bg: '#EFF6FF',
    border: 'rgba(37, 99, 235, 0.15)',
    items: [
      'Cam kết chia sẻ 70% doanh thu minh bạch trên hợp đồng.',
      'Cung cấp toàn bộ kịch bản và tài liệu tiếp cận nhà trường.'
    ],
  },
  {
    category: 'Công nghệ & Phần mềm',
    color: '#7C3AED', // Purple
    bg: '#F5F3FF',
    border: 'rgba(124, 58, 237, 0.15)',
    items: [
      'Camera AI nhận diện khuôn mặt chuyên dụng.',
      'Phần mềm quản lý & ứng dụng di động đồng bộ.'
    ],
  },
  {
    category: 'Vận hành & Kỹ thuật',
    color: '#0D9488', // Teal
    bg: '#F0FDF4',
    border: 'rgba(13, 148, 136, 0.15)',
    items: [
      'Đào tạo kỹ thuật và chuyển giao quy trình thi công.',
      'Giám sát hệ thống và hỗ trợ kỹ thuật liên tục 24/7.'
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
      className="landing-section snap-section bg-white border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="glow-blob glow-purple -right-20 -top-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-16">
          <span style={{
            fontFamily: BV, fontSize: 10.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 10,
          }}>
            Hỗ trợ từ Keytech
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 800,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto 12px',
            maxWidth: '800px'
          }}>
            Bạn phát triển thị trường — Chúng tôi làm chủ công nghệ
          </h2>
          <p style={{
            fontFamily: BV, fontSize: '14.5px', color: '#475569',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.5,
          }}>
            Keytech đồng hành hỗ trợ lắp đặt, cấu hình kỹ thuật và vận hành từ xa.
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
                    fontSize: '11px',
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
                      fontSize: '13.5px',
                      color: '#334155',
                      fontWeight: 500,
                      lineHeight: 1.4
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
          className="fade-up fade-up-delay-4 rounded-3xl p-8 text-center relative overflow-hidden shadow-xl border border-indigo-950/20"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
          }}
        >
          {/* Subtle decoration glow inside the banner */}
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3
              style={{
                fontFamily: PD,
                fontSize: 'clamp(20px, 2vw, 26px)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 8,
                lineHeight: 1.2
              }}
            >
              Đồng hành bền vững — Chia sẻ thịnh vượng
            </h3>
            <p
              style={{
                fontFamily: BV,
                fontSize: '14.5px',
                color: '#CBD5E1',
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              Công nghệ lõi từ Keytech kết hợp với vị thế địa phương của bạn tạo nên dòng tài chính an tâm trọn đời.
            </p>
          </div>
        </div>

        <ScrollNext href="#doi-tuong" />
      </div>
    </section>
  );
}
