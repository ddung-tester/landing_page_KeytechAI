import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const TIERS = [
  {
    tag: 'Khởi đầu',
    capital: '~100 triệu',
    schools: '1 trường',
    cameras: '6 camera',
    revenue: '~140 triệu/năm',
    accent: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    featured: false,
  },
  {
    tag: 'Chuẩn',
    capital: '~1 tỷ',
    schools: '10 trường',
    cameras: '60 camera',
    revenue: '~1,4 tỷ/năm',
    accent: '#7C3AED',
    bg: 'linear-gradient(135deg,#F5F3FF,#EDE9FE)',
    border: '#A78BFA',
    featured: true,
  },
  {
    tag: 'Mở rộng',
    capital: '~3 tỷ',
    schools: '30 trường',
    cameras: '180 camera',
    revenue: '~4,2 tỷ/năm',
    accent: '#059669',
    bg: '#F0FDF4',
    border: '#6EE7B7',
    featured: false,
  },
];

const BREAKDOWN = [
  { label: 'Camera AI (60 cam)', pct: 60, value: '~600 triệu' },
  { label: 'Phần mềm', pct: 15, value: '~150 triệu' },
  { label: 'Lắp đặt', pct: 12, value: '~120 triệu' },
  { label: 'Đào tạo', pct: 13, value: '~130 triệu' },
];

export default function InvestmentScale({ id = 'quy-mo' }) {
  const titleRef = useFadeUp();
  const tiersRef = useFadeUpChildren(0.1);
  const rightRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-investment border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="glow-blob glow-purple -left-20 bottom-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div ref={titleRef} className="fade-up mb-9">
          <span style={{
            fontFamily: BV, fontSize: 12.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#7C3AED', display: 'block', marginBottom: 8,
          }}>
            Quy mô đầu tư
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 600,
            fontSize: 'clamp(22px, 2.4vw, 36px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 0 8px',
          }}>
            Bắt đầu gọn, mở rộng bền
          </h2>
          <p style={{ fontFamily: BV, fontSize: 15.5, color: '#64748B', lineHeight: 1.65 }}>
            Chọn quy mô vừa sức. Lớn dần, chắc dần.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">

          {/* LEFT: Investment Tiers */}
          <div ref={tiersRef} className="space-y-4">
            {TIERS.map((t, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} rounded-2xl p-5 relative overflow-hidden
                  transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
                style={{
                  background: typeof t.bg === 'string' && t.bg.startsWith('linear') ? t.bg : t.bg,
                  border: `${t.featured ? 2 : 1}px solid ${t.border}`,
                  boxShadow: t.featured ? `0 8px 32px ${t.accent}22` : undefined,
                }}
              >
                {t.featured && (
                  <div style={{
                    position: 'absolute', top: 12, right: 14,
                    padding: '3px 10px', borderRadius: 100,
                    background: t.accent, color: '#fff',
                    fontFamily: BV, fontSize: 12, fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    Phổ biến nhất
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {/* Capital */}
                  <div style={{ minWidth: 110 }}>
                    <div style={{
                      fontFamily: PD, fontWeight: 700,
                      fontSize: 26, color: t.accent, lineHeight: 1,
                    }}>{t.capital}</div>
                    <div style={{
                      fontFamily: BV, fontSize: 13, fontWeight: 700,
                      color: '#64748B', letterSpacing: '0.08em',
                      textTransform: 'uppercase', marginTop: 2,
                    }}>vốn đầu tư</div>
                  </div>

                  {/* Divider */}
                  <div style={{ width: 1, height: 40, background: `${t.accent}25` }} />

                  {/* Details */}
                  <div className="flex gap-6 flex-1">
                    {[
                      { v: t.schools, l: 'Trường' },
                      { v: t.cameras, l: 'Camera' },
                    ].map((d, j) => (
                      <div key={j}>
                        <div style={{
                          fontFamily: BV, fontWeight: 800, fontSize: 18, color: '#0F172A',
                        }}>{d.v}</div>
                        <div style={{ fontFamily: BV, fontSize: 13, color: '#94A3B8' }}>{d.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Revenue */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: BV, fontWeight: 900,
                      fontSize: 18, color: t.accent,
                    }}>{t.revenue}</div>
                    <div style={{ fontFamily: BV, fontSize: 13, color: '#94A3B8' }}>
                      doanh thu ước tính
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Note */}
            <div style={{
              background: '#FFF7ED', border: '1px solid #FED7AA',
              borderRadius: 12, padding: '10px 14px',
            }}>
              <p style={{ fontFamily: BV, fontSize: 14, color: '#92400E', margin: 0 }}>
                <strong>Lưu ý:</strong> Số liệu tham khảo. Keytech sẽ cùng bạn tính kỹ hơn.
              </p>
            </div>
          </div>

          {/* RIGHT: Capital breakdown */}
          <div ref={rightRef} className="fade-up fade-up-delay-2">
            <div className="bg-white rounded-2xl border border-[#DBEAFE] shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="bg-gradient-to-r from-[#1D4ED8] to-[#7C3AED] px-6 py-4">
                <div style={{
                  fontFamily: BV, fontSize: 12, fontWeight: 800,
                  letterSpacing: '0.18em', color: '#BFD8FF',
                  textTransform: 'uppercase', marginBottom: 4,
                }}>Cơ cấu vốn — Gói 10 trường</div>
                <div style={{
                  fontFamily: PD, fontWeight: 600,
                  fontSize: 22, color: '#fff',
                }}>~1 tỷ đồng</div>
              </div>

              <div className="p-5 space-y-4">
                {BREAKDOWN.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span style={{ fontFamily: BV, fontSize: 14.5, color: '#374151', fontWeight: 500 }}>
                        {item.label}
                      </span>
                      <span style={{
                        fontFamily: BV, fontSize: 18, fontWeight: 800, color: '#1D4ED8',
                      }}>{item.value}</span>
                    </div>
                    <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#7C3AED]"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* ROI highlight */}
                <div style={{
                  marginTop: 16, paddingTop: 16,
                  borderTop: '1px solid #F1F5F9',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)',
                    border: '1px solid #BBF7D0',
                    borderRadius: 12, padding: '12px 14px',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div>
                      <div style={{
                        fontFamily: BV, fontSize: 12, fontWeight: 800,
                        letterSpacing: '0.14em', color: '#059669',
                        textTransform: 'uppercase',
                      }}>Doanh thu đối tác (70%)</div>
                      <div style={{
                        fontFamily: PD, fontWeight: 700,
                        fontSize: 22, color: '#059669', marginTop: 2,
                      }}>~1,4 tỷ / năm</div>
                    </div>
                    <div style={{
                      fontFamily: BV, fontWeight: 900, fontSize: 28,
                      color: '#059669',
                    }}>↑</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollNext href="#doanh-thu" />
      </div>
    </section>
  );
}
