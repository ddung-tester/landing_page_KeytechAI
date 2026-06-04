// ============================================================
// Keytech AI / VNS — Franchise Landing Page Data (ES Module)
// Chỉnh sửa nội dung tại đây, không cần sửa component
// ============================================================

export const heroStats = [
  { value: "100+",     label: "Trường học đã triển khai" },
  { value: "70%",      label: "Doanh thu cho đại lý" },
  { value: "20.000đ",  label: "Phí tham chiếu/học sinh/tháng" },
  { value: "5 năm",    label: "Bảo hành camera AI" },
];

export const opportunityItems = [
  {
    icon: "school",
    title: "Nhà trường",
    desc: "Tăng năng lực quản lý học sinh ra/vào trường hiệu quả hơn.",
  },
  {
    icon: "family",
    title: "Phụ huynh",
    desc: "Nhận thông tin đi học, tan học và ra/vào trường của con kịp thời.",
  },
  {
    icon: "partner",
    title: "Đại lý địa phương",
    desc: "Khai thác mô hình dịch vụ có quy trình và doanh thu định kỳ.",
  },
  {
    icon: "digital",
    title: "Chuyển đổi số",
    desc: "Ứng dụng AI vào quản trị trường học theo hướng thực tiễn.",
  },
];

export const proofStats = [
  {
    icon: "check-circle",
    stat: "100+ trường học",
    desc: "Đã triển khai, lắp đặt và bàn giao hệ thống tại nhiều địa phương.",
  },
  {
    icon: "bar-chart",
    stat: "Doanh thu thực tế",
    desc: "Một số trường đã phát sinh doanh thu phí điểm danh.",
  },
  {
    icon: "clock",
    stat: "1+ năm kinh nghiệm",
    desc: "Đội ngũ kỹ thuật và triển khai có kinh nghiệm thực tế.",
  },
  {
    icon: "document",
    stat: "Quy trình chuyển giao",
    desc: "Có tài liệu đào tạo, hướng dẫn và vận hành cho đại lý.",
  },
];

// Đường dẫn tương đối từ /public — đặt ảnh vào /public/assets/...
export const deploymentImages = [
  {
    src: "/assets/lắp đặt tại cổng trường.png",
    title: "Lắp đặt tại cổng trường",
    description: "Lắp đặt camera AI",
  },
  {
    src: "/assets/lắp đặt tại sân trường.jpg",
    title: "Lắp đặt tại sân trường",
    description: "Lắp đặt tại sân trường",
  },
  {
    src: "/assets/ảnh cam.jpg",
    title: "Camera AI nhận diện",
    description: "Thiết bị camera AI",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/1.jpg",
    title: "Khảo sát cổng trường",
    description: "Khảo sát hiện trạng",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/2.jpg",
    title: "Cấu hình hệ thống",
    description: "Cấu hình camera",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/3.jpg",
    title: "Tập huấn vận hành",
    description: "Đào tạo nhà trường",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/4.jpg",
    title: "Bàn giao giải pháp",
    description: "Nghiệm thu bàn giao",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/5.jpg",
    title: "Nghiệm thu hệ thống",
    description: "Kiểm tra hệ thống",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/6.jpg",
    title: "Lắp đặt thiết bị",
    description: "Thi công lắp đặt",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/7.jpg",
    title: "Vận hành thực tế",
    description: "Vận hành hệ thống",
  },
  {
    src: "/assets/vd_nhung_trg_da_lap_dat/8.jpg",
    title: "Hỗ trợ sau triển khai",
    description: "Chăm sóc sau bàn giao",
  },
  {
    src: "/assets/Hội thảo/Hội thảo 1.jpg",
    title: "Hội thảo đối tác",
    description: "Hội thảo triển khai",
  },
  {
    src: "/assets/Hội thảo/Hội thảo 2.jpg",
    title: "Đào tạo đại lý",
    description: "Tập huấn đại lý",
  },
  {
    src: "/assets/Hội thảo/Hội thảo 3.jpg",
    title: "Hội nghị đối tác",
    description: "Hội nghị chuyển giao",
  },
  {
    src: "/assets/Hội thảo_hero.jpg",
    title: "Sự kiện ra mắt",
    description: "Ra mắt giải pháp",
  },
];

export const solutionFeatures = [
  {
    icon: "camera",
    title: "Camera AI nhận diện khuôn mặt",
    desc: "Ghi nhận học sinh ra/vào tại khu vực kiểm soát.",
  },
  {
    icon: "check",
    title: "Điểm danh tự động",
    desc: "Tự động hóa dữ liệu điểm danh, giảm thao tác thủ công.",
  },
  {
    icon: "bell",
    title: "Thông báo cho phụ huynh",
    desc: "Cập nhật thông tin đi học, tan học và ra/vào trường.",
  },
  {
    icon: "chart",
    title: "Quản trị & báo cáo",
    desc: "Hỗ trợ nhà trường theo dõi, thống kê và vận hành tập trung.",
  },
];

export const revenueModelItems = [
  { party: "Đại lý nhận quyền", percent: 70, color: "#166534" },
  { party: "VNS/Keytech",       percent: 30, color: "#64748B" },
];

export const investmentHighlights = [
  {
    value: "106.000.000đ",
    unit: "/ trường",
    label: "Tổng đầu tư dự kiến theo mô hình tham chiếu.",
  },
  {
    value: "6",
    unit: "camera AI / trường",
    label: "Quy mô trung bình cho một điểm trường.",
  },
  {
    value: "10",
    unit: "trường giai đoạn đầu",
    label: "Quy mô tối thiểu đề xuất cho đại lý.",
  },
  {
    value: "1.060.000.000đ",
    unit: "/ 10 trường",
    label: "Tổng đầu tư tham chiếu cho giai đoạn khởi động.",
  },
];

