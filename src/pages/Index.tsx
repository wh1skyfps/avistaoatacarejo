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
      {/* Hero (dark) */}
      <HeroSection introComplete={introComplete} />
      {/* 1. Pain (light) */}
      <div className="section-divider" />
      <PainSection />
      {/* 2. TaxComparison (dark) */}
      <div className="section-divider-dark section-divider" />
      <TaxComparisonSection />
      {/* 3. Urgency (light) */}
      <div className="section-divider" />
      <UrgencySection />
      {/* 4. Solution (dark) */}
      <div className="section-divider-dark section-divider" />
      <SolutionSection />
      {/* 5. Storyboard (light) */}
      <div className="section-divider" />
      <StoryboardSection />
      {/* 6. AvistaoCard (dark) */}
      <div className="section-divider-dark section-divider" />
      <AvistaoCardSection />
      {/* 7. MultiBranch (light) */}
      <div className="section-divider" />
      <MultiBranchSection />
      {/* 8. ValueProp (dark) */}
      <div className="section-divider-dark section-divider" />
      <ValuePropositionSection />
      {/* 9. BusinessBenefits (light) */}
      <div className="section-divider" />
      <BusinessBenefitsSection />
      {/* 10. AppScreens (dark) */}
      <div className="section-divider-dark section-divider" />
      <AppScreensSection />
      {/* 11. Simulator (light) */}
      <div className="section-divider" />
      <SimulatorSection />
      {/* 12. CTA (dark) - final */}
      <div className="section-divider-dark section-divider" />
      <CTASection />
      <WhatsAppFloat />
      <footer className="py-8 md:py-10 text-center bg-[hsl(var(--dark))] text-[hsl(var(--dark-foreground))] border-t border-white/5">
        <div className="container">
          <img src={avistaoLogo} alt="Avistão Supermercados" className="w-10 h-10 rounded-full object-cover mx-auto mb-3 opacity-60" />
          <p className="text-xs text-white/40">
            © 2026 Mowin — Proposta exclusiva para Avistão Supermercados
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
