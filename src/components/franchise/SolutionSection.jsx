import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import { solutionFeatures } from '../../data/franchiseLandingData';

const iconMap = {
  camera: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="2.5" stroke="#1E3A8A" strokeWidth="1.6"/>
      <circle cx="12" cy="14" r="4" stroke="#1E3A8A" strokeWidth="1.6"/>
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#1E3A8A" strokeWidth="1.5"/>
      <circle cx="12" cy="14" r="1.5" fill="#1E3A8A" opacity="0.35"/>
    </svg>
  ),
  check: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#1E3A8A" strokeWidth="1.6"/>
      <path d="M8 12l3 3 5-6" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a7 7 0 017 7v3l2 3H3l2-3v-3a7 7 0 017-7z" stroke="#1E3A8A" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 20a3 3 0 006 0" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="#1E3A8A" strokeWidth="1.5"/>
      <rect x="6" y="13" width="3" height="5" rx="0.5" fill="#1E3A8A" opacity="0.4"/>
      <rect x="10.5" y="9" width="3" height="9" rx="0.5" fill="#1E3A8A" opacity="0.7"/>
      <rect x="15" y="5" width="3" height="13" rx="0.5" fill="#1E3A8A"/>
    </svg>
  ),
};

export default function SolutionSection() {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();

  return (
    <section className="py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="fade-up max-w-xl mb-12">
          <div className="text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-3">
            Giải pháp công nghệ
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight">
            Một hệ thống, nhiều điểm chạm vận hành
          </h2>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionFeatures.map((item, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} group bg-white border border-[#E5E7EB] rounded-xl p-6
                hover:border-[#1E3A8A] hover:shadow-[0_4px_16px_rgba(30,58,138,0.08)] transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5
                group-hover:bg-[#E0E7FF] transition-colors">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-[14.5px] font-bold text-[#0F172A] mb-2 leading-snug">{item.title}</h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
