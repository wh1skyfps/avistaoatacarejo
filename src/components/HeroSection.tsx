import { ArrowRight, MessageCircle } from "lucide-react";
import avistaoLogo from "@/assets/avistao-logo.jpg";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-enter {
          animation: heroFadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .hero-d1 { animation-delay: 0.1s; }
        .hero-d2 { animation-delay: 0.2s; }
        .hero-d3 { animation-delay: 0.3s; }
        .hero-d4 { animation-delay: 0.4s; }
        .hero-d5 { animation-delay: 0.5s; }
      `}</style>

      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl sm:rounded-[3rem] m-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-30 dark:opacity-40"
          src="/videos/hero-bg.mp4"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-dark/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text Content */}
          <div className="flex-1 max-w-lg text-center lg:text-left lg:max-w-2xl">
            {/* Badge */}
            <div className="hero-enter hero-d1">
              <span className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-medium tracking-widest uppercase text-dark-foreground/50">
                <img src={avistaoLogo} alt="Avistão" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" />
                Proposta exclusiva · Avistão Supermercados
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-enter hero-d2 mt-8 text-balance text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tighter leading-[0.95] text-dark-foreground">
              Sua rede merece uma{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                plataforma digital própria
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-enter hero-d3 mt-8 max-w-xl text-balance text-base sm:text-lg text-dark-foreground/50 leading-relaxed">
              Vendas, delivery, cartão fidelidade e gestão multilojas — sem comissões, sem intermediários, 100% com a marca Avistão.
            </p>

            {/* CTAs */}
            <div className="hero-enter hero-d4 mt-12 flex flex-col items-center sm:flex-row gap-3 lg:justify-start">
              <a
                href="#solucao"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground font-display transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Ver como funciona
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-dark-foreground/70 font-display backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-dark-foreground/90 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="hero-enter hero-d5 flex-shrink-0 relative">
            <div className="relative w-[260px] sm:w-[280px] lg:w-[320px]">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-8 bg-primary/15 rounded-full blur-3xl" />
              <img
                src={heroPhoneMockup}
                alt="App Avistão Supermercados"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                width={512}
                height={1024}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
