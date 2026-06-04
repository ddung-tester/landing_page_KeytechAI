import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { investmentHighlights, investmentBreakdown } from '../../data/franchiseLandingData';

export default function InvestmentOverview() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Quy mô đầu tư
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight">
            Quy mô đầu tư được chuẩn hóa theo từng trường
          </h2>
        </div>

        {/* Highlight cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {investmentHighlights.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6`}
            >
              <div className="text-[22px] sm:text-[24px] font-extrabold text-[#0F172A] leading-tight tracking-tight">
                {item.value}
              </div>
              <div className="text-[12px] text-[#1E3A8A] font-semibold mt-0.5 mb-2">{item.unit}</div>
              <p className="text-[12.5px] text-[#6B7280] leading-snug">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Breakdown table */}
        <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <div className="text-[13px] font-semibold text-[#374151]">Cơ cấu đầu tư tham chiếu</div>
          </div>
          {investmentBreakdown.map((row, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-6 py-3.5 ${
                i < investmentBreakdown.length - 1 ? 'border-b border-[#F3F4F6]' : ''
              }`}
            >
              <span className="text-[13.5px] text-[#374151]">{row.item}</span>
              <span className="text-[13px] font-semibold text-[#0F172A] text-right">{row.note}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[12px] text-[#9CA3AF] leading-relaxed">
          * Mức đầu tư thực tế có thể thay đổi theo số học sinh, số cổng, hạ tầng mạng, điều kiện thi công và khảo sát thực tế.
        </p>

      </div>
    </section>
  );
}
