import { useEffect, useRef } from 'react';
import { useFadeUp } from '../../hooks/useFadeUp';

export default function RevenueModel() {
  const titleRef = useFadeUp();
  const barRef = useRef(null);
  const sectionRef = useRef(null);

  // Animate bar fill on viewport entry
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bar70 = barRef.current?.querySelector('#bar-70');
          const bar30 = barRef.current?.querySelector('#bar-30');
          if (bar70) bar70.style.width = '70%';
          if (bar30) bar30.style.width = '30%';
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="revenue" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Mô hình doanh thu
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Đại lý hưởng <span className="text-[#166534]">70%</span> doanh thu thực thu
          </h2>
          <p className="text-[14.5px] text-[#4B5563] leading-relaxed">
            Doanh thu được phân chia trên phí dịch vụ tham chiếu <strong>20.000đ/học sinh/tháng</strong> (thu thực tế theo thỏa thuận phù hợp với từng trường và phụ huynh), chưa bao gồm VAT, sau khi loại trừ các khoản chưa thu, hoàn trả, giảm trừ hoặc điều chỉnh hợp lệ nếu có.
          </p>
        </div>

        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Revenue bar */}
          <div ref={barRef} className="bg-white border border-[#E5E7EB] rounded-xl p-7">
            <div className="mb-6">
              <div className="text-[13px] font-medium text-[#6B7280] mb-3">Phân chia doanh thu thực thu</div>
              {/* 70% bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[13px] font-semibold text-[#166534]">Đại lý nhận quyền</span>
                  <span className="text-[20px] font-extrabold text-[#166534]">70%</span>
                </div>
                <div className="h-3 bg-[#F0FDF4] rounded-full overflow-hidden">
                  <div
                    id="bar-70"
                    className="h-full bg-[#166534] rounded-full transition-all duration-[1.2s] ease-out"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
              {/* 30% bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[13px] font-semibold text-[#64748B]">VNS / Keytech</span>
                  <span className="text-[20px] font-extrabold text-[#64748B]">30%</span>
                </div>
                <div className="h-3 bg-[#F8FAFC] rounded-full overflow-hidden border border-[#E5E7EB]">
                  <div
                    id="bar-30"
                    className="h-full bg-[#94A3B8] rounded-full transition-all duration-[1.2s] ease-out delay-300"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#F3F4F6] pt-5">
              <div className="text-[11.5px] text-[#9CA3AF] font-medium">
                * Tính trên doanh thu thực thu, chưa VAT, sau loại trừ các khoản điều chỉnh hợp lệ.
              </div>
            </div>
          </div>

          {/* Example card */}
          <div className="space-y-4">
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-7">
              <div className="text-[11.5px] font-semibold text-[#1E3A8A] uppercase tracking-wide mb-4">
                Ví dụ tham chiếu — 1 trường 1.000 học sinh
              </div>

              <div className="space-y-3">
                {[
                  { label: "Phí tham chiếu", value: "20.000đ / học sinh / tháng" },
                  { label: "Doanh thu / tháng", value: "20.000.000đ" },
                  { label: "Doanh thu / 10 tháng", value: "200.000.000đ" },
                  { label: "Đại lý hưởng (70%)", value: "140.000.000đ / năm học", green: true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-2.5 ${i < 3 ? 'border-b border-[#F3F4F6]' : ''}`}>
                    <span className="text-[13px] text-[#6B7280]">{row.label}</span>
                    <span className={`text-[13.5px] font-bold ${row.green ? 'text-[#166534]' : 'text-[#0F172A]'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5">
              <div className="flex gap-3">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#D97706" strokeWidth="1.4"/>
                  <path d="M8 5v4M8 11v.5" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <p className="text-[12.5px] text-[#92400E] leading-relaxed">
                  Các con số trên là cơ sở phương án kinh doanh <strong>tham chiếu</strong>, không phải cam kết doanh thu hoặc lợi nhuận.
                  Kết quả thực tế phụ thuộc số học sinh, tỷ lệ sử dụng, mức phí, khu vực, năng lực triển khai và thỏa thuận với nhà trường.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
