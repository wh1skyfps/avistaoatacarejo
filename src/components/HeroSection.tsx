import { Zap, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden section-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,hsl(0_72%_46%_/_0.06),transparent_60%)]" />
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 md:space-y-8">
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-xs md:text-sm font-semibold tracking-wide">
                <Zap size={13} />
                Proposta Exclusiva — Avistão Supermercados
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="text-[1.65rem] leading-[1.15] md:text-[2.5rem] lg:text-[3.25rem] font-display font-black tracking-tight">
                Sua rede merece uma plataforma digital própria{" "}
                <span className="text-gradient">para vender, fidelizar e crescer</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-[15px] md:text-lg text-dark-foreground/60 max-w-xl leading-relaxed">
                Uma plataforma completa para vendas, delivery, cartão próprio e gestão multilojas — 
                sem depender de terceiros, sem comissões e com a marca do Avistão.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1">
                <a
                  href="#solucao"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-[15px] md:text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Quero ver como funciona
                </a>
                <a
                  href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-whatsapp text-whatsapp-foreground font-display font-bold text-[15px] md:text-base hover:bg-whatsapp/90 transition-all duration-300 shadow-lg shadow-whatsapp/20 hover:shadow-xl hover:shadow-whatsapp/30 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <MessageCircle size={17} />
                  Receber proposta no WhatsApp
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                {["App próprio", "Sem comissão", "Multilojas", "Avistão Card", "Mais lucro"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-dark-foreground/40 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Mockup — hidden on mobile, show on lg */}
          <AnimateOnScroll delay={300} className="relative hidden lg:flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative z-10 w-[260px] animate-float">
                <div className="bg-foreground/90 rounded-[2.5rem] p-3 shadow-2xl shadow-primary/15 ring-1 ring-white/5">
                  <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-[2rem] aspect-[9/19] flex flex-col overflow-hidden">
                    <div className="bg-primary/8 px-4 py-3 flex items-center gap-2.5 border-b border-primary/5">
                      <img src={avistaoLogo} alt="Avistão" className="w-7 h-7 rounded-full object-cover ring-1 ring-primary/20" />
                      <span className="text-[11px] font-bold text-foreground tracking-wide">Avistão</span>
                    </div>
                    <div className="flex-1 p-3 space-y-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="flex gap-2.5 bg-card/50 rounded-xl p-2.5 border border-border/30">
                          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 shrink-0" />
                          <div className="flex-1 space-y-1.5 py-0.5">
                            <div className="h-2 w-3/4 bg-foreground/8 rounded-full" />
                            <div className="h-2 w-1/2 bg-foreground/4 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-3 pb-3">
                      <div className="bg-primary rounded-xl py-2.5 text-center text-[10px] font-bold text-primary-foreground shadow-sm">
                        Ver Carrinho
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop mockup behind */}
              <div className="absolute -top-6 -right-12 w-[320px] opacity-50">
                <div className="bg-foreground/80 rounded-xl p-2 shadow-xl ring-1 ring-white/5">
                  <div className="bg-background/90 rounded-lg aspect-[16/10] p-3">
                    <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-loss/40" />
                      <div className="w-2 h-2 rounded-full bg-secondary/40" />
                      <div className="w-2 h-2 rounded-full bg-gain/40" />
                    </div>
                    <div className="flex gap-2 h-full">
                      <div className="w-1/4 space-y-1.5">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="h-2 bg-primary/8 rounded-full" />
                        ))}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-1/2 bg-foreground/8 rounded" />
                        <div className="grid grid-cols-3 gap-1">
                          {[1,2,3].map(i => (
                            <div key={i} className="aspect-square bg-primary/4 rounded" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Mobile-only compact mockup */}
          <AnimateOnScroll delay={300} className="lg:hidden flex justify-center -mt-2">
            <div className="w-[200px] animate-float">
              <div className="bg-foreground/90 rounded-[2rem] p-2 shadow-2xl shadow-primary/15 ring-1 ring-white/5">
                <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-[1.5rem] aspect-[9/17] flex flex-col overflow-hidden">
                  <div className="bg-primary/8 px-3 py-2 flex items-center gap-2 border-b border-primary/5">
                    <img src={avistaoLogo} alt="Avistão" className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-[8px] font-bold text-foreground">Avistão</span>
                  </div>
                  <div className="flex-1 p-2 space-y-1.5">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-1.5 bg-card/50 rounded-lg p-1.5">
                        <div className="w-8 h-8 rounded bg-primary/10 shrink-0" />
                        <div className="flex-1 space-y-1 py-0.5">
                          <div className="h-1.5 w-3/4 bg-foreground/8 rounded-full" />
                          <div className="h-1.5 w-1/2 bg-foreground/4 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-2 pb-2">
                    <div className="bg-primary rounded-lg py-1.5 text-center text-[7px] font-bold text-primary-foreground">
                      Ver Carrinho
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
