import avistaoLogo from "@/assets/avistao-logo.jpg";
import mowinLogo from "@/assets/mowin-logo.jpg";
import AnimateOnScroll from "./AnimateOnScroll";
import { ParticleTextEffect } from "./ui/particle-text-effect";

const CTASection = () => {
  return (
    <section className="section-spacing section-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
            {/* Particle text effect */}
            <ParticleTextEffect words={["OBRIGADO!", "AVISTÃO", "MOWIN", "❤️"]} />

            {/* Logos */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
                <img
                  src={avistaoLogo}
                  alt="Avistão Supermercados"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white/40 font-display font-bold text-xl md:text-2xl">×</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
                <img
                  src={mowinLogo}
                  alt="Mowin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-dark-foreground/40 text-sm md:text-base max-w-md">
              Obrigado por dedicar seu tempo a essa proposta. Estamos prontos para transformar o delivery do Avistão.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
