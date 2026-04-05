import { ShoppingCart, CreditCard, LayoutDashboard, Palette, Sparkles } from "lucide-react";
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
    <section id="solucao" className="section-spacing bg-surface-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(0_72%_46%_/_0.03),transparent_60%)]" />
      <div className="container relative">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Sparkles size={14} />
              A solução
            </div>
            <h2 className="heading-xl text-foreground">
              Uma plataforma digital própria{" "}
              <span className="text-gradient">para o Avistão</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Vendas, delivery, cartão próprio e gestão multilojas — tudo em uma 
              estrutura profissional feita para a rede crescer.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 max-w-4xl mx-auto">
          {blocks.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 100}>
              <div className="card-premium p-6 md:p-8 space-y-5 hover:border-primary/25 hover:shadow-primary/5 hover:-translate-y-1 h-full">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary">
                  <b.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">{b.title}</h3>
                <ul className="space-y-2.5">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground text-[15px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
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
