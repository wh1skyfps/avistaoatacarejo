import { Target, Clock, Zap } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const UrgencySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
              Quem entra no digital primeiro,{" "}
              <span className="text-gradient">domina a preferência do cliente</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              O consumidor está cada vez mais acostumado a comprar com poucos toques na tela. 
              Se o Avistão não ocupar esse espaço agora, outro mercado da região pode ocupar antes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          {[
            { icon: Target, text: "O cliente já está pronto" },
            { icon: Clock, text: "O comportamento já mudou" },
            { icon: Zap, text: "A oportunidade está aberta agora" },
          ].map((item, i) => (
            <AnimateOnScroll key={item.text} delay={i * 120}>
              <div className="flex items-center gap-4 bg-card border rounded-2xl px-8 py-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={24} />
                </div>
                <p className="font-display font-bold text-lg text-foreground">{item.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
