import { TrendingDown, Calculator } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const scenarios = [
  { revenue: "R$ 20 mil", tax: "27%", loss: "R$ 5.400", annual: "R$ 64.800" },
  { revenue: "R$ 50 mil", tax: "27%", loss: "R$ 13.500", annual: "R$ 162.000", featured: true },
  { revenue: "R$ 80 mil", tax: "27%", loss: "R$ 21.600", annual: "R$ 259.200" },
];

const SimulatorSection = () => {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_72%_46%_/_0.03),transparent_60%)]" />
      <div className="container relative">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-5 mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Calculator size={14} />
              Simulação de Economia
            </div>
            <h2 className="heading-xl text-foreground">
              Quanto o Avistão pode recuperar{" "}
              <span className="text-gradient">deixando de pagar comissão?</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {scenarios.map((s, i) => (
            <AnimateOnScroll key={s.revenue} delay={i * 100}>
              <div className={`card-premium p-6 md:p-8 space-y-5 text-center hover:-translate-y-1 ${
                s.featured ? "border-primary/25 shadow-lg shadow-primary/5 md:scale-105" : "hover:border-primary/20"
              }`}>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1.5 uppercase tracking-wider">Faturamento delivery</p>
                  <p className="text-xl md:text-2xl font-display font-black text-foreground">{s.revenue}<span className="text-sm font-medium text-muted-foreground">/mês</span></p>
                </div>

                <div className="border-t border-border/50 pt-5">
                  <div className="flex items-center justify-center gap-1.5 text-loss mb-2">
                    <TrendingDown size={15} />
                    <span className="text-xs font-semibold">Perda com comissão ({s.tax})</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-display font-black text-loss">{s.loss}</p>
                  <p className="text-xs text-muted-foreground mt-1">por mês</p>
                </div>

                <div className="bg-loss/5 rounded-2xl p-4 border border-loss/10">
                  <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">Prejuízo anual estimado</p>
                  <p className="text-lg md:text-xl font-display font-black text-loss">{s.annual}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-center text-muted-foreground mt-10 max-w-lg mx-auto text-sm md:text-base">
            Esse valor poderia estar no caixa do Avistão. Com um app próprio, 
            <span className="text-primary font-bold"> 100% do faturamento fica com você.</span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SimulatorSection;
