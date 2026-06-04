import { useState } from 'react';
import { useFadeUp } from '../../hooks/useFadeUp';

// TODO: Tích hợp API endpoint tại đây
// const API_ENDPOINT = '/api/franchise-inquiry';

const REGIONS = [
  "Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng",
  "Cần Thơ", "Bình Dương", "Đồng Nai", "An Giang",
  "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh",
  "Bến Tre", "Bình Định", "Bình Phước", "Bình Thuận",
  "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông",
  "Điện Biên", "Đồng Tháp", "Gia Lai", "Hà Giang",
  "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang",
  "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang",
  "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn",
  "Lào Cai", "Long An", "Nam Định", "Nghệ An",
  "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
  "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh",
  "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh",
  "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế",
  "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long",
  "Vĩnh Phúc", "Yên Bái", "Tỉnh/thành phố khác",
];

export default function FinalCTA() {
  const titleRef = useFadeUp();
  const formRef = useFadeUp();

  const [form, setForm] = useState({ name: '', phone: '', region: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Vui lòng nhập họ tên.';
    if (!form.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!/^(0|\+84)[3-9]\d{8}$/.test(form.phone.replace(/\s/g, ''))) {
      errs.phone = 'Số điện thoại không hợp lệ.';
    }
    if (!form.region) errs.region = 'Vui lòng chọn khu vực.';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    // TODO: Thay thế bằng API call thực tế
    // const res = await fetch(API_ENDPOINT, { method: 'POST', body: JSON.stringify(form) });
    console.log('[FinalCTA] Form submission:', form);

    // Giả lập delay API
    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <div ref={titleRef} className="fade-up text-center mb-12">
            <div className="text-[11px] font-semibold text-[#C039B4] uppercase tracking-widest mb-3">
              Đăng ký tư vấn
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#0F172A] leading-tight mb-4">
              Sẵn sàng phát triển thị trường<br className="hidden sm:block" />
              Camera AI điểm danh tại địa phương?
            </h2>
            <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-xl mx-auto">
              Nhận hồ sơ hợp tác, mô hình tài chính tham chiếu và tư vấn khu vực triển khai phù hợp.
            </p>
          </div>

          {/* Form card */}
          <div ref={formRef} className="fade-up fade-up-delay-2">
            {submitted ? (
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5.5 5.5L22 8" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-[#166534] mb-2">Đã nhận đăng ký!</h3>
                <p className="text-[14.5px] text-[#15803D] leading-relaxed">
                  Cảm ơn bạn. Đội ngũ Keytech AI sẽ liên hệ tư vấn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 sm:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">

                  {/* Họ tên */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#374151] mb-1.5" htmlFor="name">
                      Họ tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className={`w-full px-4 py-3 bg-white border rounded-lg text-[14px] text-[#0F172A] placeholder-[#9CA3AF]
                        outline-none transition-colors duration-200
                        focus:border-[#C039B4] focus:ring-2 focus:ring-[#FDF4FD]
                        ${errors.name ? 'border-red-400' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#374151] mb-1.5" htmlFor="phone">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0901 234 567"
                      className={`w-full px-4 py-3 bg-white border rounded-lg text-[14px] text-[#0F172A] placeholder-[#9CA3AF]
                        outline-none transition-colors duration-200
                        focus:border-[#C039B4] focus:ring-2 focus:ring-[#FDF4FD]
                        ${errors.phone ? 'border-red-400' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[12px] text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Khu vực */}
                <div className="mb-7">
                  <label className="block text-[13px] font-semibold text-[#374151] mb-1.5" htmlFor="region">
                    Khu vực quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="region"
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-lg text-[14px] text-[#0F172A]
                      outline-none transition-colors duration-200 appearance-none cursor-pointer
                      focus:border-[#C039B4] focus:ring-2 focus:ring-[#FDF4FD]
                      ${errors.region ? 'border-red-400' : 'border-[#E5E7EB]'}
                      ${!form.region ? 'text-[#9CA3AF]' : ''}`}
                  >
                    <option value="" disabled>Chọn tỉnh/thành phố...</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  {errors.region && (
                    <p className="mt-1 text-[12px] text-red-500">{errors.region}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-[#C039B4] to-[#4582F2] transition-all duration-300 hover:opacity-90 text-white font-semibold text-[15px] rounded-lg
                    hover:-translate-y-px hover:shadow-lg transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" strokeDasharray="30" strokeDashoffset="10"/>
                      </svg>
                      Đang gửi...
                    </span>
                  ) : (
                    'Đăng ký nhận tư vấn'
                  )}
                </button>

                <p className="mt-4 text-[12px] text-[#9CA3AF] text-center">
                  Thông tin của bạn được bảo mật và chỉ dùng cho mục đích liên hệ tư vấn.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
