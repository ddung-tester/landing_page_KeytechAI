import { useEffect, useRef } from 'react';
import { useFadeUp } from '../../hooks/useFadeUp';
import ScrollNext from './ScrollNext';

export default function RevenueModel() {
  const titleRef = useFadeUp();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bar70 = section.querySelector('#bar-70');
          const bar30 = section.querySelector('#bar-30');
          if (bar70) bar70.style.width = '70%';
          if (bar30) bar30.style.width = '30%';
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="page-about border-t border-[#DDD6FE] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Heading */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DDD6FE]
            rounded-full text-[11px] font-semibold text-[#A855F7] uppercase tracking-widest mb-3">
            Mô hình doanh thu
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0F172A] leading-tight mb-3">
            Đại lý hưởng <span className="text-[#166534]">70%</span> doanh thu thực thu
          </h2>
          <p className="text-[14px] text-[#4B5563] leading-relaxed">
            Đại lý tập trung phát triển trường học và chăm sóc khách hàng địa phương,
            VNS/Keytech đồng hành nền tảng công nghệ, phần mềm, server/cloud và quy trình vận hành.
          </p>
        </div>

        {/* 2-col cards — stretch để bằng chiều cao nhau */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-5 items-stretch">

          {/* LEFT: Revenue split bars */}
          <div className="bg-white border border-[#DDD6FE] rounded-xl p-6 flex flex-col justify-center gap-5">
            <div className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-widest">
              Phân chia doanh thu thực thu
            </div>

            {/* 70% */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[14px] font-semibold text-[#166534]">Đại lý nhận quyền</span>
                <span className="text-[28px] font-extrabold text-[#166534] leading-none">70%</span>
              </div>
              <div className="h-3 bg-[#DCFCE7] rounded-full overflow-hidden">
                <div
                  id="bar-70"
                  className="h-full bg-[#166534] rounded-full transition-all duration-[1.3s] ease-out"
                  style={{ width: '0%' }}
                />
              </div>
            </div>

            {/* 30% */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[14px] font-semibold text-[#64748B]">VNS / Keytech</span>
                <span className="text-[28px] font-extrabold text-[#64748B] leading-none">30%</span>
              </div>
              <div className="h-3 bg-[#F1F5F9] rounded-full overflow-hidden border border-[#E5E7EB]">
                <div
                  id="bar-30"
                  className="h-full bg-[#94A3B8] rounded-full transition-all duration-[1.3s] ease-out delay-300"
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Example table */}
          <div className="bg-white border border-[#DDD6FE] rounded-xl overflow-hidden flex flex-col">
            {/* Card header */}
            <div className="bg-gradient-to-r from-[#D946EF] to-[#60A5FA] px-6 py-4 shadow-sm">
              <div className="text-[10.5px] font-bold text-white uppercase tracking-widest mb-0.5 opacity-90">
                Ví dụ tham chiếu
              </div>
              <div className="text-[15px] font-bold text-white">1 trường · 1.000 học sinh</div>
            </div>

            {/* Rows */}
            <div className="flex-1 divide-y divide-[#F1F5F9]">
              {[
                { label: 'Phí tham chiếu', value: '20.000đ / học sinh / tháng' },
                { label: 'Doanh thu / tháng', value: '20.000.000đ' },
                { label: 'Doanh thu / 10 tháng', value: '200.000.000đ' },
                { label: 'Đại lý hưởng (70%)', value: '140.000.000đ / năm học', green: true },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 px-4 sm:px-6 py-3 sm:py-3.5 ${row.green ? 'bg-[#F0FDF4]' : ''}`}
                >
                  <span className={`text-[13px] ${row.green ? 'font-semibold text-[#166534]' : 'text-[#6B7280]'}`}>
                    {row.label}
                  </span>
                  <span className={`text-[13.5px] font-bold tabular-nums sm:text-right ${row.green ? 'text-[#166534]' : 'text-[#0F172A]'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <ScrollNext href="#dau-tu" />
      </div>
    </section>
  );
}
