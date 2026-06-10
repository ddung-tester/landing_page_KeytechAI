import { useEffect, useRef } from 'react';
import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const VIDEO_SRC = '/assets/video_show_cong_nghe.mp4';

const TECH_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="13" y="1" width="6" height="6" rx="1.5" stroke="#FFFFFF" strokeWidth="1.3" strokeDasharray="1.5 1.5" />
        <path d="M14.5 3.5l1 1 1.5-1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Nhận diện khuôn mặt tức thì',
    desc: 'Học sinh bước qua cổng — hệ thống ghi nhận, phụ huynh nhận tin ngay.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a5 5 0 015 5v2l1.5 2.5H3.5L5 9V7a5 5 0 015-5z" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M8 14.5a2 2 0 004 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15.5" cy="5.5" r="2.5" fill="#FFFFFF" />
        <path d="M14.5 5.5l.7.7 1.3-1.3" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Thông báo realtime tới phụ huynh',
    desc: 'App miễn phí cho phụ huynh. Đến trường, tan học, ra khỏi trường — tức thì.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="2.5" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect x="5" y="11" width="2.5" height="4" rx="0.4" fill="#FFFFFF" opacity="0.4" />
        <rect x="8.75" y="8" width="2.5" height="7" rx="0.4" fill="#FFFFFF" opacity="0.7" />
        <rect x="12.5" y="5" width="2.5" height="10" rx="0.4" fill="#FFFFFF" />
      </svg>
    ),
    title: 'Dashboard quản trị tập trung',
    desc: 'Sĩ số, điểm danh, báo cáo — nhà trường xem trần một màn hình.',
  },
];

export default function TechnologySection({ id }) {
  const titleRef = useFadeUp();
  const cardsRef = useFadeUpChildren();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play video only when it is close to entering or is inside the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            // Catch error if play request is interrupted or blocked by browser autoplay policy
            console.log('Video autoplay interrupted or deferred:', err);
          });
        } else {
          video.pause();
        }
      },
      {
        root: null,
        rootMargin: '150px 0px', // Buffer to start loading/playing 150px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-white border-t border-[#EEF2F7] flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div ref={titleRef} className="fade-up section-header">
          <span className="section-eyebrow" style={{ color: '#2563EB' }}>CÔNG NGHỆ LÕI</span>
          <h2 className="section-title">Hệ thống hoàn chỉnh — Bàn giao trọn gói, nhà trường vận hành ngay</h2>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-6 lg:gap-10 items-center">

          {/* LEFT: Feature cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4.5">
            {TECH_FEATURES.map((feat, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} group card-standard flex flex-col`}
                style={{
                  '--card-border': '#DBEAFE',
                  '--card-hover-border': '#2563EB'
                }}
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] flex items-center justify-center
                  mb-3.5 group-hover:scale-105 transition-transform duration-300 shadow-[0_3px_10px_rgba(37,99,235,0.2)]">
                  {feat.icon}
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0F172A] mb-1.5 leading-snug">{feat.title}</h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#4B5563] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Video */}
          <div className="flex items-center justify-center">
            <div
              className="video-container w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_4px_24px_rgba(30,58,138,0.08)]"
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                loop
                muted
                playsInline
                preload="auto"
                className="w-full block"
                style={{
                  minHeight: 'clamp(280px, 42vh, 480px)',
                  objectFit: 'cover',
                  transform: 'translate3d(0,0,0)',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>

        </div>

        <ScrollNext href="#kiem-chung" />
      </div>
    </section>
  );
}
