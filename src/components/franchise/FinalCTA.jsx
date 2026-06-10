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

const SCARCITY_ITEMS = [
  'Giới hạn 1–2 đối tác mỗi tỉnh/thành',
  'Ưu tiên đối tác có sẵn mối quan hệ trường học',
  'Hỗ trợ onboarding trong 30 ngày đầu',
];

export default function FinalCTA({ id = 'lien-he' }) {
  const leftRef = useFadeUp();
  const cardRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section page-home border-t border-[#E5E7EB] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">

          {/* LEFT — Emotional headline + proof */}
          <div ref={leftRef} className="fade-up">
            <div className="section-header">
              <span className="section-eyebrow" style={{ color: '#1E3A8A' }}>ĐĂNG KÝ HỢP TÁC</span>
              <h2 className="section-title">
                Khu vực của bạn đang chờ — đừng để người khác đến trước
              </h2>
              <p className="section-desc">
                Chúng tôi giới hạn số lượng đối tác mỗi khu vực để đảm bảo chất lượng đồng hành.
                Nếu bạn đang đọc trang này, cơ hội vẫn còn mở tại địa phương bạn.
              </p>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-3 max-w-[520px] mb-6">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="card-standard flex flex-col justify-center text-center"
                  style={{
                    '--card-border': '#E2E8F0',
                    '--card-hover-border': '#1E3A8A',
                  }}
                >
                  <div className="text-[22px] sm:text-[26px] font-black text-[#1E3A8A] leading-none">{item.value}</div>
                  <div className="text-[10.5px] text-[#64748B] font-semibold mt-1.5 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Scarcity signals */}
            <div className="space-y-2">
              {SCARCITY_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-medium text-[#374151] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact card */}
          <aside
            ref={cardRef}
            className="fade-up fade-up-delay-2 card-standard flex flex-col relative overflow-hidden"
            style={{
              '--card-border': '#E2E8F0',
              '--card-hover-border': '#3B82F6',
            }}
          >
            {/* Top gradient bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0EA5E9]" />

            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#2563EB] mb-2 mt-1">
              Nhận bộ tài liệu pitch
            </div>
            <h3 className="text-[22px] font-black text-[#0F172A] leading-tight mb-1">
              Hồ sơ hợp tác &amp; phương án triển khai
            </h3>
            <p className="text-[12.5px] text-[#64748B] mb-5 leading-relaxed">
              Tư vấn miễn phí — không ràng buộc. Chúng tôi sẽ phân tích tiềm năng khu vực và gợi ý danh mục trường phù hợp với bạn.
            </p>

            <div className="space-y-3 mb-5">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3.5 rounded-xl border border-[#E2E8F0] px-4 py-3.5
                    hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(37,99,235,0.08)]"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-[10.5px] font-black uppercase tracking-wider text-[#64748B]">{item.label}</span>
                    <span className="block text-[15px] font-extrabold text-[#0F172A] mt-0.5 break-all">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 mb-5">
              <div className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#1E3A8A] mb-1">Trụ sở chính</div>
              <p className="text-[12.5px] text-[#334155] font-semibold leading-relaxed">
                LK621-DV14, Khu dịch vụ Đào Đất, Hàng Bè, Kiến Hưng, Hà Đông, Hà Nội
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/CS%C4%90L%20NH%E1%BA%ACN%20QUY%E1%BB%80N%20VNS%20VNS_06_2026_CHINH_THUC.pdf"
                download="CSĐL NHẬN QUYỀN VNS VNS_06_2026_CHINH_THUC.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 btn-brand-primary text-white text-[13.5px] font-bold text-center"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1v9M4 7l3.5 3.5L11 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Nhận hồ sơ ngay
              </a>
              <a
                href="tel:0386100833"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#E2E8F0]
                  text-[#334155] hover:text-[#2563EB] hover:border-[#3B82F6] rounded-full
                  text-[13.5px] font-bold text-center transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
                </svg>
                Gọi tư vấn ngay
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
