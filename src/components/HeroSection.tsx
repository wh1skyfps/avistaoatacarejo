import { ArrowRight, MessageCircle } from "lucide-react";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-dark text-dark-foreground overflow-hidden">
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-enter {
          animation: heroFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .hero-d1 { animation-delay: 0.15s; }
        .hero-d2 { animation-delay: 0.3s; }
        .hero-d3 { animation-delay: 0.45s; }
        .hero-d4 { animation-delay: 0.6s; }
        .hero-d5 { animation-delay: 0.75s; }
      `}</style>

      {/* Subtle background — single soft gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[180px]" />
      </div>

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--dark-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dark-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-24 pb-16 md:pt-36 md:pb-28 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">

            {/* Badge — minimal */}
            <div className="hero-enter hero-d1">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium tracking-widest uppercase text-dark-foreground/40">
                <span className="w-5 h-px bg-primary/60" />
                Proposta exclusiva · Avistão Supermercados
              </span>
            </div>

            {/* Headline — refined, fewer lines, selective color */}
            <h1 className="hero-enter hero-d2 text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-extrabold tracking-tight leading-[1.1]">
              Sua rede merece uma{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                plataforma digital própria
              </span>
            </h1>

            {/* Subtitle — clear, concise */}
            <p className="hero-enter hero-d3 max-w-lg text-[15px] md:text-[17px] text-dark-foreground/45 leading-relaxed font-normal">
              Vendas, delivery, cartão fidelidade e gestão multilojas — sem comissões, sem intermediários, 100% com a marca Avistão.
            </p>

            {/* CTAs — refined */}
            <div className="hero-enter hero-d4 flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#solucao"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-[13px] md:text-sm font-semibold text-primary-foreground font-display transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-md shadow-primary/15"
              >
                Ver como funciona
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-7 py-3.5 text-[13px] md:text-sm font-semibold text-dark-foreground/70 font-display transition-all duration-200 hover:bg-white/[0.06] hover:text-dark-foreground/90 active:scale-[0.98]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Falar pelo WhatsApp
              </a>
            </div>

            {/* Trust line — ultra minimal */}
            <div className="hero-enter hero-d5 flex items-center gap-4 pt-2">
              {["App próprio", "Zero comissão", "Multilojas"].map((item, i) => (
                <span key={item} className="flex items-center gap-1.5 text-[11px] text-dark-foreground/25 font-medium tracking-wide">
                  {i > 0 && <span className="w-px h-3 bg-dark-foreground/10 mr-2" />}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="hero-enter hero-d5 relative">
              {/* Phone */}
              <div className="relative z-10 w-[220px] md:w-[260px] animate-float">
                <div className="bg-[#1a1a1a] rounded-[2.2rem] p-[10px] shadow-2xl shadow-black/40 ring-1 ring-white/[0.06]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-20" />
                  <div className="bg-[#0d0d0d] rounded-[1.8rem] aspect-[9/19.5] flex flex-col overflow-hidden">
                    {/* Status bar */}
                    <div className="px-6 pt-3 pb-1 flex items-center justify-between">
                      <span className="text-[8px] text-white/40 font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-1.5 rounded-sm bg-white/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      </div>
                    </div>
                    {/* App header */}
                    <div className="px-4 py-3 flex items-center gap-2.5">
                      <img src={avistaoLogo} alt="Avistão" className="w-6 h-6 rounded-full object-cover ring-1 ring-white/10" />
                      <div>
                        <span className="text-[10px] font-semibold text-white/90 block leading-tight">Avistão</span>
                        <span className="text-[7px] text-white/30">Delivery · Promoções</span>
                      </div>
                    </div>
                    {/* Search */}
                    <div className="mx-4 mb-2">
                      <div className="bg-white/[0.04] rounded-lg py-2 px-3 border border-white/[0.04]">
                        <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    {/* Products */}
                    <div className="flex-1 px-4 space-y-2 overflow-hidden">
                      {[
                        { w: "w-3/4", color: "from-primary/12 to-primary/4" },
                        { w: "w-2/3", color: "from-secondary/10 to-secondary/4" },
                        { w: "w-4/5", color: "from-primary/8 to-transparent" },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2.5 bg-white/[0.025] rounded-xl p-2.5 border border-white/[0.03]">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} shrink-0`} />
                          <div className="flex-1 space-y-1.5 py-0.5">
                            <div className={`h-1.5 ${item.w} bg-white/[0.08] rounded-full`} />
                            <div className="h-1.5 w-1/2 bg-white/[0.04] rounded-full" />
                          </div>
                          <div className="self-center">
                            <div className="h-1.5 w-8 bg-primary/20 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Bottom nav */}
                    <div className="mt-auto px-4 pb-3 pt-2">
                      <div className="bg-primary/90 rounded-xl py-2 text-center text-[9px] font-semibold text-primary-foreground">
                        Ver Carrinho · 3 itens
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="flex justify-center pb-2">
                      <div className="w-10 h-1 rounded-full bg-white/15" />
                    </div>
                  </div>
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
