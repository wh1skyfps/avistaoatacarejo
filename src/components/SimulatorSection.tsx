import { TrendingDown, Calculator } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const scenarios = [
  { revenue: "R$ 20 mil", tax: "27%", loss: "R$ 5.400", annual: "R$ 64.800" },
  { revenue: "R$ 50 mil", tax: "27%", loss: "R$ 13.500", annual: "R$ 162.000" },
  { revenue: "R$ 80 mil", tax: "27%", loss: "R$ 21.600", annual: "R$ 259.200" },
];

const SimulatorSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-sm">
              <Calculator size={16} />
              Simulação de Economia
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
              Quanto o Avistão pode recuperar{" "}
              <span className="text-gradient">deixando de pagar comissão?</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {scenarios.map((s, i) => (
            <AnimateOnScroll key={s.revenue} delay={i * 100}>
              <div className="bg-card border rounded-2xl p-8 space-y-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 text-center">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Faturamento delivery</p>
                  <p className="text-2xl font-display font-black text-foreground">{s.revenue}<span className="text-sm font-semibold text-muted-foreground">/mês</span></p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-center gap-2 text-loss mb-2">
                    <TrendingDown size={16} />
                    <span className="text-xs font-medium">Perda com comissão ({s.tax})</span>
                  </div>
                  <p className="text-3xl font-display font-black text-loss">{s.loss}</p>
                  <p className="text-xs text-muted-foreground mt-1">por mês</p>
                </div>

                <div className="bg-loss/5 rounded-xl p-4 border border-loss/10">
                  <p className="text-xs text-muted-foreground mb-1">Prejuízo anual estimado</p>
                  <p className="text-xl font-display font-black text-loss">{s.annual}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-center text-muted-foreground mt-8 max-w-lg mx-auto">
            Esse valor poderia estar no caixa do Avistão. Com um app próprio, 
            <span className="text-primary font-semibold"> 100% do faturamento fica com você.</span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SimulatorSection;
