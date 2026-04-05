import { MapPin, Building2, Users, Package, Truck, BarChart3, Settings, Globe } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const branches = [
  { name: "Avistão Atacarejo", emoji: "🏪" },
  { name: "Avistão Sertânia", emoji: "🏬" },
  { name: "Avistão Carnaíba", emoji: "🏬" },
  { name: "Avistão Iguaraci", emoji: "🏬" },
  { name: "Avistão Express", emoji: "⚡" },
];

const clientFeatures = [
  { icon: MapPin, title: "Escolha da filial", desc: "O cliente seleciona a unidade mais próxima ou preferida." },
  { icon: Package, title: "Catálogo da unidade", desc: "Cada filial pode ter seus produtos organizados de forma independente." },
  { icon: Truck, title: "Entrega conforme região", desc: "Pedido direcionado e entrega organizada por área de cobertura." },
];

const operationFeatures = [
  { icon: Building2, title: "Organização por loja", desc: "Cada unidade opera de forma separada, com clareza e controle." },
  { icon: BarChart3, title: "Gestão mais clara", desc: "Pedidos separados por unidade — acompanhamento profissional." },
  { icon: Settings, title: "Preparado para crescer", desc: "Estrutura escalável conforme a rede Avistão expande." },
];

const MultiBranchSection = () => {
  return (
    <section className="section-spacing bg-surface-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_72%_46%_/_0.03),transparent_60%)]" />

      <div className="container relative">
        {/* Header */}
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Globe size={14} />
              Multilojas
            </div>
            <h2 className="heading-xl text-foreground">
              Uma solução pensada para{" "}
              <span className="text-gradient">toda a rede Avistão</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              O app pode ser estruturado para atender diferentes unidades, mantendo organização, praticidade e experiência padronizada para o cliente.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Two sides: client + operation */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 container-wide mb-16 md:mb-24">
          {/* Client side */}
          <AnimateOnScroll delay={50}>
             <div className="card-premium p-7 md:p-9 space-y-7 h-full">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-foreground">Para o cliente</h3>
                  <p className="text-xs text-muted-foreground">Experiência simples e organizada</p>
                </div>
              </div>
              <div className="space-y-4">
                {clientFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">{f.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Operation side */}
          <AnimateOnScroll delay={150}>
            <div className="card-premium p-6 md:p-8 space-y-6 h-full">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Settings size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-foreground">Para a operação</h3>
                  <p className="text-xs text-muted-foreground">Gestão profissional por unidade</p>
                </div>
              </div>
              <div className="space-y-4">
                {operationFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">{f.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Branches */}
        <AnimateOnScroll delay={200}>
          <div className="container-narrow text-center space-y-4 mb-8 md:mb-12">
            <h3 className="heading-lg text-foreground">
              Estrutura pensada para a{" "}
              <span className="text-gradient">realidade do Avistão</span>
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Cada unidade pode ser organizada dentro da operação digital de forma muito mais profissional e escalável.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 container-wide">
          {branches.map((b, i) => (
            <AnimateOnScroll key={b.name} delay={i * 60}>
              <div className="card-premium text-center p-5 md:p-6 hover:border-primary/25 hover:shadow-primary/5 hover:-translate-y-1 space-y-2.5">
                <span className="text-2xl md:text-3xl">{b.emoji}</span>
                <p className="font-display font-bold text-xs md:text-sm text-foreground leading-tight">{b.name}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <p className="text-center text-base md:text-lg font-display font-bold text-primary mt-10 md:mt-14 px-4">
            Isso não é um app simples. É uma <span className="underline decoration-primary/40 decoration-2 underline-offset-4">estrutura digital forte</span> para toda a rede.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default MultiBranchSection;
