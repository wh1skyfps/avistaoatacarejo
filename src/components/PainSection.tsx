import { Clock, MessageSquareX, ShieldOff, Users, TrendingDown } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const pains = [
  { icon: Users, text: "Cliente quer comprar sem sair de casa" },
  { icon: MessageSquareX, text: "Pedido por WhatsApp gera confusão e atraso" },
  { icon: ShieldOff, text: "Falta organização no atendimento" },
  { icon: TrendingDown, text: "Concorrentes podem sair na frente" },
  { icon: Clock, text: "Mercado perde vendas silenciosamente todos os dias" },
];

const PainSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
              Enquanto o cliente quer praticidade, muitos mercados ainda estão{" "}
              <span className="text-gradient">vendendo como se fosse 2015</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hoje, grande parte das compras começa no celular. Se o cliente não consegue 
              comprar do sofá da casa dele, ele compra de quem consegue entregar essa facilidade.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {pains.map((p, i) => (
            <AnimateOnScroll key={p.text} delay={i * 80}>
              <div className="group bg-card border rounded-2xl p-6 space-y-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-loss/10 flex items-center justify-center text-loss group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <p.icon size={24} />
                </div>
                <p className="font-display font-semibold text-foreground">{p.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
