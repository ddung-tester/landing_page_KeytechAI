import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { roadmapSteps } from '../../data/franchiseLandingData';

export default function PartnerRoadmap() {
  const titleRef = useFadeUp();
  const stepsRef = useFadeUpChildren();

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#E5E7EB]
            rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4">
            Lộ trình đối tác
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight">
            Lộ trình khởi động rõ ràng cho đối tác
          </h2>
        </div>

        {/* Vertical timeline */}
        <div ref={stepsRef} className="relative max-w-3xl">
          {/* Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#E5E7EB]" />

          <div className="space-y-6">
            {roadmapSteps.map((step, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} relative flex items-start gap-5`}
              >
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors duration-200 border-4 border-white shadow-[0_0_0_1px_#E5E7EB]
                  flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-white leading-none">{i + 1}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-[#E5E7EB] rounded-xl p-5 mb-2
                  hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.07)] transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-block bg-[#F0F4FF] text-[#1E3A8A] text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                      {step.time}
                    </span>
                    <span className="text-[15px] font-bold text-[#0F172A]">{step.title}</span>
                  </div>
                  <p className="text-[13.5px] text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
