import { useState, useEffect } from 'react';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

/* ─── Stat Cards ──────────────────────────────────────────────── */
const CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 8v1h20V8L12 3zM4 10v8h2V12h12v6h2v-8H4zm4 2h2v4H8v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z" />
      </svg>
    ),
    accent: '#9333EA', bg: 'rgba(147,51,234,0.10)',
    primary: 'NGUỒN TRƯỜNG', primaryColor: '#111827',
    secondary: '200+ Trường', secondaryColor: '#9333EA',
    flip: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z" />
      </svg>
    ),
    accent: '#2563EB', bg: 'rgba(37,99,235,0.10)',
    primary: 'VỐN ĐẦU TƯ', primaryColor: '#111827',
    secondary: 'Chỉ từ 100TR', secondaryColor: '#2563EB',
    flip: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 22 8.5 12 15 2 8.5" />
        <path d="M6 11.5V17l6 3 6-3v-5.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    accent: '#059669', bg: 'rgba(5,150,105,0.10)',
    primary: '10 Trường', primaryColor: '#059669',
    secondary: 'Khởi điểm', secondaryColor: '#059669',
    flip: true, /* value on top */
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" opacity="0.6" />
      </svg>
    ),
    accent: '#EA580C', bg: 'rgba(234,88,12,0.10)',
    primary: 'LỢI NHUẬN', primaryColor: '#111827',
    secondary: 'Lên tới 1,4 tỷ/năm', secondaryColor: '#0EA5E9',
    flip: false,
  },
];

export default function HeroStory({ id = 'hero' }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-hero relative isolate overflow-hidden flex flex-col"
      style={{ paddingTop: 76 }}
    >
      <div
        className="landing-hero-shell flex-1 w-full max-w-[1360px] mx-auto px-4 lg:px-6 xl:px-8 flex items-center"
      >
        <div
          className="landing-hero-copy"
          style={{
            maxWidth: 'min(45%, 520px)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
            marginTop: 18,
          }}
        >
          {/* ── H1 (Playfair Display – nghệ thuật) ── */}
          <h1 className="landing-hero-title" style={{
            fontFamily: PD,
            fontWeight: 600,
            fontSize: 'clamp(36px, 3.6vw, 48px)',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            color: '#0F172A',
            margin: '0 0 18px',
          }}>
            Chỉ từ{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              100 triệu
            </span>
            ,<br />
            sở hữu mô hình<br />
            khai thác trường học<br />
            cùng Keytech.
          </h1>

          {/* ── Decorative Divider ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 0 22px', width: '100%' }}>
            <div style={{ height: '2.5px', background: '#3B82F6', flex: 1 }} />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#3B82F6" style={{ flexShrink: 0 }}>
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
            </svg>
            <div style={{ height: '2.5px', background: '#3B82F6', flex: 1 }} />
          </div>

          {/* ── Sub-headline & Description ── */}
          <div className="landing-hero-subtitle" style={{
            fontFamily: BV,
            fontWeight: 700,
            fontSize: 19.5,
            color: '#2563EB',
            margin: '0 0 32px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Cơ hội đầu tư &amp; Nhượng quyền
          </div>


          {/* ── 4 Stat Items ── */}
          <div className="landing-hero-stats" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            marginTop: 0,
            marginBottom: 8,
            width: '100%',
          }}>
            {CARDS.map((c, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 6,
                  padding: '6px 8px',
                  position: 'relative',
                  borderRight: i < CARDS.length - 1 ? '1.5px solid rgba(226, 232, 240, 0.95)' : 'none',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: c.bg, color: c.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  marginBottom: 2,
                }}>
                  {c.icon}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 1.5, textAlign: 'center', minWidth: 0 }}>
                  {c.flip ? (
                    <>
                      <div className="numeric-display" style={{ fontWeight: 800, fontSize: 18.5, color: c.primaryColor, lineHeight: 1.15 }}>{c.primary}</div>
                      <div style={{ fontFamily: BV, fontWeight: 500, fontSize: 15.5, color: c.secondaryColor, lineHeight: 1.15 }}>{c.secondary}</div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontFamily: BV, fontWeight: 700, fontSize: 14.5, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1.15 }}>{c.primary}</div>
                      <div className="numeric-display" style={{ fontWeight: 800, fontSize: 18.5, color: c.secondaryColor, lineHeight: 1.15 }}>{c.secondary}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pb-3 flex justify-center">
        <ScrollNext href="#cong-nghe" />
      </div>
    </section>
  );
}
