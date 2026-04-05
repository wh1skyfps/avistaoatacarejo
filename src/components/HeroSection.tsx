import { ArrowRight, MessageCircle, Zap, Star } from "lucide-react";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-dark text-dark-foreground overflow-hidden font-sans">
      <style>{`
        @keyframes heroFadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-fade-in {
          animation: heroFadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .hero-marquee {
          animation: heroMarquee 30s linear infinite;
        }
        .hero-delay-1 { animation-delay: 0.1s; }
        .hero-delay-2 { animation-delay: 0.2s; }
        .hero-delay-3 { animation-delay: 0.3s; }
        .hero-delay-4 { animation-delay: 0.4s; }
        .hero-delay-5 { animation-delay: 0.5s; }
      `}</style>

      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,hsl(0_72%_46%_/_0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 md:pt-28 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 pt-4 md:pt-8">

            {/* Badge */}
            <div className="hero-fade-in hero-delay-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-md">
                <Zap size={13} className="text-primary" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-dark-foreground/80">
                  Proposta Exclusiva — Avistão Supermercados
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="hero-fade-in hero-delay-2 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[1.05]"
            >
              Sua rede merece uma plataforma digital própria{" "}
              <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
                para vender, fidelizar e crescer
              </span>
            </h1>

            {/* Description */}
            <p className="hero-fade-in hero-delay-3 max-w-xl text-[15px] md:text-lg text-dark-foreground/55 leading-relaxed">
              Uma plataforma completa para vendas, delivery, cartão próprio e gestão multilojas —
              sem depender de terceiros, sem comissões e com a marca do Avistão.
            </p>

            {/* CTA Buttons */}
            <div className="hero-fade-in hero-delay-4 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#solucao"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground font-display transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/25"
              >
                Quero ver como funciona
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-8 py-4 text-sm font-bold text-whatsapp font-display backdrop-blur-sm transition-all hover:bg-whatsapp/20 hover:border-whatsapp/40 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Receber proposta no WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:mt-8">
            <div className="hero-fade-in hero-delay-5 relative">
              {/* Phone mockup */}
              <div className="relative z-10 w-[240px] md:w-[280px] animate-float">
                <div className="bg-foreground/90 rounded-[2.5rem] p-3 shadow-2xl shadow-primary/20 ring-1 ring-white/10">
                  <div className="bg-gradient-to-br from-dark via-dark to-primary/5 rounded-[2rem] aspect-[9/19] flex flex-col overflow-hidden">
                    {/* App header */}
                    <div className="bg-primary/10 px-4 py-3 flex items-center gap-2.5 border-b border-white/5">
                      <img src={avistaoLogo} alt="Avistão" className="w-7 h-7 rounded-full object-cover ring-1 ring-primary/20" />
                      <span className="text-[11px] font-bold text-white tracking-wide">Avistão</span>
                    </div>
                    {/* Product list */}
                    <div className="flex-1 p-3 space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-2.5 bg-white/5 rounded-xl p-2.5 border border-white/5">
                          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/10 shrink-0" />
                          <div className="flex-1 space-y-1.5 py-0.5">
                            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                            <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Cart button */}
                    <div className="px-3 pb-3">
                      <div className="bg-primary rounded-xl py-2.5 text-center text-[10px] font-bold text-primary-foreground shadow-sm">
                        Ver Carrinho
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop mockup behind */}
              <div className="absolute -top-6 -right-14 w-[300px] opacity-40 hidden lg:block">
                <div className="bg-foreground/80 rounded-xl p-2 shadow-xl ring-1 ring-white/5">
                  <div className="bg-dark rounded-lg aspect-[16/10] p-3">
                    <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-loss/40" />
                      <div className="w-2 h-2 rounded-full bg-secondary/40" />
                      <div className="w-2 h-2 rounded-full bg-gain/40" />
                    </div>
                    <div className="flex gap-2 h-full">
                      <div className="w-1/4 space-y-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="h-2 bg-primary/10 rounded-full" />
                        ))}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-1/2 bg-white/10 rounded" />
                        <div className="grid grid-cols-3 gap-1">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-square bg-primary/5 rounded" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-1/4 hero-fade-in hero-delay-5 hidden lg:block">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1.5 text-[10px] font-medium text-zinc-300 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gain opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gain"></span>
                  </span>
                  0% comissão
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/3 hero-fade-in hero-delay-5 hidden lg:block">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1.5 text-[10px] font-medium text-zinc-300 shadow-lg">
                  <Star className="w-3 h-3 text-secondary fill-secondary" />
                  Exclusivo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
