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

/**
 * Wrapper tạo scroll-margin-top đồng nhất cho mọi section.
 * Anchor id được đặt tại đây để không ảnh hưởng layout nội bộ.
 */
function Section({ id, children, snap = true }) {
  return (
    <section
      id={id}
      className={`landing-section ${snap ? 'snap-section' : ''}`}
      style={{ scrollMarginTop: 0 }}
    >
      {children}
    </section>
  );
}

export default function FranchiseLandingPage() {
  useSmoothScroll();

  return (
    <>
      {/* 1. Header — sticky top */}
      <Header />

      <main className="landing-main">
        {/* 2. Hero — id="tong-quan" được set bên trong HeroSection */}
        <HeroSection />

        {/* 3. Công nghệ Camera AI điểm danh */}
        <Section id="cong-nghe">
          <TechnologySection />
        </Section>

        {/* 4. Dấu ấn triển khai thực tế — gallery ảnh */}
        <Section id="truong-da-trien-khai">
          <DeploymentTimeline />
        </Section>

        {/* 5. Mô hình đã được kiểm chứng */}
        <Section id="kiem-chung">
          <ProofSection />
        </Section>

        {/* 6. Mô hình doanh thu 70/30 */}
        <Section id="doanh-thu">
          <RevenueModel />
        </Section>

        {/* 7. Quy mô đầu tư & tiềm năng danh mục */}
        <Section id="dau-tu">
          <InvestmentOverview />
        </Section>

        {/* 8. Hỗ trợ đại lý */}
        <Section id="ho-tro">
          <SupportSection />
        </Section>

        {/* 9. Lộ trình 180 ngày */}
        <Section id="lo-trinh">
          <PartnerRoadmap />
        </Section>

        {/* 12. Final CTA */}
        <Section id="lien-he">
          <FinalCTA />
        </Section>
        {/* 13. Footer */}
        <Footer />
      </main>
    </>
  );
}
