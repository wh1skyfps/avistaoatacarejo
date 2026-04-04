import { Check, Star } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  "App próprio com catálogo de produtos, carrinho, checkout e pagamento",
  "Painel administrativo para gerenciar pedidos e acompanhar vendas",
  "Estrutura sem comissão por pedido",
  "Pagamento único pela implantação",
  "Suporte incluso por 30 dias",
];

const ValuePropositionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
              O que está incluso na solução
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-2xl mx-auto bg-card border rounded-3xl p-8 md:p-10 space-y-6 hover:shadow-xl hover:shadow-primary/5 transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Star size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Entrega da solução</h3>
            </div>

            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground/80 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t">
              <p className="text-center font-display font-bold text-lg text-primary">
                Você investe uma vez para ter um canal de vendas próprio.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
