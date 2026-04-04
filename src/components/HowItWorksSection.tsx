import { Globe, ShoppingBag, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Cliente acessa o site/app",
    desc: "Seu cliente entra no site exclusivo do Avistão pelo celular.",
  },
  {
    icon: ShoppingBag,
    step: "02",
    title: "Escolhe e paga online",
    desc: "Seleciona os produtos, coloca no carrinho e paga direto.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Mercado entrega",
    desc: "Você recebe o pedido no painel e organiza a entrega.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg">
            Simples para o cliente, simples para você.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="flex items-center gap-4 md:gap-4">
              <div className="bg-card border rounded-2xl p-8 text-center space-y-4 flex-1 min-w-[220px] max-w-[280px] hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon size={32} />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Passo {s.step}
                </span>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-primary/40 shrink-0" size={28} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
