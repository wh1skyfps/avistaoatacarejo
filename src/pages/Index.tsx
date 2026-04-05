import avistaoLogo from "@/assets/avistao-logo.jpg";
import { Banner } from "@/components/ui/banner";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TaxComparisonSection from "@/components/TaxComparisonSection";
import UrgencySection from "@/components/UrgencySection";
import SolutionSection from "@/components/SolutionSection";
import CustomerFlowSection from "@/components/CustomerFlowSection";
import StoryboardSection from "@/components/StoryboardSection";
import AvistaoCardSection from "@/components/AvistaoCardSection";
import MultiBranchSection from "@/components/MultiBranchSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import BusinessBenefitsSection from "@/components/BusinessBenefitsSection";
import MockupsSection from "@/components/MockupsSection";
import SimulatorSection from "@/components/SimulatorSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
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
      <PainSection />
      <TaxComparisonSection />
      <UrgencySection />
      <SolutionSection />
      <CustomerFlowSection />
      <StoryboardSection />
      <AvistaoCardSection />
      <MultiBranchSection />
      <ValuePropositionSection />
      <BusinessBenefitsSection />
      <MockupsSection />
      <SimulatorSection />
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
