import { Clock, MessageSquareX, ShieldOff, Users, TrendingDown } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const pains = [
  { icon: Users, text: "Cliente quer comprar sem sair de casa", highlight: "sem sair de casa" },
  { icon: MessageSquareX, text: "Pedido por WhatsApp gera confusão e atraso", highlight: "confusão e atraso" },
  { icon: ShieldOff, text: "Falta organização no atendimento", highlight: "Falta organização" },
  { icon: TrendingDown, text: "Concorrentes podem sair na frente", highlight: "sair na frente" },
  { icon: Clock, text: "Mercado perde vendas silenciosamente todos os dias", highlight: "perde vendas" },
];

const PainSection = () => {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_72%_46%_/_0.02),transparent_60%)]" />
      <div className="container relative">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-5 mb-14 md:mb-20">
            <p className="text-xs md:text-sm font-display font-bold text-primary tracking-widest uppercase">
              O problema
            </p>
            <h2 className="heading-xl text-foreground">
              Enquanto o cliente quer praticidade, muitos mercados ainda estão{" "}
              <span className="text-gradient">vendendo como se fosse 2015</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Hoje, grande parte das compras começa no celular. Se o cliente não consegue 
              comprar do sofá da casa dele, ele compra de quem consegue entregar essa facilidade.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {pains.map((p, i) => (
            <AnimateOnScroll key={p.text} delay={i * 80}>
              <div className="group card-premium p-5 md:p-7 space-y-4 hover:border-primary/25 hover:shadow-primary/5 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-2xl bg-loss/8 flex items-center justify-center text-loss group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                  <p.icon size={22} strokeWidth={1.5} />
                </div>
                <p className="font-display font-bold text-foreground text-[15px] md:text-base leading-snug">{p.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
