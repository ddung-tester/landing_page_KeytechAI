import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const METRICS = [
  { val: '100+', label: 'Trường thực tế', color: '#2563EB' },
  { val: '5 năm', label: 'Bảo hành', color: '#7C3AED' },
  { val: 'A–Z', label: 'Hỗ trợ đầy đủ', color: '#0EA5E9' },
  { val: '70/30', label: 'Chia minh bạch', color: '#059669' },
];

const PROOF = [
  'Camera AI nhận diện tự động, chính xác tuyệt đối >99%.',
  'Phần mềm quản lý & ứng dụng di động đồng bộ.',
  'Báo cáo doanh thu và đối soát tài chính minh bạch.',
  'Bàn giao quy trình và vận hành trọn gói trong 30 ngày.',
];

export default function KeytechProof({ id = 'keytech' }) {
  const titleRef = useFadeUp();
  const leftRef = useFadeUpChildren(0.08);
  const rightRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-proof border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="glow-blob glow-blue -left-20 -top-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div>
            <div ref={titleRef} className="fade-up mb-7">
              <span style={{
                fontFamily: BV, fontSize: 10.5, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#2563EB', display: 'block', marginBottom: 8,
              }}>Vì sao chọn Keytech</span>
              <h2 style={{
                fontFamily: PD, fontWeight: 800,
                fontSize: 'clamp(22px, 2.4vw, 36px)',
                color: '#0F172A', lineHeight: 1.22,
                letterSpacing: '-0.02em', margin: '0 0 10px',
              }}>
                Không bán ý tưởng —{' '}
                <span style={{ color: '#2563EB', fontStyle: 'italic' }}>
                  chuyển giao mô hình thực chiến
                </span>
              </h2>

            </div>

            {/* Proof list */}
            <div ref={leftRef} className="space-y-3">
              {PROOF.map((item, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${i + 1} flex items-start gap-3
                    bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3
                    hover:border-[#2563EB]/30 transition-colors`}
                >
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: '#DBEAFE', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{
                    fontFamily: BV, fontSize: 13, fontWeight: 500,
                    color: '#374151', lineHeight: 1.5,
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div ref={rightRef} className="fade-up fade-up-delay-2">

            {/* 4 metrics */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {METRICS.map((m, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: 16,
                  boxShadow: '0 4px 18px rgba(15,23,42,0.05)',
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,23,42,0.10)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(15,23,42,0.05)';
                  }}
                >
                  <div style={{
                    fontFamily: PD, fontWeight: 900,
                    fontSize: 'clamp(28px, 3vw, 36px)',
                    color: m.color, lineHeight: 1,
                  }}>{m.val}</div>
                  <div style={{
                    fontFamily: BV, fontSize: 12, color: '#64748B',
                    fontWeight: 500, marginTop: 6,
                  }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.10)]">
              <img
                src="/assets/lắp đặt tại sân trường.jpg"
                alt="Camera AI triển khai thực tế tại trường học"
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
              <div style={{
                background: '#F8FAFC', borderTop: '1px solid #E2E8F0',
                padding: '12px 16px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#059669', flexShrink: 0,
                  animation: 'pulse 2s infinite',
                }} />
                <div>
                  <div style={{
                    fontFamily: BV, fontSize: 10, fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: '0.14em', color: '#059669',
                  }}>Hình ảnh thực tế</div>
                  <div style={{
                    fontFamily: BV, fontSize: 12, color: '#475569', fontWeight: 500,
                  }}>Hệ thống Camera AI lắp đặt thực tế tại sân trường</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollNext href="#lo-trinh" />
      </div>
    </section>
  );
}
