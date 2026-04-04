import { ShoppingCart, CreditCard, Package, Smartphone } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Cardápio Digital",
    desc: "Categorias e fotos dos produtos organizados de forma profissional.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Integrado",
    desc: "Pix, cartão de crédito e débito — tudo em um só lugar.",
  },
  {
    icon: Package,
    title: "Painel Admin",
    desc: "Gerencie pedidos em tempo real com um painel completo.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    desc: "Funciona perfeitamente no celular de qualquer cliente.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Um App Próprio do Avistão
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa para vender direto pro seu cliente, sem intermediários.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card border rounded-xl p-6 text-center space-y-4 hover:shadow-lg hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="mx-auto w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
