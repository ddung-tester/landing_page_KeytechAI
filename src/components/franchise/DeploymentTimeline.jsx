import { useFadeUp } from '../../hooks/useFadeUp';
import { deploymentImages } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';

const marqueeImages = deploymentImages.length < 10
  ? [...deploymentImages, ...deploymentImages]
  : deploymentImages;

const DEPLOY_STATS = [
  { value: '250+', label: 'Trường học' },
  { value: '7+', label: 'Tỉnh thành' },
  { value: '100%', label: 'Vận hành ổn định' },
];

function ImageCard({ img }) {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[320px] mx-2 bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
        shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]
        transition-shadow duration-300 cursor-default"
    >
      <div className="w-full h-[200px] bg-[#F1F5F9] overflow-hidden">
        <img
          src={img.src}
          alt={img.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
            const placeholder = document.createElement('div');
            placeholder.className = 'text-[#9CA3AF] text-[12px] text-center px-4';
            placeholder.textContent = img.title;
            e.target.parentElement.appendChild(placeholder);
          }}
        />
      </div>
      <div className="px-4 py-3.5">
        <div className="text-[13px] font-semibold text-[#0F172A] truncate">{img.title}</div>
        <div className="text-[11.5px] text-[#6B7280] mt-0.5">Camera AI điểm danh</div>
      </div>
    </div>
  );
}

export default function DeploymentTimeline({ id }) {
  const titleRef = useFadeUp();

  return (
    <section
      id={id}
      className="landing-section snap-section page-news border-t border-[#DBEAFE] overflow-hidden flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up">
          {/* Title row + stats */}
          <div className="section-header--row">
            <div className="section-left">
              <span className="section-eyebrow" style={{ color: '#60A5FA' }}>Thực tế triển khai</span>
              <h2 className="section-title">Những trường đã triển khai thực tế</h2>
            </div>
            {/* Stat pills — right column */}
            <div className="section-right">
              <div className="flex gap-3 flex-wrap">
                {DEPLOY_STATS.map((s, i) => (
                  <div key={i} className="bg-white border border-[#DBEAFE] rounded-2xl px-4 py-3 text-center shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:border-[#60A5FA] transition-colors">
                    <div className="text-[20px] font-extrabold text-[#1E3A8A] leading-none">{s.value}</div>
                    <div className="text-[11px] text-[#6B7280] mt-1 font-medium whitespace-nowrap">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: marquee — full-width, nằm ngoài container */}
      <div className="marquee-wrapper hidden sm:block mb-2">
        <div className="marquee-track py-2">
          {marqueeImages.map((img, i) => (
            <ImageCard key={i} img={img} />
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll with snap */}
      <div className="sm:hidden overflow-x-auto pb-4 px-4" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-3">
          {deploymentImages.map((img, i) => (
            <div key={i} style={{ scrollSnapAlign: 'start' }}>
              <ImageCard img={img} />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ScrollNext href="#kiem-chung" />
      </div>
    </section>
  );
}
