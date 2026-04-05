import AnimateOnScroll from "./AnimateOnScroll";

import story1 from "@/assets/story-1-casa.jpg";
import story2 from "@/assets/story-2-app.jpg";
import story3 from "@/assets/story-3-carrinho.jpg";
import story4 from "@/assets/story-4-checkout.jpg";
import story5 from "@/assets/story-5-entrega.jpg";

const steps = [
  {
    num: "01",
    image: story1,
    title: "O cliente lembra do que está faltando em casa",
    text: "No sofá, na correria do dia ou à noite, ele decide fazer as compras sem precisar sair.",
  },
  {
    num: "02",
    image: story2,
    title: "Abre o app do Avistão em segundos",
    text: "Entra no aplicativo, navega pelos produtos e encontra tudo com muito mais facilidade do que no WhatsApp.",
  },
  {
    num: "03",
    image: story3,
    title: "Adiciona tudo ao carrinho com praticidade",
    text: "Seleciona os itens, vê os preços, organiza a compra e finaliza com poucos toques.",
  },
  {
    num: "04",
    image: story4,
    title: "Escolhe pagamento e conclui o pedido",
    text: "Pagamento simples, processo organizado e experiência muito mais profissional para o cliente.",
  },
  {
    num: "05",
    image: story5,
    title: "Recebe a compra em casa com comodidade",
    text: "O cliente ganha conveniência, e o mercado ganha uma venda que talvez não aconteceria de outra forma.",
  },
];

const StoryboardSection = () => {
  return (
    <section className="section-spacing section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_72%_46%_/_0.02),transparent_70%)]" />
      
      <div className="container relative">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <p className="text-xs md:text-sm font-display font-bold text-primary tracking-widest uppercase">
              Jornada do Cliente
            </p>
            <h2 className="heading-xl text-dark-foreground">
              Como seria a experiência do seu cliente{" "}
              <span className="text-gradient">com o app</span>
            </h2>
            <p className="body-lg text-dark-foreground/50 max-w-2xl mx-auto">
              Da escolha dos produtos até a entrega em casa, tudo pensado para facilitar a compra 
              e aumentar a frequência dos pedidos.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="container-wide space-y-6 md:space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <AnimateOnScroll key={step.num} delay={i * 80}>
                <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-14 mb-10 md:mb-18`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2 shrink-0">
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-foreground/5 group">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Step number overlay */}
                      <div className="absolute top-4 left-4 md:top-5 md:left-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <span className="text-primary-foreground font-display font-black text-sm md:text-base">{step.num}</span>
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
                    {/* Timeline connector - desktop only */}
                    <div className="hidden md:flex items-center gap-3 mb-2">
                      <div className="w-8 h-px bg-primary/30" />
                      <span className="text-[10px] font-display font-bold text-primary tracking-[0.2em] uppercase">Passo {step.num}</span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-display font-bold text-dark-foreground leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-dark-foreground/50 leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.text}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="text-center mt-8 md:mt-12">
             <div className="inline-block bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-5">
               <p className="font-display font-bold text-base md:text-lg text-dark-foreground">
                 Simples para o cliente. <span className="text-primary">Lucrativo para o mercado.</span>
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default StoryboardSection;
