import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { requirementItems } from '../../data/franchiseLandingData';

export default function PartnerRequirements() {
  const titleRef = useFadeUp();
  const listRef = useFadeUpChildren();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-12">
          <div className="text-[11px] font-semibold text-[#C039B4] uppercase tracking-widest mb-3">
            Điều kiện hợp tác
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight">
            Đối tác phù hợp với mô hình
          </h2>
        </div>

        <div ref={listRef} className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {requirementItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${(i % 3) + 1} flex items-start gap-3.5 bg-[#F7F8FA] border border-[#E5E7EB]
                rounded-xl px-5 py-4`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDF4FD] border border-[#F9DDF7] flex items-center justify-center mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#C039B4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13.5px] text-[#374151] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
