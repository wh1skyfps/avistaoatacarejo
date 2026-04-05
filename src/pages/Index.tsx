import { useState, useCallback } from "react";
import avistaoLogo from "@/assets/avistao-logo.jpg";
import { Banner } from "@/components/ui/banner";
import IntroAnimation from "@/components/IntroAnimation";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TaxComparisonSection from "@/components/TaxComparisonSection";
import UrgencySection from "@/components/UrgencySection";
import SolutionSection from "@/components/SolutionSection";

import StoryboardSection from "@/components/StoryboardSection";
import AvistaoCardSection from "@/components/AvistaoCardSection";
import MultiBranchSection from "@/components/MultiBranchSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import BusinessBenefitsSection from "@/components/BusinessBenefitsSection";
import AppScreensSection from "@/components/AppScreensSection";
import MockupsSection from "@/components/MockupsSection";
import SimulatorSection from "@/components/SimulatorSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <main>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <Banner
        id="proposta-exclusiva"
        variant="rainbow"
        className="bg-dark text-dark-foreground shadow-lg"
        rainbowColors={[
          "rgba(180,30,30,0.6)",
          "rgba(180,30,30,0.6)",
          "transparent",
          "rgba(200,160,0,0.5)",
          "transparent",
          "rgba(180,30,30,0.6)",
          "transparent",
        ]}
      >
        🚀 Proposta exclusiva para o Avistão Supermercados — Válida por tempo limitado!
      </Banner>
      <HeroSection />
      <div className="section-divider" />
      <PainSection />
      <div className="section-divider" />
      <TaxComparisonSection />
      <div className="section-divider-dark section-divider" />
      <UrgencySection />
      <div className="section-divider" />
      <SolutionSection />
      <div className="section-divider" />
      <StoryboardSection />
      <div className="section-divider-dark section-divider" />
      <AvistaoCardSection />
      <div className="section-divider-dark section-divider" />
      <MultiBranchSection />
      <div className="section-divider" />
      <ValuePropositionSection />
      <div className="section-divider" />
      <BusinessBenefitsSection />
      <div className="section-divider" />
      <AppScreensSection />
      <div className="section-divider-dark section-divider" />
      <MockupsSection />
      <div className="section-divider-dark section-divider" />
      <SimulatorSection />
      <div className="section-divider" />
      <CTASection />
      <WhatsAppFloat />
      <footer className="py-8 md:py-10 text-center bg-card border-t">
        <div className="container">
          <img src={avistaoLogo} alt="Avistão Supermercados" className="w-10 h-10 rounded-full object-cover mx-auto mb-3 opacity-60" />
          <p className="text-xs text-muted-foreground">
            © 2026 Mowin — Proposta exclusiva para Avistão Supermercados
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
