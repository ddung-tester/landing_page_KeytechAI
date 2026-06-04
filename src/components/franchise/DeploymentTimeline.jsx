import { useFadeUp } from '../../hooks/useFadeUp';
import { deploymentImages } from '../../data/franchiseLandingData';

// Nhân đôi array để tạo loop liền mạch
const doubled = [...deploymentImages, ...deploymentImages];

function ImageCard({ img }) {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[320px] mx-2 bg-white border border-[#E5E7EB] rounded-[18px] overflow-hidden
        hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default"
    >
      <div className="w-full h-[190px] bg-[#F3F4F6] overflow-hidden">
        <img
          src={img.src}
          alt={img.title}
          loading="lazy"
          className="w-full h-full object-cover"
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
        <div className="text-[11.5px] text-[#6B7280] mt-0.5">{img.description}</div>
      </div>
    </div>
  );
}

export default function DeploymentTimeline() {
  const titleRef = useFadeUp();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="fade-up mb-10">
          <div className="text-[11px] font-semibold text-[#C039B4] uppercase tracking-widest mb-3">
            Thực tế triển khai
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-3">
            Dấu ấn triển khai thực tế
          </h2>
          <p className="text-[15px] text-[#4B5563] max-w-2xl leading-relaxed">
            Hệ thống được triển khai theo quy trình từ khảo sát, thiết kế điểm lắp, thi công,
            nhập liệu, tập huấn đến bàn giao vận hành.
          </p>
        </div>
      </div>

      {/* Desktop: marquee */}
      <div className="marquee-wrapper hidden sm:block">
        <div className="marquee-track py-3">
          {doubled.map((img, i) => (
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
    </section>
  );
}
