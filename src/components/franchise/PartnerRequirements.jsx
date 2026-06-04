import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { requirementItems } from '../../data/franchiseLandingData';

export default function PartnerRequirements() {
  const titleRef = useFadeUp();
  const listRef = useFadeUpChildren();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div ref={titleRef} className="fade-up max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Đối tác phù hợp
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Dành cho đối tác muốn phát triển thị trường giáo dục địa phương
          </h2>
          <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-2xl">
            Keytech AI phù hợp với các doanh nghiệp, hộ kinh doanh hoặc đội ngũ địa phương có năng lực phát triển trường học, tổ chức triển khai và chăm sóc khách hàng.
          </p>
        </div>

        {/* List of requirements */}
        <div ref={listRef} className="grid sm:grid-cols-2 gap-3 max-w-4xl mb-5">
          {requirementItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${(i % 3) + 1} flex items-start gap-3.5 bg-[#F7F8FA] border border-[#E5E7EB]
                rounded-lg px-5 py-3.5`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F0F4FF] border border-[#D1E2FF] flex items-center justify-center mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#1E3A8A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13.5px] text-[#374151] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[12px] text-[#9CA3AF] max-w-4xl">
          * Các điều kiện pháp lý, tài chính và phạm vi hợp tác sẽ được tư vấn chi tiết trong quá trình làm việc với đối tác.
        </p>

      </div>
    </section>
  );
}
