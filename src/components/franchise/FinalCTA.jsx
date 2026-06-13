import { useFadeUp } from '../../hooks/useFadeUp';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const TRUST = [
  { value: '250+', label: 'Trường đã chạy' },
  { value: '70%', label: 'Doanh thu của bạn' },
  { value: '5 năm', label: 'Bảo hành thiết bị' },
];

export default function FinalCTA({ id = 'lien-he' }) {
  const leftRef = useFadeUp();
  const cardRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-cta bg-tech-grid border-t border-slate-900 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Visual glow blobs */}
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-sky-300/20 blur-[100px]" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-cyan-300/18 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-white">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT: Text & Trust metrics */}
          <div ref={leftRef} className="fade-up">
            <span style={{
              fontFamily: BV, fontSize: 13, fontWeight: 800,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#38BDF8',
              display: 'block', marginBottom: 12,
            }}>
              Đăng ký hợp tác
            </span>
            <h2 style={{
              fontFamily: PD, fontWeight: 600,
              fontSize: 'clamp(28px, 3vw, 42px)',
              color: '#fff', lineHeight: 1.2,
              letterSpacing: '-0.02em', margin: '0 0 20px',
            }}>
              Cùng Keytech mở thị trường của bạn
            </h2>
            <p style={{
              fontFamily: BV, fontSize: '16px', color: '#94A3B8',
              maxWidth: '540px', lineHeight: 1.6, marginBottom: 28,
            }}>
              Gọn đủ: hồ sơ, chính sách, kịch bản tư vấn.
            </p>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mb-8">
              {TRUST.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl
                    flex flex-col items-center justify-center text-center p-4
                    hover:border-[#38BDF8]/40 transition-all duration-300"
                >
                  <div
                    className="numeric-display"
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#38BDF8',
                      lineHeight: 1
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: BV,
                      fontSize: '13px',
                      color: '#94A3B8',
                      fontWeight: 600,
                      marginTop: 6
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scarcity / Rules */}
            <div className="space-y-3">
              {[
                'Ưu tiên người có kết nối trường học.',
                'Keytech đồng hành khảo sát và kỹ thuật.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 border border-cyan-300/25">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#67E8F9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{
                    fontFamily: BV,
                    fontSize: '15px',
                    color: '#CBD5E1',
                    lineHeight: 1.4
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Action & Contact card */}
          <aside
            ref={cardRef}
            className="fade-up fade-up-delay-2 bg-slate-900/60 backdrop-blur-md rounded-3xl
              border border-white/10 p-8 flex flex-col relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-300 to-cyan-300" />

            <div style={{
              fontFamily: BV,
              fontSize: '13px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#38BDF8',
              marginBottom: 8
            }}>
              Kết nối cùng chúng tôi
            </div>
            <h3 style={{
              fontFamily: PD,
              fontSize: '22px',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.3,
              marginBottom: 10
            }}>
              Nhận hồ sơ hợp tác
            </h3>
            <p style={{
              fontFamily: BV,
              fontSize: '15px',
              color: '#94A3B8',
              lineHeight: 1.5,
              marginBottom: 24
            }}>
              Gọn đủ: hồ sơ, chính sách, kịch bản tư vấn.
            </p>

            {/* Contact links */}
            <div className="space-y-3 mb-6">
              {[
                {
                  label: 'Hotline tư vấn',
                  value: '0386 100 833',
                  href: 'tel:0386100833',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
                    </svg>
                  ),
                },
                {
                  label: 'Email hỗ trợ',
                  value: 'info@keytechai.com',
                  href: 'mailto:info@keytechai.com?subject=Dang ky nhan ho so hop tac Keytech',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.9 5.7a2 2 0 0 1-2.2 0L2 7" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4
                    hover:border-blue-400 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/10 text-blue-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <span>
                    <span style={{
                      fontFamily: BV,
                      display: 'block',
                      fontSize: '12.5px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#94A3B8'
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: BV,
                      display: 'block',
                      fontSize: '14.5px',
                      fontWeight: 800,
                      color: '#fff',
                      marginTop: 2
                    }}>
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-white/5 border border-white/5 p-4 mb-6">
              <div style={{
                fontFamily: BV,
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#38BDF8',
                marginBottom: 4
              }}>
                Trụ sở chính
              </div>
              <p style={{
                fontFamily: BV,
                fontSize: '14.5px',
                color: '#CBD5E1',
                lineHeight: 1.5
              }}>
                LK621-DV14, Khu dịch vụ Đào Đất, Hàng Bè, Kiến Hưng, Hà Đông, Hà Nội
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/CSĐL NHẬN QUYỀN VNS VNS_06_2026_CHINH_THUC.pdf"
                download="CSĐL NHẬN QUYỀN VNS VNS_06_2026_CHINH_THUC.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-white text-[15px] font-bold"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                  fontFamily: BV,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1v9M4 7l3.5 3.5L11 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Tải chính sách
              </a>
              <a
                href="tel:0386100833"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5
                  bg-white/10 border border-white/15 text-white hover:text-blue-400
                  hover:border-blue-400 rounded-full text-[15px] font-bold
                  transition-all duration-200 hover:bg-white/20"
                style={{
                  fontFamily: BV,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
                </svg>
                Gọi tư vấn
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
