import { useEffect, useState } from 'react';
import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const PD = "'Playfair Display', Georgia, serif";
const BV = "'Be Vietnam Pro', sans-serif";

const METRICS = [
  { val: '100+', label: 'Trường đã chạy', color: '#2563EB' },
  { val: '5 năm', label: 'Bảo hành', color: '#0EA5E9' },
  { val: 'A-Z', label: 'Đồng hành', color: '#0EA5E9' },
  { val: '70/30', label: 'Chia minh bạch', color: '#0891B2' },
];

const PROOF = [
  'Camera AI nhận diện nhanh, chính xác.',
  'Phần mềm và app đồng bộ.',
  'Doanh thu đối soát rõ ràng.',
  'Bàn giao gọn trong 30 ngày.',
];

const SLIDES = [
  {
    src: '/assets/lắp đặt tại sân trường.jpg',
    eyebrow: 'Hình ảnh thực tế',
    title: 'Camera AI tại trường học',
    desc: 'Lắp đặt gọn, vận hành ổn, nhà trường dễ làm quen.',
  },
  {
    src: '/assets/hero-launch.jpg',
    eyebrow: 'Khởi động dự án',
    title: 'Bàn giao mô hình triển khai',
    desc: 'Đối tác nắm quy trình, Keytech đồng hành từ ngày đầu.',
  },
  {
    src: '/assets/hero-training.jpg',
    eyebrow: 'Đào tạo vận hành',
    title: 'Chuyển giao đội ngũ',
    desc: 'Hướng dẫn vận hành hệ thống và quy trình làm việc với trường.',
  },
  {
    src: '/assets/hero-deployment.jpg',
    eyebrow: 'Triển khai thực địa',
    title: 'Lắp đặt tại điểm trường',
    desc: 'Camera, phần mềm và app được đồng bộ trong một quy trình.',
  },
  {
    src: '/assets/hero-conference.jpg',
    eyebrow: 'Kết nối đối tác',
    title: 'Mở rộng cùng Keytech',
    desc: 'Chia sẻ mô hình, chuẩn hóa cách triển khai và khai thác.',
  },
];

export default function KeytechProof({ id = 'keytech' }) {
  const titleRef = useFadeUp();
  const listRef = useFadeUpChildren(0.08);
  const metricsRef = useFadeUpChildren(0.08);
  const carouselRef = useFadeUp();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % SLIDES.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = SLIDES[activeSlide];

  return (
    <section
      id={id}
      className="landing-section snap-section bg-section-proof border-t border-[#EEF2F7] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="keytech-proof-wrap">
        <div ref={titleRef} className="fade-up keytech-proof-header">
          <span>Vì sao chọn Keytech</span>
          <h2 style={{ fontFamily: PD }}>Không chỉ là ý tưởng — Chúng tôi kiến tạo thực tế</h2>
        </div>

        <div className="keytech-proof-layout">
          <div ref={carouselRef} className="fade-up fade-up-delay-1 keytech-proof-carousel">
            <div className="keytech-proof-frame">
              {SLIDES.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.title}
                  className={`keytech-proof-slide ${index === activeSlide ? 'is-active' : ''}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}

              <div className="keytech-proof-shade" />

              <div className="keytech-proof-caption">
                <div className="keytech-proof-pill">
                  <span />
                  {currentSlide.eyebrow}
                </div>
                <h3 style={{ fontFamily: PD }}>{currentSlide.title}</h3>
                <p>{currentSlide.desc}</p>
              </div>

              <div className="keytech-proof-dots">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    className={index === activeSlide ? 'is-active' : ''}
                    aria-label={`Xem ảnh ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="keytech-proof-content">
            <div ref={metricsRef} className="keytech-proof-metrics">
              {METRICS.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`fade-up fade-up-delay-${index + 1} keytech-proof-metric`}
                >
                  <div
                    className="numeric-display"
                    style={{
                      color: metric.color,
                    }}
                  >
                    {metric.val}
                  </div>
                  <span style={{ fontFamily: BV }}>{metric.label}</span>
                </div>
              ))}
            </div>

            <div ref={listRef} className="keytech-proof-list">
              {PROOF.map((item, index) => (
                <div
                  key={item}
                  className={`fade-up fade-up-delay-${index + 1} keytech-proof-item`}
                >
                  <span>
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p style={{ fontFamily: BV }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollNext href="#lo-trinh" />
      </div>
    </section>
  );
}