export const investmentBreakdown = [
  { item: "Camera AI",                      note: "~90.000.000đ / trường" },
  { item: "Phụ kiện, cột, tay gá",          note: "Theo khảo sát thực tế" },
  { item: "Gói mạng, dây, nguồn",           note: "Theo hạ tầng thực tế" },
  { item: "Thi công, chụp ảnh, nhập liệu",  note: "Theo phương án triển khai" },
];

export const processSteps = [
  { step: "01", title: "Khảo sát hiện trạng",  desc: "Đánh giá cổng trường, vị trí kiểm soát, hạ tầng mạng." },
  { step: "02", title: "Tư vấn mô hình",        desc: "Đề xuất phương án triển khai phù hợp từng trường." },
  { step: "03", title: "Thiết kế điểm lắp",     desc: "Xác định vị trí camera AI, góc nhận diện, vật tư." },
  { step: "04", title: "Thi công lắp đặt",      desc: "Lắp camera, phụ kiện, dây mạng, nguồn và cấu hình." },
  { step: "05", title: "Chụp ảnh & nhập liệu",  desc: "Chuẩn hóa dữ liệu học sinh để vận hành hệ thống." },
  { step: "06", title: "Tập huấn nhà trường",   desc: "Hướng dẫn giáo viên/cán bộ sử dụng phần mềm." },
  { step: "07", title: "Hướng dẫn phụ huynh",   desc: "Hỗ trợ phụ huynh/học sinh sử dụng dịch vụ." },
  { step: "08", title: "Nghiệm thu & bảo trì",  desc: "Bàn giao, vận hành, hỗ trợ sau triển khai." },
];

export const roadmapSteps = [
  { time: "30 ngày",  title: "Khởi động",   desc: "Hoàn thành đào tạo, nhận thiết bị, lập danh sách trường mục tiêu." },
  { time: "60 ngày",  title: "Thị trường",  desc: "Khảo sát/làm việc tối thiểu 10 trường." },
  { time: "90 ngày",  title: "Ký kết",      desc: "Ký kết hoặc triển khai tối thiểu 3 trường." },
  { time: "180 ngày", title: "Mở rộng",     desc: "Triển khai tối thiểu 10 trường." },
  { time: "12 tháng", title: "Phát triển",  desc: "Mở rộng theo năng lực và khu vực được xác nhận." },
];

export const supportItems = [
  {
    icon: "badge",
    title: "Thương hiệu & hồ sơ năng lực",
    desc: "Cung cấp tài liệu giới thiệu, nhận diện và công cụ làm việc với trường.",
  },
  {
    icon: "training",
    title: "Đào tạo quy trình",
    desc: "Tư vấn, khảo sát, thiết kế, thi công, nhập liệu và vận hành.",
  },
  {
    icon: "support",
    title: "Hỗ trợ kỹ thuật",
    desc: "Hỗ trợ phần mềm, cấu hình, tài khoản, dữ liệu và nền tảng.",
  },
  {
    icon: "server",
    title: "Server, cloud, nền tảng",
    desc: "Vận hành, duy trì, nâng cấp các thành phần công nghệ.",
  },
  {
    icon: "shield",
    title: "Bảo hành camera AI 5 năm",
    desc: "Áp dụng theo chính sách và điều kiện bảo hành.",
  },
  {
    icon: "report",
    title: "Đối soát doanh thu",
    desc: "Hỗ trợ kiểm soát, báo cáo và minh bạch doanh thu.",
  },
];

export const requirementItems = [
  "Có pháp nhân doanh nghiệp, hộ kinh doanh hoặc đăng ký kinh doanh hợp pháp.",
  "Có văn phòng hoặc địa điểm kinh doanh rõ ràng.",
  "Có nhân sự phụ trách thị trường, kỹ thuật triển khai, chăm sóc khách hàng.",
  "Có năng lực tài chính đầu tư tối thiểu từ 10 công trình trường học trở lên.",
  "Có quan hệ, kết nối hoặc khả năng phát triển trường học tại địa phương.",
  "Cam kết tuân thủ thương hiệu, quy trình kỹ thuật, bảo mật dữ liệu và nghĩa vụ tài chính.",
];

export const securityItems = [
  "Không sao chép dữ liệu học sinh ra ngoài hệ thống nếu chưa được phép.",
  "Không cung cấp dữ liệu cho bên thứ ba.",
  "Không sử dụng hình ảnh học sinh để quảng cáo/truyền thông khi chưa được chấp thuận hợp lệ.",
  "Không khai thác dữ liệu học sinh cho mục đích thương mại ngoài phạm vi dự án.",
  "Không để nhân sự không có thẩm quyền tiếp cận dữ liệu.",
  "Nhân sự/cộng tác viên/đơn vị thi công phụ phải ký cam kết bảo mật nếu có tiếp xúc dữ liệu.",
];

export const navLinks = [
  { label: "Cơ hội đầu tư",       href: "#opportunity" },
  { label: "Mô hình doanh thu",   href: "#revenue" },
  { label: "Lộ trình triển khai", href: "#roadmap" },
  { label: "Hỗ trợ đại lý",      href: "#support" },
  { label: "Liên hệ",            href: "#cta" },
];
