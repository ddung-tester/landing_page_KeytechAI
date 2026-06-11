import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

const footerLinks = [
  { label: "Cơ hội đầu tư", href: "#co-hoi" },
  { label: "Show công nghệ", href: "#cong-nghe" },
  { label: "Mô hình doanh thu", href: "#doanh-thu" },
  { label: "Vì sao Keytech", href: "#keytech" },
  { label: "Lộ trình", href: "#lo-trinh" },
  { label: "Hỗ trợ", href: "#ho-tro" },
  { label: "Đối tác phù hợp", href: "#doi-tuong" },
  { label: "Đăng ký", href: "#lien-he" },
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
        <div className="py-12 grid sm:grid-cols-[1.5fr_1fr] gap-8 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/keytech_logo.png" alt="Keytech Logo" className="h-14 w-auto object-contain" />
              <div className="h-5 w-px bg-[#334155]" />
              <span className="text-[10px] font-extrabold tracking-widest text-[#FCE1F5] uppercase bg-[#A855F7]/30 px-2 py-0.5 rounded-md">
                Partnership
              </span>
            </div>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-sm">
              Camera AI điểm danh trường học theo mô hình hợp tác và nhượng quyền.
            </p>
          </div>

          {/* Links */}
          <div className="sm:justify-self-end">
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

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E293B] py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-[#64748B]">
            © {year} Keytech AI / VNS. Toàn bộ nội dung mang tính tham chiếu.
          </p>
          <p className="text-[12px] text-[#64748B]">
            Số liệu tài chính trên website là phương án tham khảo phục vụ đánh giá cơ hội hợp tác, không phải cam kết lợi nhuận.
          </p>
        </div>

      </div>
    </footer>
  );
}
