import { useEffect, useRef } from 'react';
import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const BV = "'Be Vietnam Pro', sans-serif";
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
    title: 'Nhận diện chạm mắt',
    desc: 'Quét nhanh 0.2s, chính xác và an toàn tuyệt đối.',
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
    title: 'Thông báo tức thì',
    desc: 'Gửi ảnh check-in thực tế, cha mẹ trọn an lòng.',
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
    title: 'Quản trị tinh gọn',
    desc: 'Một màn hình quản lý, tối ưu mọi nguồn lực.',
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
      className="landing-section snap-section bg-section-tech bg-tech-grid border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="tech-show-wrap">

        <div ref={titleRef} className="fade-up tech-show-header" style={{ marginBottom: 30 }}>
          <span style={{
            fontFamily: BV, fontSize: 18, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563EB',
            display: 'block', marginBottom: 10,
          }}>
            CÔNG NGHỆ LÕI
          </span>
          <h2 style={{
            fontFamily: BV, fontWeight: 600,
            fontSize: 'clamp(24px, 2.4vw, 38px)',
            color: '#0F172A', lineHeight: 1.22,
            letterSpacing: '-0.02em', margin: '0 auto',
            maxWidth: '800px'
          }}>
            Cấu trúc lõi thông minh — Tự động hóa vận hành
          </h2>
        </div>

        <div className="tech-show-layout">

          {/* LEFT: Video */}
          <div className="tech-show-media-shell">
            <div
              className="tech-show-media"
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                loop
                muted
                playsInline
                preload="auto"
                className="tech-show-video"
                style={{
                  transform: 'translate3d(0,0,0)',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>

          {/* RIGHT: Feature cards */}
          <div ref={cardsRef} className="tech-show-panel">
            {TECH_FEATURES.map((feat, i) => (
              <div
                key={i}
                className={`fade-up fade-up-delay-${i + 1} group tech-show-card`}
              >
                <div className="tech-show-icon">
                  {feat.icon}
                </div>
                <div className="tech-show-card-copy">
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <ScrollNext href="#co-hoi-doanh-thu" />
      </div>
    </section>
  );
}
