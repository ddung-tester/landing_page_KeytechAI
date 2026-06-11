import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const TARGETS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Doanh nghiệp địa phương',
    desc: 'Muốn bứt phá doanh thu với mảng công nghệ giáo dục đầy tiềm năng.',
    color: '#2563EB', // Blue
    border: 'rgba(37, 99, 235, 0.15)',
    bg: 'rgba(37, 99, 235, 0.03)'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
      </svg>
    ),
    title: 'Nhà đầu tư tài chính',
    desc: 'Tìm kiếm dòng tiền thụ động dài hạn, an toàn và bền vững trọn đời.',
    color: '#7C3AED', // Purple
    border: 'rgba(124, 58, 237, 0.15)',
    bg: 'rgba(124, 58, 237, 0.03)'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Kết nối ngành giáo dục',
    desc: 'Sở hữu mạng lưới uy tín với các trường học tại địa bàn.',
    color: '#0EA5E9', // Cyan
    border: 'rgba(14, 165, 233, 0.15)',
    bg: 'rgba(14, 165, 233, 0.03)'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Đơn vị thi công sẵn có',
    desc: 'Có sẵn đội ngũ kinh doanh hoặc kỹ thuật tại chỗ để tối ưu chi phí.',
    color: '#10B981', // Emerald
    border: 'rgba(16, 185, 129, 0.15)',
    bg: 'rgba(16, 185, 129, 0.03)'
  },
];

export default function PartnerTarget({ id = 'doi-tuong' }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren(0.08);
  const noteRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-slate-50/50 border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="glow-blob glow-cyan -right-20 bottom-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-16">
          <span style={{
            fontFamily: BV, fontSize: 10.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 10,
          }}>
            Đối tác phù hợp
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 800,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto 12px',
            maxWidth: '800px'
          }}>
            Bạn đã sẵn sàng đồng hành cùng Keytech?
          </h2>
          <p style={{
            fontFamily: BV, fontSize: '14.5px', color: '#475569',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.5,
          }}>
            Chúng tôi tìm kiếm những đối tác có khát vọng, nguồn vốn hoặc kết nối địa phương vững chắc.
          </p>
        </div>

        {/* Target Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TARGETS.map((t, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} rounded-2xl border p-6 hover:-translate-y-1.5 transition-all duration-300 flex flex-col bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]`}
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
                  fontSize: '16.5px',
                  fontWeight: 800,
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
                  fontSize: '13px',
                  color: '#475569',
                  lineHeight: 1.5,
                  marginTop: 'auto'
                }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Warning / Exclusion box - Luxury Dark Card style */}
        <div
          ref={noteRef}
          className="fade-up fade-up-delay-5 bg-[#0F172A] border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
          
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 text-amber-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div className="relative z-10 flex-1">
            <div style={{
              fontFamily: BV,
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#F59E0B',
              marginBottom: 6
            }}>
              Lưu ý quan trọng
            </div>
            <p style={{
              fontFamily: BV,
              fontSize: '14px',
              color: '#E2E8F0',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              Dự án không dành cho nhà đầu tư lướt sóng ngắn hạn. Chúng tôi chỉ hợp tác với những ai muốn cùng kiến tạo giá trị dài hạn.
            </p>
          </div>
        </div>

        <ScrollNext href="#lien-he" />
      </div>
    </section>
  );
}
