import { ArrowRight, MessageCircle, Zap, Target, ShoppingCart, Store, CreditCard, TrendingUp, Star } from "lucide-react";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl font-display">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium sm:text-xs">{label}</span>
  </div>
);

const FEATURES = [
  { name: "Delivery próprio", icon: ShoppingCart },
  { name: "Multilojas", icon: Store },
  { name: "Avistão Card", icon: CreditCard },
  { name: "Mais lucro", icon: TrendingUp },
];

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

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 space-y-5 lg:mt-8">

            {/* Stats Card */}
            <div className="hero-fade-in hero-delay-5 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-black tracking-tight text-white font-display">App Avistão</div>
                    <div className="text-sm text-zinc-400">Plataforma Digital Completa</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Economia vs iFood</span>
                    <span className="text-white font-bold">até 27%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-5" />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="0%" label="Comissão" />
                  <StatItem value="100%" label="Sua Marca" />
                  <StatItem value="∞" label="Clientes" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gain opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gain"></span>
                    </span>
                    PRONTO PARA LANÇAR
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Star className="w-3 h-3 text-secondary fill-secondary" />
                    EXCLUSIVO
                  </div>
                </div>
              </div>
            </div>

            {/* Features Marquee */}
            <div className="hero-fade-in hero-delay-5 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl">
              <h3 className="mb-4 px-6 text-sm font-medium text-zinc-400">Tudo incluso na plataforma</h3>
              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="hero-marquee flex gap-10 whitespace-nowrap px-4">
                  {[...FEATURES, ...FEATURES, ...FEATURES, ...FEATURES].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-60 transition-all hover:opacity-100 cursor-default"
                    >
                      <feat.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-bold text-white tracking-tight">{feat.name}</span>
                    </div>
                  ))}
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
