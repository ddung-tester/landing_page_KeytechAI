import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const TARGETS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Doanh nghiệp địa phương',
    desc: 'Muốn thêm dòng doanh thu mới.',
    color: '#2563EB', // Blue
    border: 'rgba(37, 99, 235, 0.15)',
    bg: 'rgba(37, 99, 235, 0.03)'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
    title: 'Nhà đầu tư tài chính',
    desc: 'Tìm dòng tiền dài hạn, an tâm.',
    color: '#0EA5E9',
    border: 'rgba(14, 165, 233, 0.22)',
    bg: 'rgba(14, 165, 233, 0.10)'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Kết nối ngành giáo dục',
    desc: 'Có niềm tin từ trường học địa phương.',
    color: '#0EA5E9', // Cyan
    border: 'rgba(14, 165, 233, 0.15)',
    bg: 'rgba(14, 165, 233, 0.03)'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Đơn vị thi công sẵn có',
    desc: 'Có đội ngũ tại chỗ, triển khai nhanh.',
    color: '#0891B2',
    border: 'rgba(8, 145, 178, 0.22)',
    bg: 'rgba(8, 145, 178, 0.10)'
  },
];

export default function PartnerTarget({ id = 'doi-tuong' }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren(0.08);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-partners bg-tech-grid border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="glow-blob glow-cyan -right-20 bottom-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-8">
          <span style={{
            fontFamily: BV, fontSize: 18, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 12,
          }}>
            Đối tác phù hợp
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 600,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto 12px',
            maxWidth: '800px'
          }}>
            Ai phù hợp để cùng đi?
          </h2>
          <p style={{
            fontFamily: BV, fontSize: '20px', color: '#475569',
            maxWidth: '620px', margin: '0 auto', lineHeight: 1.6,
          }}>
            Keytech tìm người có kết nối, có tâm và muốn đi dài.
          </p>
        </div>

        {/* Target Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TARGETS.map((t, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} rounded-2xl border p-6 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-center bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]`}
              style={{ borderColor: t.border }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                style={{ background: t.bg, color: t.color }}
              >
                {t.icon}
              </div>
              <h3
                style={{
                  fontFamily: PD,
                  fontSize: '26px',
                  fontWeight: 600,
                  color: '#0F172A',
                  marginBottom: 10,
                  lineHeight: 1.3
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontFamily: BV,
                  fontSize: '18.5px',
                  color: '#475569',
                  lineHeight: 1.6
                }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <ScrollNext href="#lien-he" />
      </div>
    </section>
  );
}
