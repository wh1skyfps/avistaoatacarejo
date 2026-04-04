import { X, Check, TrendingDown } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const scenarios = [
  { revenue: "R$ 20 mil", loss: "R$ 5.400" },
  { revenue: "R$ 50 mil", loss: "R$ 13.500" },
  { revenue: "R$ 80 mil", loss: "R$ 21.600" },
];

const thirdParty = [
  "Comissão por pedido",
  "Dependência da plataforma",
  "Menor controle",
  "Cliente não é realmente seu",
];

const ownApp = [
  "Sem comissão por pedido",
  "Marca fortalecida",
  "Controle total",
  "Cliente dentro do seu ecossistema",
];

const TaxComparisonSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight">
              O problema não é vender pelo delivery. O problema é{" "}
              <span className="text-gradient">vender e deixar o lucro na mesa.</span>
            </h2>
            <p className="text-dark-foreground/60 text-lg max-w-2xl mx-auto">
              Aplicativos de terceiros como o iFood podem cobrar entre 12% e 27% por pedido.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Loss scenarios */}
        <AnimateOnScroll delay={100}>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
            {scenarios.map((s, i) => (
              <div
                key={s.revenue}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-3 hover:border-primary/40 transition-colors"
              >
                <p className="text-sm text-dark-foreground/50 font-medium">Faturamento mensal</p>
                <p className="text-2xl font-display font-black">{s.revenue}</p>
                <div className="flex items-center justify-center gap-2 text-loss">
                  <TrendingDown size={18} />
                  <span className="text-sm font-medium">Perda com taxas</span>
                </div>
                <p className="text-3xl font-display font-black text-loss">
                  {s.loss}<span className="text-base font-semibold">/mês</span>
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-center text-lg font-display font-bold text-primary mb-12">
            Em poucos meses, esse valor pode ser muito maior do que o investimento em um app próprio.
          </p>
        </AnimateOnScroll>

        {/* Comparison */}
        <AnimateOnScroll delay={300}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Third party */}
            <div className="bg-white/5 border border-loss/20 rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-loss/20 flex items-center justify-center">
                  <X size={20} className="text-loss" />
                </div>
                <h3 className="font-display font-bold text-lg">App de terceiros</h3>
              </div>
              <ul className="space-y-3">
                {thirdParty.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark-foreground/60">
                    <X size={16} className="text-loss shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Own app */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Check size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg">App próprio</h3>
              </div>
              <ul className="space-y-3">
                {ownApp.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark-foreground/80">
                    <Check size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TaxComparisonSection;
