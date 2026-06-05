import { useState } from 'react';
import { useFadeUp } from '../../hooks/useFadeUp';

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

const TRUST_ITEMS = [
  { value: '250+', label: 'Trường học đã triển khai' },
  { value: '70%', label: 'Doanh thu thực thu cho đại lý' },
  { value: '5 năm', label: 'Bảo hành camera AI' },
];

const OFFER_LIST = [
  'Hồ sơ hợp tác chi tiết & mô hình doanh thu tham chiếu',
  'Tư vấn khu vực triển khai và danh mục trường tiềm năng',
  'Hỗ trợ kỹ thuật, đào tạo quy trình và vận hành đầy đủ',
];

export default function FinalCTA() {
  const leftRef = useFadeUp();
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
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    console.log('[FinalCTA] Form submission:', form);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="page-auth border-t border-[#E2E8F0] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">

          {/* LEFT: Trust content */}
          <div ref={leftRef} className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0]
              rounded-full text-[11px] font-semibold text-[#1E3A8A] uppercase tracking-widest mb-4 shadow-sm">
              Đăng ký tư vấn
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] leading-tight mb-3">
              Sẵn sàng khai thác thị trường Camera AI điểm danh tại địa phương?
            </h2>
            <p className="text-[14px] text-[#4B5563] leading-relaxed mb-6">
              Nhận hồ sơ hợp tác, mô hình doanh thu tham chiếu và tư vấn khu vực phù hợp với năng lực của bạn.
            </p>

            {/* Offer list */}
            <div className="space-y-3 mb-6">
              {OFFER_LIST.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center mt-0.5 shadow-sm">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[13.5px] text-[#374151] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-4 flex-wrap">
              {TRUST_ITEMS.map((s, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 shadow-sm">
                  <div className="text-[22px] font-extrabold text-[#1E3A8A] leading-none">{s.value}</div>
                  <div className="text-[11px] text-[#6B7280] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div ref={formRef} className="fade-up fade-up-delay-2">
            {submitted ? (
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5.5 5.5L22 8" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-[#166534] mb-2">Đã nhận đăng ký!</h3>
                <p className="text-[14px] text-[#15803D] leading-relaxed">
                  Cảm ơn bạn. Đội ngũ Keytech AI sẽ liên hệ tư vấn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-[0_8px_30px_rgba(30,58,138,0.06)]"
              >
                <div className="text-[15px] font-bold text-[#0F172A] mb-5">Thông tin liên hệ</div>

                {/* Họ tên */}
                <div className="mb-4">
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5" htmlFor="cta-name">
                    Họ tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg text-[14px] text-[#0F172A] placeholder-[#9CA3AF]
                      outline-none transition-colors duration-200
                      focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]
                      ${errors.name ? 'border-red-400' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.name && <p className="mt-1 text-[11.5px] text-red-500">{errors.name}</p>}
                </div>

                {/* Số điện thoại */}
                <div className="mb-4">
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5" htmlFor="cta-phone">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0901 234 567"
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg text-[14px] text-[#0F172A] placeholder-[#9CA3AF]
                      outline-none transition-colors duration-200
                      focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]
                      ${errors.phone ? 'border-red-400' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.phone && <p className="mt-1 text-[11.5px] text-red-500">{errors.phone}</p>}
                </div>

                {/* Khu vực */}
                <div className="mb-5">
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5" htmlFor="cta-region">
                    Khu vực quan tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="cta-region"
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg text-[14px]
                      outline-none transition-colors duration-200 appearance-none cursor-pointer
                      focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#EFF6FF]
                      ${errors.region ? 'border-red-400' : 'border-[#E5E7EB]'}
                      ${!form.region ? 'text-[#9CA3AF]' : 'text-[#0F172A]'}`}
                  >
                    <option value="" disabled>Chọn tỉnh/thành phố...</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  {errors.region && <p className="mt-1 text-[11.5px] text-red-500">{errors.region}</p>}
                </div>

                {/* Submit */}
                 <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 btn-brand-primary transition-all duration-200 text-white font-semibold text-[14.5px] rounded-full
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" strokeDasharray="30" strokeDashoffset="10"/>
                      </svg>
                      Đang gửi...
                    </span>
                  ) : 'Đăng ký nhận tư vấn'}
                </button>

                <p className="mt-3 text-[11.5px] text-[#9CA3AF] text-center">
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
