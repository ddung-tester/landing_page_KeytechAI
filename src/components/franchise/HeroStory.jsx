import { useState, useEffect } from 'react';
import ScrollNext from './ScrollNext';
import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

function anchor(e, sel) {
  e.preventDefault();
  const el = document.querySelector(sel);
  if (el) scrollToLandingTarget(el);
}

/* ─── Stat Cards ──────────────────────────────────────────────── */
const CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 8v1h20V8L12 3zM4 10v8h2V12h12v6h2v-8H4zm4 2h2v4H8v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z"/>
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
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z"/>
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
        <polygon points="12 2 22 8.5 12 15 2 8.5"/>
        <path d="M6 11.5V17l6 3 6-3v-5.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
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
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z" opacity="0.6"/>
      </svg>
    ),
    accent: '#EA580C', bg: 'rgba(234,88,12,0.10)',
    primary: 'LỢI NHUẬN', primaryColor: '#111827',
    secondary: 'Chia sẻ 70/30', secondaryColor: '#EA580C',
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
    >
      <div
        className="flex-1 w-full max-w-[1440px] mx-auto flex items-center"
        style={{ padding: '0 clamp(24px, 4vw, 72px)' }}
      >
        <div
          style={{
            maxWidth: 'min(56%, 780px)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          {/* ── Badge ── */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '5px 15px', borderRadius: 100,
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.65)',
            boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
            marginBottom: 14,
            fontFamily: BV, fontSize: 10.5, fontWeight: 700,
            letterSpacing: '0.13em', textTransform: 'uppercase',
            color: '#374151',
          }}>
            🚀 Cơ hội đầu tư &amp; Nhượng quyền khai thác
          </div>

          {/* ── H1 (Playfair Display – nghệ thuật) ── */}
          <h1 style={{
            fontFamily: PD,
            fontWeight: 800,
            fontSize: 'clamp(26px, 2.6vw, 42px)',
            lineHeight: 1.22,
            letterSpacing: '-0.01em',
            color: '#0F172A',
            margin: '0 0 12px',
          }}>
            Chỉ từ{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F97316 20%, #DC2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              100 triệu
            </span>
            , sở hữu mô hình&#8203;<br />
            khai thác trường học cùng Keytech.
          </h1>

          {/* ── Sub text ── */}
          <p style={{
            fontFamily: BV,
            fontSize: 'clamp(12px, 0.9vw, 13.5px)',
            color: '#4B5563',
            lineHeight: 1.75,
            margin: '0 0 18px',
            maxWidth: 460,
          }}>
            Sở hữu mô hình kinh doanh bền vững với giải pháp Camera AI nhận diện khuôn mặt. Bàn giao trọn gói công nghệ và hỗ trợ đại lý suốt quá trình vận hành.
          </p>

          {/* ── 4 Stat Cards ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 8,
            marginBottom: 14,
          }}>
            {CARDS.map((c, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  textAlign: 'center', gap: 5,
                  padding: '12px 8px', borderRadius: 14,
                  background: 'rgba(255,255,255,0.76)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.68)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  minHeight: 100,
                  cursor: 'default',
                  transition: 'transform 0.18s, box-shadow 0.18s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.11)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: c.bg, color: c.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {c.icon}
                </div>

                {c.flip ? (
                  <>
                    <div style={{ fontFamily: BV, fontWeight: 800, fontSize: 15, color: c.primaryColor, lineHeight: 1.1 }}>{c.primary}</div>
                    <div style={{ fontFamily: BV, fontWeight: 500, fontSize: 10.5, color: c.secondaryColor, lineHeight: 1.2 }}>{c.secondary}</div>
                  </>
                ) : (
                  <>
                    <div style={{ fontFamily: BV, fontWeight: 800, fontSize: 11.5, color: c.primaryColor, lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.03em' }}>{c.primary}</div>
                    <div style={{ fontFamily: BV, fontWeight: 700, fontSize: 13, color: c.secondaryColor, lineHeight: 1.1 }}>{c.secondary}</div>
                  </>
                )}
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
