import { ShoppingCart, Award, Gauge, Lock, Heart, TrendingUp, DollarSign } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
  { icon: ShoppingCart, text: "Mais pedidos no dia a dia" },
  { icon: Award, text: "Mais profissionalismo para a marca" },
  { icon: Gauge, text: "Mais controle sobre o delivery" },
  { icon: Heart, text: "Mais fidelização de clientes" },
  { icon: Lock, text: "Menos dependência de terceiros" },
  { icon: TrendingUp, text: "Mais conveniência para o cliente" },
  { icon: DollarSign, text: "Mais lucro no longo prazo" },
];

const BusinessBenefitsSection = () => {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
              O que isso gera na prática{" "}
              <span className="text-gradient">para o Avistão</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <AnimateOnScroll key={b.text} delay={i * 60}>
              <div className="flex items-center gap-4 bg-card border rounded-2xl px-6 py-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <b.icon size={22} />
                </div>
                <p className="font-display font-semibold text-foreground text-sm">{b.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;
