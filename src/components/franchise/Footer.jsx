import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

const footerLinks = [
  { label: "Công nghệ Camera AI",       href: "#cong-nghe" },
  { label: "Trường đã triển khai", href: "#truong-da-trien-khai" },
  { label: "Mô hình doanh thu",   href: "#doanh-thu" },
  { label: "Tiêu chuẩn dữ liệu", href: "#du-lieu" },
  { label: "Liên hệ",            href: "#lien-he" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    scrollToLandingTarget(el);
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/keytech_logo.png" alt="Keytech Logo" className="h-14 w-auto object-contain" />
              <div className="h-5 w-px bg-[#334155]" />
              <span className="text-[10px] font-extrabold tracking-widest text-[#FCE1F5] uppercase bg-[#A855F7]/30 px-2 py-0.5 rounded-md">
                Partnership
              </span>
            </div>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-xs">
              Giải pháp Camera AI điểm danh trường học theo mô hình hợp tác đầu tư,
              chuyển giao quy trình và nhượng quyền khai thác.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-widest mb-4">
              Điều hướng
            </div>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-[13.5px] text-[#CBD5E1] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-widest mb-4">
              Liên hệ
            </div>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#94A3B8"/>
                </svg>
                <span className="text-[13px] text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#CBD5E1]">Trụ sở:</strong> LK621-DV14, Khu dịch vụ Đào Đất,<br />
                  Hàng Bè, Kiến Hưng, Hà Đông, Hà Nội
                </span>
              </div>
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="#94A3B8" strokeWidth="1.2"/>
                  <path d="M1.5 5.5l6 3.5 6-3.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <a href="mailto:info@keytechai.com" className="text-[13px] text-[#A78BFA] hover:text-[#C4B5FD] transition-colors">
                  info@keytechai.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13.5 10.5c0 .3-.1.6-.2.9-.1.3-.3.5-.5.7-.4.4-.8.5-1.3.5-.4 0-.8-.1-1.2-.3L7 9.5 3.7 6.2a5.2 5.2 0 01-.3-1.2c0-.5.1-.9.5-1.3.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2.1 0 .2 0 .3.1l2 3c.1.1.1.2.1.3 0 .1 0 .2-.1.3l-.6.6c0 .1 0 .1.1.2l2.5 2.5c.1.1.1.1.2.1l.6-.6c.1-.1.2-.1.3-.1.1 0 .2 0 .3.1l3 2c.1.1.1.2.1.3z" stroke="#94A3B8" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <div className="text-[13px] text-[#94A3B8]">
                  <strong className="text-[#CBD5E1]">Tổng đài tư vấn:</strong>{' '}
                  <a href="tel:0386100833" className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors font-semibold">
                    0386 100 833
                  </a>
                  <br />
                  <span className="text-[12px]">Giờ làm việc: 8:30–17:00, thứ 2 – thứ 7</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#lien-he"
                onClick={(e) => handleNav(e, '#lien-he')}
                className="inline-flex items-center gap-2 px-5 py-3 btn-brand-primary transition-all duration-200 text-white text-[13px] font-semibold rounded-full"
              >
                Đăng ký tư vấn ngay
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E293B] py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-[#64748B]">
            © {year} Keytech AI / VNS. Toàn bộ nội dung mang tính tham chiếu.
          </p>
          <p className="text-[12px] text-[#64748B]">
            Số liệu tài chính dùng để tham khảo khi xây dựng phương án hợp tác.
          </p>
        </div>

      </div>
    </footer>
  );
}
