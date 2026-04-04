import { Smartphone, Monitor, Zap, TrendingUp, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-dark">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,hsl(262_100%_58%_/_0.08),transparent_60%)]" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap size={14} />
                Proposta Exclusiva — Avistão Supermercados
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-black leading-[1.1] tracking-tight">
                Seu supermercado pode vender mais todos os dias,{" "}
                <span className="text-gradient">sem depender de iFood ou WhatsApp bagunçado</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-lg text-dark-foreground/70 max-w-xl leading-relaxed">
                Transforme o Avistão Supermercados em um delivery digital próprio, profissional e 
                lucrativo — com app, pedidos online, pagamento e painel de controle.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#solucao"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  Quero ver como funciona
                </a>
                <a
                  href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-whatsapp text-whatsapp-foreground font-display font-bold text-base hover:bg-whatsapp/90 transition-all shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/30 hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Receber proposta no WhatsApp
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="flex flex-wrap gap-6 pt-2">
                {["App próprio", "Sem comissão por pedido", "Mais controle", "Mais lucro"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-dark-foreground/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Mockups */}
          <AnimateOnScroll delay={300} className="relative hidden lg:block">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative z-10 w-[280px] mx-auto animate-float">
                <div className="bg-foreground/90 rounded-[2.5rem] p-3 shadow-2xl shadow-primary/20">
                  <div className="bg-gradient-to-br from-primary/20 via-background to-accent rounded-[2rem] aspect-[9/19] flex flex-col overflow-hidden">
                    <div className="bg-primary/10 px-4 py-3 flex items-center gap-2">
                      <img src={avistaoLogo} alt="Avistão" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-xs font-bold text-foreground">Avistão</span>
                    </div>
                    <div className="flex-1 p-3 space-y-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="flex gap-2 bg-card/60 rounded-xl p-2">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 shrink-0" />
                          <div className="flex-1 space-y-1.5 py-1">
                            <div className="h-2 w-3/4 bg-foreground/10 rounded" />
                            <div className="h-2 w-1/2 bg-foreground/5 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-3 pb-3">
                      <div className="bg-primary rounded-xl py-2.5 text-center text-xs font-bold text-primary-foreground">
                        Ver Carrinho
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop mockup behind */}
              <div className="absolute -top-4 -right-8 w-[340px] opacity-60">
                <div className="bg-foreground/80 rounded-xl p-2 shadow-xl">
                  <div className="bg-background/90 rounded-lg aspect-[16/10] p-3">
                    <div className="flex gap-1 mb-2">
                       <div className="w-2 h-2 rounded-full bg-loss/50" />
                       <div className="w-2 h-2 rounded-full bg-secondary/50" />
                       <div className="w-2 h-2 rounded-full bg-gain/50" />
                    </div>
                    <div className="flex gap-2 h-full">
                      <div className="w-1/4 space-y-1.5">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="h-2 bg-primary/10 rounded" />
                        ))}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-1/2 bg-foreground/10 rounded" />
                        <div className="grid grid-cols-3 gap-1">
                          {[1,2,3].map(i => (
                            <div key={i} className="aspect-square bg-primary/5 rounded" />
                          ))}
                        </div>
                      </div>
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
