import { navLinks } from '../../data/franchiseLandingData';

const footerLinks = [
  { label: "Cơ hội đầu tư",       href: "#opportunity" },
  { label: "Mô hình doanh thu",   href: "#revenue" },
  { label: "Quy trình triển khai", href: "#roadmap" },
  { label: "Hợp tác an toàn & Bảo mật", href: "#security" },
  { label: "Liên hệ",            href: "#cta" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/keytech_logo.png" alt="Keytech Logo" className="h-9 w-auto object-contain" />
              <div>
                <div className="font-semibold text-[15px] tracking-tight">Keytech AI</div>
                <div className="text-[#94A3B8] text-[10px] font-medium tracking-wide uppercase">VNS Partnership</div>
              </div>
            </div>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-xs">
              Giải pháp Camera AI điểm danh và an ninh trường học theo mô hình hợp tác đầu tư,
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
              Liên hệ hợp tác
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13.5 10.5c0 .3-.1.6-.2.9-.1.3-.3.5-.5.7-.4.4-.8.5-1.3.5-.4 0-.8-.1-1.2-.3L7 9.5 3.7 6.2a5.2 5.2 0 01-.3-1.2c0-.5.1-.9.5-1.3.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2.1 0 .2 0 .3.1l2 3c.1.1.1.2.1.3 0 .1 0 .2-.1.3l-.6.6c0 .1 0 .1.1.2l2.5 2.5c.1.1.1.1.2.1l.6-.6c.1-.1.2-.1.3-.1.1 0 .2 0 .3.1l3 2c.1.1.1.2.1.3z" stroke="#94A3B8" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span className="text-[13px] text-[#94A3B8]">Liên hệ qua form đăng ký trên trang</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="#94A3B8" strokeWidth="1.2"/>
                  <path d="M1.5 5.5l6 3.5 6-3.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span className="text-[13px] text-[#94A3B8]">Keytech AI / VNS</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#cta"
                onClick={(e) => handleNav(e, '#cta')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors duration-200 text-white text-[13px] font-semibold rounded-lg
                  hover:bg-[#1E40AF] hover:-translate-y-px transition-all duration-200"
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
            Số liệu tài chính là tham chiếu, không phải cam kết doanh thu hoặc lợi nhuận.
          </p>
        </div>

      </div>
    </footer>
  );
}
