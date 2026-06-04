import Header from '../components/franchise/Header';
import HeroSection from '../components/franchise/HeroSection';
import BusinessOpportunity from '../components/franchise/BusinessOpportunity';
import ProofSection from '../components/franchise/ProofSection';
import DeploymentTimeline from '../components/franchise/DeploymentTimeline';
import SolutionSection from '../components/franchise/SolutionSection';
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

export default function FranchiseLandingPage() {
  return (
    <>
      {/* 1. Header — sticky top */}
      <Header />

      <main>
        {/* 2. Hero + Stats */}
        <HeroSection />

        {/* 3. Cơ hội thị trường */}
        <BusinessOpportunity />

        {/* 4. Mô hình đã được kiểm chứng */}
        <ProofSection />

        {/* 5. Timeline ảnh triển khai thực tế */}
        <DeploymentTimeline />

        {/* 6. Giải pháp gồm những gì */}
        <SolutionSection />

        {/* 7. Mô hình hợp tác 3 bên */}
        <PartnershipModel />

        {/* 8. Mô hình doanh thu 70/30 */}
        <RevenueModel />

        {/* 9. Quy mô đầu tư tham chiếu */}
        <InvestmentOverview />

        {/* 10. Quy trình triển khai 8 bước */}
        <ProcessTimeline />

        {/* 11. Lộ trình 180 ngày */}
        <PartnerRoadmap />

        {/* 12. Hỗ trợ đại lý */}
        <SupportSection />

        {/* 13. Điều kiện trở thành đại lý */}
        <PartnerRequirements />

        {/* 14. Bảo mật dữ liệu */}
        <section id="security">
          <DataSecuritySection />
        </section>

        {/* 15. Final CTA */}
        <FinalCTA />
      </main>

      {/* 16. Footer */}
      <Footer />
    </>
  );
}
