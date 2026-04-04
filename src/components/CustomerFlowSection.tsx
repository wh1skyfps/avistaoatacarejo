import { Smartphone, ShoppingBag, ClipboardCheck, Truck } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  { icon: Smartphone, step: "01", title: "Entra no app", desc: "Cliente acessa o app pelo celular" },
  { icon: ShoppingBag, step: "02", title: "Escolhe os produtos", desc: "Navega pelo catálogo e adiciona ao carrinho" },
  { icon: ClipboardCheck, step: "03", title: "Finaliza o pedido", desc: "Paga online com PIX ou cartão" },
  { icon: Truck, step: "04", title: "Recebe em casa", desc: "Entrega rápida ou retirada na loja" },
];

const CustomerFlowSection = () => {
  return (
    <section className="section-spacing section-dark">
      <div className="container">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-4 mb-14 md:mb-20">
            <h2 className="heading-xl">
              Como o cliente compra no app
            </h2>
            <p className="body-lg text-dark-foreground/50">
              Simples para o cliente. <span className="text-primary font-semibold">Lucrativo para o mercado.</span>
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 container-wide">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.step} delay={i * 100}>
              <div className="bg-white/[0.04] border border-white/8 rounded-2xl md:rounded-3xl p-6 md:p-7 text-center space-y-4 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 h-full">
                <span className="inline-block text-[11px] font-display font-bold text-primary tracking-[0.2em] uppercase bg-primary/8 rounded-full px-3 py-1">
                  Passo {s.step}
                </span>
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg font-display font-bold">{s.title}</h3>
                <p className="text-dark-foreground/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFlowSection;
