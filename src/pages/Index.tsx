import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TaxComparisonSection from "@/components/TaxComparisonSection";
import UrgencySection from "@/components/UrgencySection";
import SolutionSection from "@/components/SolutionSection";
import CustomerFlowSection from "@/components/CustomerFlowSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import BusinessBenefitsSection from "@/components/BusinessBenefitsSection";
import MockupsSection from "@/components/MockupsSection";
import SimulatorSection from "@/components/SimulatorSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <TaxComparisonSection />
      <UrgencySection />
      <SolutionSection />
      <CustomerFlowSection />
      <ValuePropositionSection />
      <BusinessBenefitsSection />
      <MockupsSection />
      <SimulatorSection />
      <CTASection />
      <WhatsAppFloat />
      <footer className="py-6 text-center text-sm text-muted-foreground bg-surface">
        © 2026 Mowin — Proposta exclusiva para Avistão Supermercados
      </footer>
    </main>
  );
};

export default Index;
