import { useLayoutEffect } from 'react';
import Header from '../components/franchise/Header';
import HeroSection from '../components/franchise/HeroSection';
import ProofSection from '../components/franchise/ProofSection';
import DeploymentTimeline from '../components/franchise/DeploymentTimeline';
import TechnologySection from '../components/franchise/TechnologySection';
import RevenueModel from '../components/franchise/RevenueModel';
import InvestmentOverview from '../components/franchise/InvestmentOverview';
import PartnerRoadmap from '../components/franchise/PartnerRoadmap';
import SupportSection from '../components/franchise/SupportSection';

import FinalCTA from '../components/franchise/FinalCTA';
import Footer from '../components/franchise/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { scrollToLandingTarget } from '../utils/scrollToLandingTarget';

export default function FranchiseLandingPage() {
  useSmoothScroll();

  return (
    <>
      {/* 1. Header — sticky top */}
      <Header />

      <main className="landing-main">
        {/* 2. Hero */}
        <HeroSection id="hero" />

        {/* 3. Công nghệ Camera AI điểm danh */}
        <TechnologySection id="cong-nghe" />

        {/* 4. Dấu ấn triển khai thực tế — gallery ảnh */}
        <DeploymentTimeline id="truong-da-trien-khai" />

        {/* 5. Mô hình đã được kiểm chứng */}
        <ProofSection id="kiem-chung" />

        {/* 6. Mô hình doanh thu 70/30 */}
        <RevenueModel id="doanh-thu" />

        {/* 7. Quy mô đầu tư & tiềm năng danh mục */}
        <InvestmentOverview id="dau-tu" />

        {/* 8. Hỗ trợ đại lý */}
        <SupportSection id="ho-tro" />

        {/* 9. Lộ trình 180 ngày */}
        <PartnerRoadmap id="lo-trinh" />

        {/* 12. Final CTA */}
        <FinalCTA id="lien-he" />

        {/* 13. Footer */}
        <Footer />
      </main>
    </>
  );
}
