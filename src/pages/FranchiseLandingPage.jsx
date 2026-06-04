import Header from '../components/franchise/Header';
import HeroSection from '../components/franchise/HeroSection';
import BusinessOpportunity from '../components/franchise/BusinessOpportunity';
import ProofSection from '../components/franchise/ProofSection';
import DeploymentTimeline from '../components/franchise/DeploymentTimeline';
import TechnologySection from '../components/franchise/TechnologySection';
import PartnershipModel from '../components/franchise/PartnershipModel';
import RevenueModel from '../components/franchise/RevenueModel';
import InvestmentOverview from '../components/franchise/InvestmentOverview';
import ProcessTimeline from '../components/franchise/ProcessTimeline';
import PartnerRoadmap from '../components/franchise/PartnerRoadmap';
import SupportSection from '../components/franchise/SupportSection';
import PartnerRequirements from '../components/franchise/PartnerRequirements';
import DataSecuritySection from '../components/franchise/DataSecuritySection';
import FinalCTA from '../components/franchise/FinalCTA';
import Footer from '../components/franchise/Footer';

/**
 * Wrapper tạo scroll-margin-top đồng nhất cho mọi section.
 * Anchor id được đặt tại đây để không ảnh hưởng layout nội bộ.
 */
function Section({ id, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: '64px' }}>
      {children}
    </section>
  );
}

export default function FranchiseLandingPage() {
  return (
    <>
      {/* 1. Header — sticky top */}
      <Header />

      <main>
        {/* 2. Hero — id="tong-quan" được set bên trong HeroSection */}
        <HeroSection />

        {/* 3. Cơ hội thị trường */}
        <Section id="opportunity">
          <BusinessOpportunity />
        </Section>

        {/* 4. Công nghệ Camera AI */}
        <Section id="technology">
          <TechnologySection />
        </Section>

        {/* 5. Mô hình đã được kiểm chứng */}
        <Section id="proof">
          <ProofSection />
        </Section>

        {/* 6. Triển khai thực tế — gallery ảnh */}
        <Section id="trien-khai">
          <DeploymentTimeline />
        </Section>

        {/* 7. Mô hình hợp tác 3 bên */}
        <Section id="partnership">
          <PartnershipModel />
        </Section>

        {/* 8. Mô hình doanh thu 70/30 */}
        <Section id="revenue">
          <RevenueModel />
        </Section>

        {/* 9. Quy mô đầu tư tham chiếu */}
        <Section id="investment">
          <InvestmentOverview />
        </Section>

        {/* 10. Quy trình triển khai 8 bước */}
        <Section id="process">
          <ProcessTimeline />
        </Section>

        {/* 11. Lộ trình 180 ngày */}
        <Section id="roadmap">
          <PartnerRoadmap />
        </Section>

        {/* 12. Hỗ trợ đại lý */}
        <Section id="support">
          <SupportSection />
        </Section>

        {/* 13. Điều kiện trở thành đại lý */}
        <Section id="requirements">
          <PartnerRequirements />
        </Section>

        {/* 14. Bảo mật dữ liệu */}
        <Section id="security">
          <DataSecuritySection />
        </Section>

        {/* 15. Final CTA */}
        <Section id="cta">
          <FinalCTA />
        </Section>
      </main>

      {/* 16. Footer */}
      <Footer />
    </>
  );
}
