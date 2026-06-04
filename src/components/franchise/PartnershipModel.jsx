import { useFadeUp } from '../../hooks/useFadeUp';

const roles = [
  {
    tag: "Công nghệ & Vận hành",
    title: "VNS / Keytech AI",
    color: "border-[#1E3A8A]",
    tagColor: "bg-[#F0F4FF] text-[#1E3A8A]",
    revenue: "30%",
    revenueLabel: "doanh thu thực thu",
    items: [
      "Sở hữu công nghệ, thương hiệu, phần mềm, quy trình.",
      "Vận hành nền tảng, đào tạo, bảo hành, hỗ trợ kỹ thuật.",
      "Hưởng 30% doanh thu thực thu, chưa VAT.",
    ],
  },
  {
    tag: "Đầu tư & Triển khai",
    title: "Đại lý nhận quyền",
    color: "border-[#166534]",
    tagColor: "bg-[#F0FDF4] text-[#166534]",
    revenue: "70%",
    revenueLabel: "doanh thu thực thu",
    highlight: true,
    items: [
      "Đầu tư thiết bị, phát triển trường học, triển khai tại địa phương.",
      "Thu phí, chăm sóc nhà trường/phụ huynh, báo cáo doanh thu.",
      "Hưởng 70% doanh thu thực thu, chưa VAT.",
    ],
  },
  {
    tag: "Người dùng cuối",
    title: "Nhà trường & Phụ huynh",
    color: "border-[#64748B]",
    tagColor: "bg-[#F8FAFC] text-[#64748B]",
    items: [
      "Sử dụng dịch vụ điểm danh/an ninh trường học.",
      "Phối hợp cung cấp dữ liệu cần thiết.",
      "Nhận lợi ích quản lý an toàn, thông tin kịp thời.",
    ],
  },
];

export default function PartnershipModel() {
  const titleRef = useFadeUp();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Mô hình hợp tác
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight">
            Rõ vai trò, rõ quyền lợi
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {roles.map((role, i) => (
            <div
              key={i}
              className={`relative bg-white border-t-4 ${role.color} border border-[#E5E7EB] rounded-xl p-6
                hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300`}
            >
              <span className={`inline-block px-2.5 py-1 rounded-full text-[10.5px] font-semibold mb-4 ${role.tagColor}`}>
                {role.tag}
              </span>
              <h3 className="text-[17px] font-extrabold text-[#0F172A] mb-1">{role.title}</h3>

              {role.revenue && (
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-[28px] font-extrabold text-[#0F172A]">{role.revenue}</span>
                  <span className="text-[12px] text-[#6B7280]">{role.revenueLabel}</span>
                </div>
              )}

              <ul className="space-y-2.5">
                {role.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#CBD5E1" strokeWidth="1.2"/>
                      <path d="M4.5 7l2 2 3-3" stroke="#1E3A8A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] text-[#374151] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
