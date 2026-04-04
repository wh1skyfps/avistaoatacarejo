import { Smartphone, ShoppingBag, ClipboardCheck, Truck, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  { icon: Smartphone, step: "01", title: "Entra no app", desc: "Cliente acessa o app pelo celular" },
  { icon: ShoppingBag, step: "02", title: "Escolhe os produtos", desc: "Navega pelo catálogo e adiciona ao carrinho" },
  { icon: ClipboardCheck, step: "03", title: "Finaliza o pedido", desc: "Paga online com PIX ou cartão" },
  { icon: Truck, step: "04", title: "Recebe em casa", desc: "Entrega rápida ou retirada na loja" },
];

const CustomerFlowSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight">
              Como o cliente compra no app
            </h2>
            <p className="text-dark-foreground/60 text-lg">
              Simples para o cliente. Lucrativo para o mercado.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.step} delay={i * 100} className="flex items-center gap-2 md:gap-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center space-y-4 min-w-[200px] max-w-[240px] hover:border-primary/40 transition-colors">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon size={28} />
                </div>
                <span className="text-xs font-display font-bold text-primary tracking-widest uppercase">
                  Passo {s.step}
                </span>
                <h3 className="text-base font-display font-bold">{s.title}</h3>
                <p className="text-dark-foreground/50 text-sm">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-primary/40 shrink-0" size={24} />
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFlowSection;
