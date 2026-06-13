import { useEffect } from 'react';
import Header from '../components/franchise/Header';
import HeroStory from '../components/franchise/HeroStory';
import InvestmentReasons from '../components/franchise/InvestmentReasons';
import TechnologySection from '../components/franchise/TechnologySection';
import AttendanceSuccessSection from '../components/franchise/AttendanceSuccessSection';
import KeytechProof from '../components/franchise/KeytechProof';
import PartnerRoadmap from '../components/franchise/PartnerRoadmap';
import SupportSection from '../components/franchise/SupportSection';
import PartnerTarget from '../components/franchise/PartnerTarget';
import FinalCTA from '../components/franchise/FinalCTA';
import Footer from '../components/franchise/Footer';
import { useFixedCanvasScale } from '../hooks/useFixedCanvasScale';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function FranchiseLandingPage() {
  useSmoothScroll();
  useFixedCanvasScale();

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
    <div className="landing-canvas">
      <Header />

      <main className="landing-main">
        <HeroStory id="hero" />
        <TechnologySection id="cong-nghe" />
        <AttendanceSuccessSection id="diem-danh-thanh-cong" />
        <InvestmentReasons id="co-hoi-doanh-thu" />
        <KeytechProof id="keytech" />
        <PartnerRoadmap id="lo-trinh" />
        <SupportSection id="ho-tro" />
        <PartnerTarget id="doi-tuong" />
        <FinalCTA id="lien-he" />
        <Footer />
      </main>
    </div>
  );
}
