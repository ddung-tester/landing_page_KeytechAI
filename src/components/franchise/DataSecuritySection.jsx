import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { securityItems } from '../../data/franchiseLandingData';

export default function DataSecuritySection() {
  const titleRef = useFadeUp();
  const listRef = useFadeUpChildren();

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Title + desc */}
          <div ref={titleRef} className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB]
              rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
              Hợp tác an toàn & Bảo mật thông tin
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-5">
              Hợp tác an toàn & Bảo mật thông tin là cam kết hàng đầu
            </h2>
            <p className="text-[14.5px] text-[#4B5563] leading-relaxed mb-6">
              Dữ liệu học sinh, phụ huynh, giáo viên và nhà trường phải được quản lý đúng phạm vi dự án,
              phân quyền rõ ràng và không sử dụng sai mục đích.
            </p>

            {/* Shield icon block */}
            <div className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-[#F0F4FF] flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l9 4v6c0 5-4 8.5-9 10C7 20.5 3 17 3 12V6l9-4z" stroke="#1E3A8A" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-[13.5px] font-semibold text-[#0F172A]">Cam kết bảo mật bắt buộc</div>
                <div className="text-[12.5px] text-[#6B7280] mt-0.5">
                  Mọi nhân sự, cộng tác viên và đơn vị thi công phụ có tiếp xúc dữ liệu phải ký cam kết.
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div ref={listRef} className="space-y-3">
            {securityItems.map((item, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} flex items-start gap-3.5 bg-white border border-[#E5E7EB]
                  rounded-xl px-5 py-4`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#DC2626" strokeWidth="1.2" opacity="0.4"/>
                    <path d="M6 9h6" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[13.5px] text-[#374151] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
