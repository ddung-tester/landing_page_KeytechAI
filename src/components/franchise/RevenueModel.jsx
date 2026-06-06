import { useFadeUp } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

// SVG check icon đồng bộ màu với brand purple
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" fill="#F5F3FF" />
    <path d="M4 7l2.5 2.5L10 5" stroke="#A855F7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const INCLUDED_ITEMS = [
  'Nền tảng phần mềm điểm danh',
  'Hạ tầng server & cloud',
  'Hỗ trợ kỹ thuật vận hành',
  'Tài liệu & quy trình chuyển giao',
];

export default function RevenueModel({ id }) {
  const titleRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section page-about border-t border-[#DDD6FE] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section header — đồng bộ với các section khác */}
        <div ref={titleRef} className="section-header--row fade-up">
          <div className="section-left">
            <span className="section-eyebrow" style={{ color: '#A855F7' }}>Mô hình doanh thu</span>
            <h2 className="section-title">
              Đối tác nhận <span style={{ color: '#A855F7' }}>70%</span> doanh thu
            </h2>
          </div>
          <div className="section-right">
            <p className="section-desc">
              Đối tác tập trung khai thác thị trường địa phương. Hệ thống hạ tầng, phần mềm và vận hành được hỗ trợ trọn gói.
            </p>
          </div>
        </div>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT: Revenue highlight card */}
          <div className="bg-white border border-[#DDD6FE] rounded-2xl overflow-hidden flex flex-col justify-between">
            {/* Symmetrical Card Header */}
            <div className="bg-gradient-to-r from-[#D946EF] to-[#60A5FA] px-6 py-4.5">
              <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 opacity-80">
                Cơ chế chia sẻ
              </div>
              <div className="text-[15px] font-bold text-white">Quyền lợi đối tác nhận quyền</div>
            </div>

            {/* Symmetrical Body */}
            <div className="p-6 flex-1 flex flex-col justify-between gap-6">
              {/* Revenue share metric */}
              <div className="flex items-end gap-3.5 my-2">
                <div className="text-[72px] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#60A5FA]">
                  70%
                </div>
                <div className="pb-1.5 flex flex-col">
                  <span className="text-[14px] font-bold text-[#0F172A]">Doanh thu thực nhận</span>
                  <span className="text-[12px] text-[#6B7280]">Định kỳ theo năm học</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#F1F5F9]" />

              {/* Included services */}
              <div>
                <div className="text-[11px] font-bold text-[#A855F7] uppercase tracking-widest mb-3">
                  Hạ tầng &amp; Vận hành đã bao gồm:
                </div>
                <ul className="flex flex-col gap-2.5">
                  {INCLUDED_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="text-[13px] text-[#374151] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Revenue simulation table */}
          <div className="bg-white border border-[#DDD6FE] rounded-2xl overflow-hidden flex flex-col justify-between">
            {/* Symmetrical Card Header */}
            <div className="bg-gradient-to-r from-[#D946EF] to-[#60A5FA] px-6 py-4.5">
              <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 opacity-80">
                Hiệu quả tài chính
              </div>
              <div className="text-[15px] font-bold text-white">Mô phỏng doanh thu tham chiếu</div>
            </div>

            {/* Symmetrical Body */}
            <div className="p-6 flex-1 flex flex-col justify-between gap-6">
              {/* Data rows */}
              <div className="flex-1 flex flex-col justify-center gap-3">
                {[
                  { label: 'Quy mô giả định', value: '1.000 học sinh / trường' },
                  { label: 'Đơn giá dịch vụ', value: '20.000đ / học sinh / tháng' },
                  { label: 'Doanh thu dự kiến', value: '200.000.000đ / năm học (10 tháng)' },
                  {
                    label: 'Thực nhận đối tác (70%)',
                    value: '140.000.000đ / năm',
                    highlight: true,
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 px-4 py-3 ${
                      row.highlight
                        ? 'bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl shadow-[0_2px_8px_rgba(168,85,247,0.04)] font-semibold'
                        : 'border-b border-[#F1F5F9] last:border-0'
                    }`}
                  >
                    <span
                      className={`text-[13px] ${
                        row.highlight ? 'font-bold text-[#8B5CF6]' : 'text-[#6B7280]'
                      }`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`text-[14.5px] font-bold tabular-nums sm:text-right shrink-0 ${
                        row.highlight ? 'text-[#8B5CF6]' : 'text-[#0F172A]'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Symmetrical Footer footnote placement */}
              <div className="pt-4 border-t border-[#F1F5F9]">
                <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                  * Số liệu tham chiếu. Kết quả thực tế tùy thuộc quy mô và đơn giá tại từng trường.
                </p>
              </div>
            </div>
          </div>

        </div>

        <ScrollNext href="#dau-tu" />
      </div>
    </section>
  );
}
