import { useEffect } from 'react';
import Header from '../components/franchise/Header';
import HeroSection from '../components/franchise/HeroSection';
import MarketDemandSection from '../components/franchise/MarketDemandSection';
import TechnologySection from '../components/franchise/TechnologySection';
import DeploymentTimeline from '../components/franchise/DeploymentTimeline';
import PartnershipModel from '../components/franchise/PartnershipModel';
import RevenueModel from '../components/franchise/RevenueModel';
import InvestmentOverview from '../components/franchise/InvestmentOverview';
import SupportSection from '../components/franchise/SupportSection';
import FinalCTA from '../components/franchise/FinalCTA';
import Footer from '../components/franchise/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function FranchiseLandingPage() {
  useSmoothScroll();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return undefined;

    const timer = window.setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        window.dispatchEvent(new CustomEvent('lenis-scroll-to', {
          detail: { target, immediate: true },
        }));
      }
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="landing-main">
        <HeroSection id="hero" />
        <MarketDemandSection id="thi-truong" />
        <TechnologySection id="cong-nghe" />
        <DeploymentTimeline id="truong-da-trien-khai" />
        <PartnershipModel id="kiem-chung" />
        <RevenueModel id="doanh-thu" />
        <InvestmentOverview id="dau-tu" />
        <SupportSection id="ho-tro" />
        <FinalCTA id="lien-he" />
        <Footer />
      </main>
    </>
  );
}
