import { useFadeUp } from '../../hooks/useFadeUp';

const TRUST_ITEMS = [
  { value: '250+', label: 'Trường học đã triển khai' },
  { value: '70%', label: 'Doanh thu thực thu cho đại lý' },
  { value: '5 năm', label: 'Bảo hành camera AI' },
];

const OFFER_LIST = [
  'Hồ sơ hợp tác chi tiết & mô hình doanh thu tham chiếu',
  'Tư vấn khu vực triển khai và danh mục trường tiềm năng',
  'Hỗ trợ kỹ thuật, đào tạo quy trình và vận hành đầy đủ',
];

export default function FinalCTA() {
  const leftRef = useFadeUp();
  const formRef = useFadeUp();

  return (
    <section className="page-auth border-t border-[#E2E8F0] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">

          {/* LEFT: Trust content */}
          <div ref={leftRef} className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0]
              rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4 shadow-sm">
              Đăng ký tư vấn
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-3">
              Sẵn sàng khai thác thị trường Camera AI điểm danh tại địa phương?
            </h2>
            <p className="text-[14px] text-[#4B5563] leading-relaxed mb-6">
              Nhận hồ sơ hợp tác, mô hình doanh thu tham chiếu và tư vấn khu vực phù hợp với năng lực của bạn.
            </p>

            {/* Offer list */}
            <div className="space-y-3 mb-6">
              {OFFER_LIST.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center mt-0.5 shadow-sm">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[13.5px] text-[#374151] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-4 flex-wrap">
              {TRUST_ITEMS.map((s, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 shadow-sm">
                  <div className="text-[22px] font-extrabold text-[#1E3A8A] leading-none">{s.value}</div>
                  <div className="text-[11px] text-[#6B7280] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact details card */}
          <div ref={formRef} className="fade-up fade-up-delay-2">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(30,58,138,0.06)] hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] transition-all duration-300">
              <h3 className="text-[16px] font-bold text-[#0F172A] mb-6 pb-3 border-b border-[#F1F5F9] flex items-center gap-2">
                <span className="w-1.5 h-4 bg-gradient-to-b from-[#8B5CF6] to-[#3B82F6] rounded-full inline-block" />
                Thông tin liên hệ
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-[#4B5563] uppercase tracking-wider mb-1">Trụ sở chính</h4>
                    <p className="text-[13.5px] text-[#1E293B] leading-relaxed font-medium">
                      LK621-DV14, Khu dịch vụ Đào Đất, Hàng Bè, Kiến Hưng, Hà Đông, Hà Nội
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#166534] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[12.5px] font-bold text-[#4B5563] uppercase tracking-wider mb-1">Tổng đài tư vấn</h4>
                    <div className="flex items-baseline gap-2">
                      <a href="tel:0386100833" className="text-[16px] font-extrabold text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                        0386 100 833
                      </a>
                      <span className="text-[11px] px-2 py-0.5 bg-[#F0FDF4] text-[#166534] font-semibold rounded-md border border-[#DCFCE7]">
                        Mở cuộc gọi
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#6B7280] mt-1 font-medium">Giờ làm việc: 8:30 – 17:00 (Thứ 2 – Thứ 7)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-[#4B5563] uppercase tracking-wider mb-1">Email liên hệ</h4>
                    <a href="mailto:info@keytechai.com" className="text-[14px] font-bold text-[#8B5CF6] hover:text-[#A855F7] transition-colors break-all">
                      info@keytechai.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0386100833"
                  className="flex-1 py-3 px-4 btn-brand-primary text-center font-semibold text-[13.5px] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Gọi hotline tư vấn
                </a>
                <a
                  href="mailto:info@keytechai.com"
                  className="flex-1 py-3 px-4 bg-white hover:bg-[#F8FAFC] text-[#374151] hover:text-[#0F172A] border border-[#E2E8F0] text-center font-semibold text-[13.5px] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Gửi mail hợp tác
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
