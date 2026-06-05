import { useState, useEffect } from 'react';
import { useFadeUpChildren } from '../../hooks/useFadeUp';
import { heroStats } from '../../data/franchiseLandingData';
import ScrollNext from './ScrollNext';
import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

function StatCard({ stat }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3
      shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-center">
      <div className="text-[26px] sm:text-[30px] font-extrabold text-[#1E3A8A] leading-tight tracking-tight">
        {stat.value}
      </div>
      <div className="mt-1 text-[12px] text-[#6B7280] font-medium leading-snug">
        {stat.label}
      </div>
    </div>
  );
}

// Dùng tên file ASCII-safe (đã copy từ "Hội thảo/Hội thảo_hero.jpg" v.v.)
const HERO_SLIDES = [
  {
    src: '/assets/hero-launch.jpg',
    title: 'Lễ ký kết & Ra mắt giải pháp',
    desc: 'Hệ thống Camera AI điểm danh trường học chính thức ra mắt đối tác.',
  },
  {
    src: '/assets/hero-training.jpg',
    title: 'Tập huấn & Chuyển giao công nghệ',
    desc: 'Đào tạo quy trình kỹ thuật, khảo sát và lắp đặt thực tế cho đại lý.',
  },
  {
    src: '/assets/hero-conference.jpg',
    title: 'Hội nghị đối tác chiến lược',
    desc: 'Đột phá thu nhập thụ động với cơ chế chia sẻ doanh thu 70/30 hấp dẫn hàng đầu thị trường, cam kết đồng hành và bảo vệ quyền lợi đối tác trọn đời.',
  },
  {
    src: '/assets/hero-deployment.jpg',
    title: 'Triển khai lắp đặt thực tế',
    desc: 'Giải pháp đã được bàn giao và vận hành ổn định tại hơn 250+ trường học.',
  },
];

// Scroll indicator arrow SVG
function ScrollIndicator() {
  return (
    <ScrollNext href="#cong-nghe" />
  );
}

export default function HeroSection() {
  const statsRef = useFadeUpChildren(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImgError = (index) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="hero"
      className="landing-section snap-section page-home flex flex-col"
      style={{ minHeight: 'calc(100vh - 76px)', scrollMarginTop: 0 }}
    >
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full
        flex flex-col justify-center py-6 sm:py-8 lg:py-10">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-5">

          {/* LEFT: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5
              bg-white border border-[#E5E7EB] rounded-full mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
              <span className="text-[11.5px] font-semibold text-[#A855F7] tracking-wide uppercase">
                Cơ hội hợp tác &amp; nhượng quyền khai thác
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold
              text-[#0F172A] leading-[1.15] tracking-tight mb-5">
              Nhượng quyền<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#60A5FA]">Camera AI</span> điểm danh<br />
              trường học
            </h1>

            <p className="text-[15px] text-[#4B5563] leading-relaxed mb-8 max-w-[480px]">
              Mô hình an ninh trường học ứng dụng AI, đã triển khai thực tế tại nhiều địa phương,
              có quy trình chuyển giao và cơ chế doanh thu rõ ràng cho đối tác.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#lien-he"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#lien-he');
                  scrollToLandingTarget(target);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 btn-brand-primary text-white font-semibold text-[14px] rounded-full"
              >
                Nhận hồ sơ hợp tác
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#doanh-thu"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#doanh-thu');
                  scrollToLandingTarget(target);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white
                  border border-[#E5E7EB] text-[#374151] font-semibold text-[14px] rounded-full
                  hover:border-[#A855F7] hover:text-[#A855F7] hover:-translate-y-px
                  transition-all duration-200"
              >
                Xem mô hình doanh thu
              </a>
            </div>
          </div>

          {/* RIGHT: Slideshow */}
          <div className="relative mt-8 lg:mt-0">
            {/* Border box: solid #E5E7EB, bo góc 20px, shadow nhẹ */}
            <div className="rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.10)] overflow-hidden">
              <div className="bg-slate-900 aspect-[4/3] relative">
                {HERO_SLIDES.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  >
                    {imgErrors[index] ? (
                      /* Fallback khi ảnh lỗi */
                      <div className="w-full h-full flex flex-col items-center justify-center
                        bg-[#1E3A8A] text-white gap-3 px-6">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <rect x="4" y="12" width="32" height="22" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" />
                          <circle cx="20" cy="23" r="6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                          <path d="M14 12V10a4 4 0 014-4h4a4 4 0 014 4v2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
                        </svg>
                        <div className="text-[15px] font-semibold text-center leading-snug">{slide.title}</div>
                        <div className="text-[12px] text-slate-300 text-center">{slide.desc}</div>
                      </div>
                    ) : (
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImgError(index)}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    )}

                    {/* Overlay gradient + caption — chỉ khi ảnh hiển thị */}
                    {!imgErrors[index] && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20
                          to-transparent pointer-events-none" />
                        <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                          <div className="text-[10px] font-bold uppercase tracking-wider
                            text-blue-300 mb-1">Hình ảnh thực tế</div>
                          <div className="text-[15px] sm:text-[17px] font-bold leading-snug">
                            {slide.title}
                          </div>
                          <div className="text-[12px] text-slate-300 mt-1 line-clamp-2">
                            {slide.desc}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {/* Dots chuyển slide */}
                <div className="absolute top-4 right-4 flex gap-1.5 z-30
                  bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                  {HERO_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-3.5' : 'bg-white/40 w-1.5 hover:bg-white/70'
                        }`}
                      aria-label={`Chuyển sang ảnh ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-30">
                  <div
                    key={currentSlide}
                    className="h-full bg-white/60 animate-slide-progress"
                    style={{ animationDuration: '5000ms' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {heroStats.map((stat, i) => (
            <div key={i} className={`fade-up fade-up-delay-${i + 1}`}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — bottom của hero */}
      <div className="pb-8 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}
