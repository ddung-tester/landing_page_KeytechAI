import { useFadeUp } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const SCALE = [
  { schools: '10 trường', partner: '~1,4 tỷ', note: 'năm học' },
  { schools: '20 trường', partner: '~2,8 tỷ', note: 'năm học' },
  { schools: '30 trường', partner: '~4,2 tỷ', note: 'năm học' },
  { schools: '50 trường', partner: '~7,0 tỷ', note: 'năm học' },
];

const FLOW = [
  { num: '01', label: 'Đầu tư & ký kết', color: '#2563EB' },
  { num: '02', label: 'Keytech triển khai', color: '#7C3AED' },
  { num: '03', label: 'Thu phí định kỳ', color: '#0EA5E9' },
  { num: '04', label: 'Chia 70 / 30', color: '#059669' },
];

export default function RevenueModel({ id = 'doanh-thu' }) {
  const titleRef = useFadeUp();
  const leftRef = useFadeUp();
  const rightRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-revenue border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="glow-blob glow-emerald -right-20 -top-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-9">
          <span style={{
            fontFamily: BV, fontSize: 10.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#059669', display: 'block', marginBottom: 8,
          }}>
            Mô hình doanh thu
          </span>
          <h2 style={{
            fontFamily: PD, fontWeight: 800,
            fontSize: 'clamp(22px, 2.4vw, 36px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 0 8px',
          }}>
            Đầu tư một lần —{' '}
            <span style={{ color: '#059669', fontStyle: 'italic' }}>thu mãi mãi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-stretch">

          {/* LEFT: Big 70% + Revenue per school */}
          <div ref={leftRef} className="fade-up flex flex-col gap-4">

            {/* 70/30 Hero */}
            <div className="bg-white rounded-2xl border border-[#DDD6FE] shadow-[0_8px_32px_rgba(124,58,237,0.07)] overflow-hidden flex-shrink-0">
              <div style={{
                height: 4,
                background: 'linear-gradient(to right,#7C3AED,#2563EB,#0EA5E9)',
              }} />
              <div className="p-6">
                <div style={{
                  fontFamily: BV, fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#7C3AED', marginBottom: 12,
                }}>Tỷ lệ chia doanh thu</div>

                {/* Bar */}
                <div style={{
                  height: 14, borderRadius: 100, overflow: 'hidden',
                  background: '#F1F5F9', display: 'flex', marginBottom: 12,
                }}>
                  <div style={{
                    width: '70%', height: '100%',
                    background: 'linear-gradient(to right,#7C3AED,#2563EB)',
                  }} />
                  <div style={{ width: '30%', height: '100%', background: '#BFDBFE' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: 12 }}>
                  <div style={{
                    background: 'linear-gradient(135deg,#F5F3FF,#EDE9FE)',
                    border: '1px solid #DDD6FE',
                    borderRadius: 14, padding: '16px 20px',
                  }}>
                    <div style={{
                      fontFamily: PD, fontWeight: 900,
                      fontSize: 48, color: '#7C3AED', lineHeight: 1,
                    }}>70%</div>
                    <div style={{
                      fontFamily: BV, fontSize: 12, fontWeight: 700,
                      color: '#7C3AED', marginTop: 4,
                    }}>Về tay Đối tác</div>
                  </div>
                  <div style={{
                    background: '#EEF6FF',
                    border: '1px solid #BFDBFE',
                    borderRadius: 14, padding: '16px 12px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      fontFamily: PD, fontWeight: 900,
                      fontSize: 32, color: '#1D4ED8', lineHeight: 1,
                    }}>30%</div>
                    <div style={{
                      fontFamily: BV, fontSize: 11, fontWeight: 700,
                      color: '#1D4ED8', marginTop: 4, textAlign: 'center',
                    }}>Keytech</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Per-school revenue */}
            <div style={{
              background: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)',
              border: '1px solid #BBF7D0',
              borderRadius: 16, padding: '18px 20px',
            }}>
              <div style={{
                fontFamily: BV, fontSize: 10, fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#059669', marginBottom: 10,
              }}>Ví dụ: 1 trường / 1.000 học sinh</div>

              {[
                { l: 'Doanh thu tham chiếu / năm', v: '200.000.000đ' },
                { l: 'Đối tác thực nhận (70%)', v: '140.000.000đ', accent: true },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '6px 0',
                  borderBottom: i < 1 ? '1px solid rgba(5,150,105,0.1)' : 'none',
                }}>
                  <span style={{
                    fontFamily: BV, fontSize: 12.5,
                    color: row.accent ? '#0F172A' : '#4B5563',
                    fontWeight: row.accent ? 700 : 400,
                  }}>{row.l}</span>
                  <span style={{
                    fontFamily: BV, fontSize: 13, fontWeight: 800,
                    color: row.accent ? '#059669' : '#0F172A',
                  }}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Scale table + Flow */}
          <div ref={rightRef} className="fade-up fade-up-delay-2 flex flex-col gap-4">

            {/* Scale table */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_18px_rgba(15,23,42,0.05)] overflow-hidden flex-1">
              <div style={{
                background: 'linear-gradient(to right,#059669,#22C55E)',
                padding: '14px 20px',
              }}>
                <div style={{
                  fontFamily: BV, fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#BBF7D0', marginBottom: 2,
                }}>Thu nhập đối tác theo danh mục</div>
                <div style={{
                  fontFamily: PD, fontWeight: 800, fontSize: 18, color: '#fff',
                }}>Nhân lên không giới hạn</div>
              </div>
              <div className="p-4">
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '1px', background: '#F1F5F9',
                  borderRadius: 10, overflow: 'hidden',
                }}>
                  {SCALE.map((s, i) => (
                    <div key={i} style={{
                      background: '#fff', padding: '14px 16px',
                      textAlign: 'center',
                    }}>
                      <div style={{
                        fontFamily: PD, fontWeight: 800,
                        fontSize: 22, color: '#059669',
                      }}>{s.partner}</div>
                      <div style={{
                        fontFamily: BV, fontSize: 11.5, fontWeight: 700,
                        color: '#0F172A', marginTop: 2,
                      }}>{s.schools}</div>
                      <div style={{
                        fontFamily: BV, fontSize: 10.5, color: '#94A3B8',
                      }}>/ {s.note}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Investment flow */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_18px_rgba(15,23,42,0.04)] p-5">
              <div style={{
                fontFamily: BV, fontSize: 10, fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#2563EB', marginBottom: 14,
              }}>Dòng chảy đầu tư</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {FLOW.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: f.color, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: BV, fontWeight: 900, fontSize: 13,
                        margin: '0 auto 6px',
                      }}>{f.num}</div>
                      <div style={{
                        fontFamily: BV, fontSize: 11.5, fontWeight: 600,
                        color: '#374151', lineHeight: 1.3,
                      }}>{f.label}</div>
                    </div>
                    {i < FLOW.length - 1 && (
                      <div style={{
                        width: 20, height: 2, background: '#E2E8F0',
                        flexShrink: 0,
                      }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ScrollNext href="#keytech" />
      </div>
    </section>
  );
}
