import { useEffect, useState } from 'react';
import { useFadeUp, useFadeUpChildren } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

const MODEL_STATS = [
  { value: '250+', label: 'Trường học đã triển khai' },
  { value: '70/30', label: 'Cơ chế chia sẻ doanh thu' },
  { value: '1,4 tỷ/năm', label: 'Doanh thu tham chiếu theo mô hình' },
  { value: '5 năm', label: 'Bảo hành thiết bị' },
];

const PROOF_SLIDES = [
  {
    src: '/assets/hero-launch.jpg',
    title: 'Chuyển giao & vận hành thực tế',
    desc: 'Đối tác được đào tạo quy trình khảo sát, lắp đặt, vận hành và khai thác dịch vụ tại địa phương.',
  },
  {
    src: '/assets/hero-training.jpg',
    title: 'Đào tạo quy trình triển khai',
    desc: 'Từ khảo sát cổng trường, bố trí thiết bị đến hướng dẫn nhà trường và phụ huynh sử dụng hệ thống.',
  },
  {
    src: '/assets/hero-conference.jpg',
    title: 'Làm việc cùng hệ sinh thái đối tác',
    desc: 'Các điểm triển khai được đặt trong một quy trình hợp tác có trách nhiệm, dữ liệu và chăm sóc sau bán hàng.',
  },
  {
    src: '/assets/hero-deployment.jpg',
    title: 'Triển khai tại trường học',
    desc: 'Hệ thống đã được bàn giao, vận hành và tối ưu theo điều kiện thực tế của từng điểm trường.',
  },
];

function ModelStatCard({ stat }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-4 text-center shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
      <div className="text-[26px] sm:text-[30px] font-extrabold leading-none text-[#2563EB]">
        {stat.value}
      </div>
      <div className="mt-2 text-[12.5px] font-semibold leading-snug text-[#64748B]">
        {stat.label}
      </div>
    </div>
  );
}

export default function ExistingModelSection({ id = 'kiem-chung' }) {
  const titleRef = useFadeUp();
  const statsRef = useFadeUpChildren(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROOF_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id={id}
      className="landing-section snap-section bg-white flex flex-col justify-center"
      style={{ scrollMarginTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={titleRef} className="fade-up section-header section-header--row">
          <div className="section-left">
            <span className="section-eyebrow" style={{ color: '#2563EB' }}>ĐÃ KIỂM CHỨNG THỰC TẾ</span>
            <h2 className="section-title">
              Không phải ý tưởng — đây là mô hình đang vận hành tại 250+ trường mỗi ngày
            </h2>
          </div>
          <div className="section-right">
            <p className="section-desc">
              Từ Hà Nội đến các tỉnh, hàng nghìn phụ huynh đang nhận thông báo điểm danh của con
              qua hệ thống Keytech. Không phải thí điểm — đây là thực tế vận hành ổn định.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-6 lg:gap-8 items-center">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111827]">
              {PROOF_SLIDES.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  {imgErrors[index] ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#1E3A8A] px-6 text-center text-white">
                      <div className="text-[16px] font-bold">{slide.title}</div>
                      <div className="max-w-[420px] text-[13px] text-blue-100">{slide.desc}</div>
                    </div>
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      onError={() => setImgErrors((prev) => ({ ...prev, [index]: true }))}
                    />
                  )}

                  {!imgErrors[index] && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/78 via-[#0F172A]/16 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                        <div className="mb-1 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-blue-200">
                          Hình ảnh triển khai
                        </div>
                        <div className="text-[18px] font-extrabold leading-tight">{slide.title}</div>
                        <div className="mt-1 max-w-[680px] text-[12.5px] leading-relaxed text-slate-200">{slide.desc}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}

              <div className="absolute right-4 top-4 z-30 flex gap-1.5 rounded-full bg-black/35 px-2.5 py-1.5 backdrop-blur-sm">
                {PROOF_SLIDES.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-4 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/75'}`}
                    aria-label={`Xem hình triển khai ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4">
              {MODEL_STATS.map((stat, index) => (
                <div key={stat.label} className={`fade-up fade-up-delay-${index + 1}`}>
                  <ModelStatCard stat={stat} />
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl border border-[#E5E7EB] bg-white/75 px-4 py-3 text-[12.5px] leading-relaxed text-[#64748B]">
              Số liệu dùng để tham khảo mô hình hợp tác, phụ thuộc vào khu vực,
              quy mô trường và năng lực triển khai của đối tác.
            </p>
          </div>
        </div>

        <ScrollNext href="#cong-nghe" />
      </div>
    </section>
  );
}
