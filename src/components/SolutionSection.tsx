import { ShoppingCart, CreditCard, LayoutDashboard, Palette } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const blocks = [
  {
    icon: ShoppingCart,
    title: "App do Cliente",
    items: ["Catálogo de produtos", "Carrinho de compras", "Finalização simples", "Entrega ou retirada", "Pagamento digital"],
  },
  {
    icon: CreditCard,
    title: "Checkout Inteligente",
    items: ["PIX", "Cartão de crédito/débito", "Confirmação de pedido", "Processo fácil para qualquer cliente"],
  },
  {
    icon: LayoutDashboard,
    title: "Painel Administrativo",
    items: ["Gerenciar pedidos", "Atualizar produtos", "Organizar operação", "Acompanhar pedidos em andamento"],
  },
  {
    icon: Palette,
    title: "Estrutura Profissional",
    items: ["Design moderno", "Marca própria do Avistão", "Experiência premium para o cliente"],
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 bg-surface-alt">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
              A solução: um app próprio de delivery{" "}
              <span className="text-gradient">para o Avistão</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma estrutura profissional para vender online com mais praticidade, 
              mais organização e mais lucro.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blocks.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 100}>
              <div className="bg-card border rounded-2xl p-8 space-y-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <b.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{b.title}</h3>
                <ul className="space-y-2.5">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
