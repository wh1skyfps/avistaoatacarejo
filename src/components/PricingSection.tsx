import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 2.500",
    sub: "pagamento único",
    highlight: false,
    features: [
      "Site de pedidos responsivo",
      "Cardápio com categorias",
      "Pedidos via WhatsApp",
      "Entrega em 7 dias",
      "1 mês de suporte",
    ],
  },
  {
    name: "Completo",
    price: "R$ 4.500",
    sub: "pagamento único",
    highlight: true,
    badge: "Mais escolhido",
    features: [
      "Tudo do Básico",
      "Painel admin de pedidos",
      "Pagamento online integrado (Pix + cartão)",
      "Área do cliente com histórico",
      "Entrega em 14 dias",
      "2 meses de suporte",
    ],
  },
  {
    name: "Completo + Manutenção",
    price: "R$ 4.500",
    sub: "+ R$ 300/mês",
    highlight: false,
    features: [
      "Tudo do Completo",
      "Suporte contínuo",
      "Atualizações mensais",
      "Prioridade no atendimento",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="investimento" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Investimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para o Avistão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-[1.03]"
                  : "bg-card text-card-foreground"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-950 text-xs font-bold px-3 py-1 rounded-full">
                    <Star size={12} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="space-y-2 mb-6">
                <h3 className={`text-xl font-bold ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-black ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.sub}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={plan.highlight ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5587991516025"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Quero este plano
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          Condições especiais para pagamento antecipado. Entre em contato.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
