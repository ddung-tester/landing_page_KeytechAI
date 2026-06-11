import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const STATS = [
  {
    big: '25.000+',
    unit: 'trường học',
    sub: 'Dư địa thị trường khổng lồ',
    accent: '#2563EB',
    bg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)',
    border: '#BFDBFE',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M6 21V8l6-4 6 4v13M9 21v-7h6v7"/>
      </svg>
    ),
  },
  {
    big: '70%',
    unit: 'doanh thu',
    sub: 'Mức chia sẻ cao nhất thị trường',
    accent: '#7C3AED',
    bg: 'linear-gradient(135deg,#F5F3FF,#EDE9FE)',
    border: '#DDD6FE',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
  },
  {
    big: '100+',
    unit: 'trường thực tế',
    sub: 'Hệ thống thực chiến ổn định',
    accent: '#059669',
    bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)',
    border: '#BBF7D0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    big: '∞',
    unit: 'mở rộng',
    sub: 'Tiềm năng thu nhập vô hạn',
    accent: '#EA580C',
    bg: 'linear-gradient(135deg,#FFF7ED,#FFEDD5)',
    border: '#FED7AA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6"/>
      </svg>
    ),
  },
];

const MESSAGES = [
  { text: 'Nhu cầu thiết yếu', sub: 'An toàn cho con là ưu tiên số một của cha mẹ.' },
  { text: 'Doanh thu định kỳ', sub: 'Dịch vụ thu phí đều đặn theo mỗi năm học.' },
  { text: 'Công nghệ thực chiến', sub: 'Kế thừa giải pháp công nghệ đã vận hành thành công.' },
  { text: 'Lợi thế địa phương', sub: 'Tận dụng thế mạnh mối quan hệ sẵn có của bạn.' },
];

export default function InvestmentReasons({ id = 'co-hoi' }) {
  const titleRef = useFadeUp();
  const statsRef = useFadeUpChildren(0.08);
  const msgRef = useFadeUpChildren(0.06);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-white border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="glow-blob glow-blue -right-20 -top-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-10">
          <span style={{
            fontFamily: BV, fontSize: 10.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 10,
          }}>
            Cơ hội đầu tư
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 800,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 0 10px',
          }}>
            Một mô hình{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563EB,#7C3AED)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              sinh lời bền vững
            </span>
            {' '}từ nhu cầu xã hội thực
          </h2>
          <p style={{
            fontFamily: BV, fontSize: 14, color: '#64748B',
            maxWidth: 520, margin: '0 auto', lineHeight: 1.7,
          }}>
            Doanh thu từ 25.000+ trường học Việt Nam — mỗi năm học là một chu kỳ tiền bền vững.
          </p>
        </div>

        {/* 4 Big Stat Cards */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} rounded-2xl p-5 relative overflow-hidden
                hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default`}
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
            >
              {/* Icon top-right */}
              <div style={{
                position: 'absolute', top: 14, right: 14,
                color: s.accent, opacity: 0.5,
              }}>{s.icon}</div>

              {/* Big number */}
              <div style={{
                fontFamily: PD, fontWeight: 900,
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                color: s.accent, lineHeight: 1, marginBottom: 2,
              }}>{s.big}</div>

              <div style={{
                fontFamily: BV, fontWeight: 800, fontSize: 12.5,
                color: '#0F172A', textTransform: 'uppercase',
                letterSpacing: '0.06em', marginBottom: 6,
              }}>{s.unit}</div>

              <div style={{
                fontFamily: BV, fontSize: 12, color: '#64748B',
                lineHeight: 1.5,
              }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* 4 Investor Reasons — horizontal pills */}
        <div ref={msgRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} bg-[#F8FAFC] border border-[#E2E8F0]
                rounded-xl px-4 py-3.5 hover:border-[#2563EB]/30 transition-colors`}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5,
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: ['#2563EB','#7C3AED','#059669','#EA580C'][i],
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: BV, fontWeight: 800, fontSize: 13,
                  color: '#0F172A',
                }}>{m.text}</span>
              </div>
              <p style={{
                fontFamily: BV, fontSize: 12, color: '#64748B',
                lineHeight: 1.55, margin: 0,
              }}>{m.sub}</p>
            </div>
          ))}
        </div>

        <ScrollNext href="#cong-nghe" />
      </div>
    </section>
  );
}
