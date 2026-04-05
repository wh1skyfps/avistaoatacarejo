import { Target, Clock, Zap, Rocket } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const UrgencySection = () => {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_72%_46%_/_0.03),transparent_70%)]" />
      <div className="absolute inset-0 text-slate-950 dark:text-white opacity-30 overflow-hidden"><FloatingPaths position={1} /><FloatingPaths position={-1} /></div>
      <div className="container relative">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Rocket size={14} />
              Oportunidade
            </div>
            <h2 className="heading-xl text-foreground">
              Quem entra no digital primeiro,{" "}
              <span className="text-gradient">domina a preferência do cliente</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              O consumidor está cada vez mais acostumado a comprar com poucos toques na tela. 
              Se o Avistão não ocupar esse espaço agora, outro mercado da região pode ocupar antes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 container-narrow">
          {[
            { icon: Target, text: "O cliente já está pronto", sub: "O comportamento de compra mudou definitivamente" },
            { icon: Clock, text: "O comportamento já mudou", sub: "Compras pelo celular são a nova normalidade" },
            { icon: Zap, text: "A oportunidade está aberta agora", sub: "Quem se posicionar primeiro conquista a preferência" },
          ].map((item, i) => (
            <AnimateOnScroll key={item.text} delay={i * 120}>
              <div className="card-premium p-7 md:p-8 space-y-5 hover:border-primary/25 hover:shadow-primary/5 hover:-translate-y-1 h-full text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center text-primary mx-auto md:mx-0">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <p className="font-display font-bold text-foreground text-base md:text-lg">{item.text}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.sub}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
