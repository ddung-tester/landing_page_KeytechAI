import { useFadeUp } from '../../hooks/useFadeUp';

const TRUST_ITEMS = [
  { value: '250+', label: 'Trường đã triển khai' },
  { value: '25.000+', label: 'Trường học toàn quốc' },
  { value: '5 năm', label: 'Bảo hành camera AI' },
];

const CONTACT_ITEMS = [
  {
    label: 'Hotline tư vấn',
    value: '0386 100 833',
    href: 'tel:0386100833',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
      </svg>
    ),
  },
  {
    label: 'Email liên hệ',
    value: 'info@keytechai.com',
    href: 'mailto:info@keytechai.com?subject=Keytech AI - Dang ky nhan ho so hop tac',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.9 5.7a2 2 0 0 1-2.2 0L2 7" />
      </svg>
    ),
  },
];

export default function FinalCTA({ id = 'lien-he' }) {
  const leftRef = useFadeUp();
  const cardRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section page-auth border-t border-[#E2E8F0] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-center">
          <div ref={leftRef} className="fade-up">
            <div className="section-header">
              <span className="section-eyebrow" style={{ color: '#1E3A8A' }}>Liên hệ hợp tác</span>
              <h2 className="section-title">
                Sẵn sàng mở thị trường Camera AI trường học tại khu vực của bạn?
              </h2>
              <p className="section-desc">
                Nhận hồ sơ hợp tác, tư vấn danh mục trường tiềm năng và kế hoạch triển khai phù hợp với địa phương.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-[620px]">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="card-standard flex flex-col justify-center"
                  style={{
                    '--card-border': '#E2E8F0',
                    '--card-hover-border': '#1E3A8A'
                  }}
                >
                  <div className="text-[24px] sm:text-[28px] font-black text-[#1E3A8A] leading-none">{item.value}</div>
                  <div className="text-[11px] text-[#64748B] font-semibold mt-2 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside
            ref={cardRef}
            className="fade-up fade-up-delay-2 card-standard flex flex-col"
            style={{
              '--card-border': '#E2E8F0',
              '--card-hover-border': '#A855F7'
            }}
          >
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#7C3AED] mb-2">
              Nhận bộ tài liệu pitch
            </div>
            <h3 className="text-[24px] font-black text-[#0F172A] leading-tight mb-5">
              Hồ sơ hợp tác & phương án triển khai
            </h3>

            <div className="space-y-4 mb-6">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-lg border border-[#E2E8F0] px-4 py-4 hover:border-[#A855F7] hover:bg-[#FAF5FF] transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-[11px] font-black uppercase tracking-wider text-[#64748B]">{item.label}</span>
                    <span className="block text-[15px] font-extrabold text-[#0F172A] mt-0.5 break-all">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-4 mb-5">
              <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#1E3A8A] mb-1">Trụ sở chính</div>
              <p className="text-[13px] text-[#334155] font-semibold leading-relaxed">
                LK621-DV14, Khu dịch vụ Đào Đất, Hàng Bè, Kiến Hưng, Hà Đông, Hà Nội
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/CS%C4%90L%20NH%E1%BA%ACN%20QUY%E1%BB%80N%20VNS%20VNS_06_2026_CHINH_THUC.pdf"
                download="CSĐL NHẬN QUYỀN VNS VNS_06_2026_CHINH_THUC.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 btn-brand-primary text-white text-[13.5px] font-bold text-center"
              >
                Nhận hồ sơ
              </a>
              <a
                href="tel:0386100833"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#E2E8F0] text-[#334155] hover:text-[#0F172A] hover:border-[#94A3B8] rounded-full text-[13.5px] font-bold text-center transition-colors"
              >
                Gọi tư vấn
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
