import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <footer className="py-6 text-center text-sm text-muted-foreground bg-surface">
        © 2026 Mowin — Todos os direitos reservados.
      </footer>
    </main>
  );
};

export default Index;
