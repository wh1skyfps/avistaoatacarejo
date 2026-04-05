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
    <section className="section-spacing bg-surface-alt">
      <div className="container">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <h2 className="heading-xl text-foreground">
              O que isso gera na prática{" "}
              <span className="text-gradient">para o Avistão</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <AnimateOnScroll key={b.text} delay={i * 60}>
              <div className="card-premium flex items-center gap-4 px-5 md:px-6 py-5 hover:border-primary/25 hover:shadow-primary/5 hover:-translate-y-0.5 h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center text-primary shrink-0">
                  <b.icon size={20} strokeWidth={1.5} />
                </div>
                <p className="font-display font-semibold text-foreground text-sm md:text-[15px]">{b.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;
