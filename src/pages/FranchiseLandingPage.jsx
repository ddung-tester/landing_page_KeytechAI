import { useEffect } from 'react';
import Header from '../components/franchise/Header';
import HeroStory from '../components/franchise/HeroStory';
import InvestmentReasons from '../components/franchise/InvestmentReasons';
import TechnologySection from '../components/franchise/TechnologySection';
import RevenueModel from '../components/franchise/RevenueModel';
import KeytechProof from '../components/franchise/KeytechProof';
import PartnerRoadmap from '../components/franchise/PartnerRoadmap';
import SupportSection from '../components/franchise/SupportSection';
import PartnerTarget from '../components/franchise/PartnerTarget';
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
        <HeroStory id="hero" />
        <InvestmentReasons id="co-hoi" />
        <TechnologySection id="cong-nghe" />
        <RevenueModel id="doanh-thu" />
        <KeytechProof id="keytech" />
        <PartnerRoadmap id="lo-trinh" />
        <SupportSection id="ho-tro" />
        <PartnerTarget id="doi-tuong" />
        <FinalCTA id="lien-he" />
        <Footer />
      </main>
    </>
  );
}
