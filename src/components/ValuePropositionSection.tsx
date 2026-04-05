import { Check, Star, Shield } from "lucide-react";
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
    <section className="section-spacing bg-background">
      <div className="container">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Shield size={14} />
              Proposta de Valor
            </div>
            <h2 className="heading-xl text-foreground">
              O que está incluso na solução
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-2xl mx-auto bg-card border rounded-2xl md:rounded-3xl p-8 md:p-12 space-y-8 shadow-lg shadow-primary/3 hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Star size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl text-foreground">Entrega da solução</h3>
                <p className="text-xs text-muted-foreground">Tudo que o Avistão precisa para começar</p>
              </div>
            </div>

            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground/75 text-[15px] md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-5 border-t border-border/50">
              <p className="text-center font-display font-bold text-base md:text-lg text-primary">
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
