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
      className="flex-shrink-0 w-[280px] sm:w-[340px] mx-2 bg-white border border-[#DBEAFE] rounded-[16px] overflow-hidden
        shadow-[0_4px_14px_rgba(30,58,138,0.04)] hover:shadow-[0_8px_22px_rgba(30,58,138,0.08)]
        transition-shadow duration-300 cursor-default"
    >
      <div className="w-full h-[210px] bg-[#EFF6FF] overflow-hidden">
        <img
          src={img.src}
          alt={img.title}
          loading="lazy"
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
      <div className="px-4 py-3">
        <div className="text-[13px] font-semibold text-[#0F172A] truncate">{img.title}</div>
        <div className="text-[11.5px] text-[#6B7280] mt-0.5">Camera AI điểm danh</div>
      </div>
    </div>
  );
}

export default function DeploymentTimeline() {
  const titleRef = useFadeUp();

  return (
    <section className="page-news border-t border-[#DBEAFE] overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up">
          {/* Title row + stats */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DBEAFE]
                rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-3">
                Thực tế triển khai
              </div>
              <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0F172A] leading-tight mb-2">
                Những trường đã triển khai
              </h2>
              <p className="text-[14px] text-[#4B5563] max-w-xl leading-relaxed">
                Hình ảnh thực tế từ các điểm trường đã lắp đặt và vận hành hệ thống Camera AI điểm danh Keytech AI.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex gap-3 flex-shrink-0">
              {DEPLOY_STATS.map((s, i) => (
                <div key={i} className="bg-white border border-[#DBEAFE] rounded-xl px-4 py-3 text-center shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <div className="text-[20px] font-extrabold text-[#1E3A8A] leading-none">{s.value}</div>
                  <div className="text-[11px] text-[#6B7280] mt-1 font-medium whitespace-nowrap">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: marquee — full-width, nằm ngoài container */}
      <div className="marquee-wrapper hidden sm:block">
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
