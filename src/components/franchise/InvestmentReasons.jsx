import ScrollNext from './ScrollNext';

const SCALE = [
  { schools: '10 trường', value: '~1,4 tỷ' },
  { schools: '20 trường', value: '~2,8 tỷ' },
  { schools: '50 trường', value: '~7,0 tỷ' },
];

export default function InvestmentReasons({ id = 'co-hoi-doanh-thu' }) {
  return (
    <section
      id={id}
      aria-labelledby="investment-revenue-title"
      className="landing-section snap-section investment-image-section border-t border-[#EEF2F7] relative overflow-hidden"
    >
      <span id="co-hoi" className="merged-section-anchor" aria-hidden="true" />
      <span id="doanh-thu" className="merged-section-anchor" aria-hidden="true" />

      <div className="investment-merged-overlay" />

      <div className="investment-merged-content">
        <aside className="investment-revenue-panel">
          <div className="investment-panel-eyebrow">Cơ hội & doanh thu</div>
          <h2 id="investment-revenue-title" style={{ marginBottom: 24 }}>
            Khai thác trường học, tạo dòng tiền bền vững
          </h2>

          <div className="investment-school-card" style={{ marginBottom: 20 }}>
            <span>Ước tính doanh thu / trường / năm</span>
            <div>
              <p>Tổng doanh thu</p>
              <strong className="numeric-display">200 triệu</strong>
            </div>
            <div>
              <p>Đối tác nhận về</p>
              <strong className="numeric-display" style={{ color: '#4ADE80' }}>140 triệu</strong>
            </div>
          </div>

          <div className="investment-scale-list">
            {SCALE.map((item) => (
              <div key={item.schools}>
                <span>{item.schools}</span>
                <strong className="numeric-display">{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <ScrollNext href="#keytech" />
    </section>
  );
}
