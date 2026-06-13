import { useFadeUp } from '../../hooks/useFadeUp';
import { processSteps } from '../../data/franchiseLandingData';

export default function ProcessTimeline() {
  const titleRef = useFadeUp();

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB]
            rounded-full text-[13px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Quy trình triển khai
          </div>
          <h2 className="text-[30px] sm:text-[34px] font-extrabold text-[#0F172A] leading-tight">
            Từ khảo sát đến vận hành
          </h2>
        </div>
 
        {/* Desktop: 4+4 grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="fade-up bg-white border border-[#E5E7EB] rounded-xl p-5
                hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.07)] transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-[13px] font-bold text-[#1E3A8A] bg-[#F0F4FF] px-2.5 py-0.5 rounded-full inline-block mb-3 tracking-widest">
                {step.step}
              </div>
              <h3 className="text-[15.5px] font-bold text-[#0F172A] mb-1.5">{step.title}</h3>
              <p className="text-[14px] text-[#6B7280] leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="sm:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5E7EB]" />
          <div className="space-y-5">
            {processSteps.map((step, i) => (
              <div key={i} className="relative flex items-start gap-4 pl-12">
                <div className="absolute left-0 w-10 h-10 rounded-full bg-white border-2 border-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[12px] font-bold text-[#1E3A8A]">{step.step}</span>
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex-1">
                  <h3 className="text-[15.5px] font-bold text-[#0F172A] mb-1">{step.title}</h3>
                  <p className="text-[14px] text-[#6B7280] leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
