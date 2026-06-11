import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const METRICS = [
  { val: '100+', label: 'Trường đã chạy', color: '#2563EB' },
  { val: '5 năm', label: 'Bảo hành', color: '#7C3AED' },
  { val: 'A–Z', label: 'Đồng hành', color: '#0EA5E9' },
  { val: '70/30', label: 'Chia minh bạch', color: '#059669' },
];

const PROOF = [
  'Camera AI nhận diện nhanh, chính xác.',
  'Phần mềm và app đồng bộ.',
  'Doanh thu đối soát rõ ràng.',
  'Bàn giao gọn trong 30 ngày.',
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

        <div ref={titleRef} className="fade-up text-center mb-9">
          <span style={{
            fontFamily: BV, fontSize: 10.5, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#2563EB', display: 'block', marginBottom: 8,
          }}>Vì sao chọn Keytech</span>
          <h2 style={{
            fontFamily: PD, fontWeight: 800,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.18,
            letterSpacing: '-0.02em', margin: '0 auto',
            maxWidth: 760,
          }}>
            Mô hình thật, triển khai thật
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-6 lg:gap-8 items-stretch">

          {/* LEFT: Photo */}
          <div ref={rightRef} className="fade-up fade-up-delay-1">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-[#D8E2F0] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <img
                src="/assets/lắp đặt tại sân trường.jpg"
                alt="Camera AI triển khai thực tế tại trường học"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-100 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Hình ảnh thực tế
                </div>
                <div style={{ fontFamily: PD }} className="text-[24px] font-extrabold leading-tight">
                  Camera AI tại trường học
                </div>
                <p className="mt-1 max-w-[520px] text-[13px] leading-relaxed text-slate-200">
                  Lắp đặt gọn, vận hành ổn, nhà trường dễ làm quen.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className={`fade-up fade-up-delay-${i + 1} rounded-2xl border border-[#E2E8F0] bg-white px-5 py-5 text-center shadow-[0_6px_20px_rgba(15,23,42,0.045)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(15,23,42,0.08)]`}
                >
                  <div style={{
                    fontFamily: PD, fontWeight: 900,
                    fontSize: 'clamp(28px, 3vw, 38px)',
                    color: m.color, lineHeight: 1,
                  }}>{m.val}</div>
                  <div style={{
                    fontFamily: BV, fontSize: 12, color: '#64748B',
                    fontWeight: 600, marginTop: 7,
                  }}>{m.label}</div>
                </div>
              ))}
            </div>

            <div ref={leftRef} className="grid gap-3 rounded-3xl border border-[#D8E2F0] bg-white/80 p-4 shadow-[0_8px_28px_rgba(15,23,42,0.045)] backdrop-blur">
              {PROOF.map((item, i) => (
                <div
                  key={item}
                  className={`fade-up fade-up-delay-${i + 1} flex items-center gap-3 rounded-2xl bg-[#F8FAFC] px-4 py-3.5`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#1D4ED8]">
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{
                    fontFamily: BV, fontSize: 13.5, fontWeight: 600,
                    color: '#334155', lineHeight: 1.45,
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollNext href="#lo-trinh" />
      </div>
    </section>
  );
}
