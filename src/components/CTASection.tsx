import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";


const CTASection = () => {
  return (
    <section className="section-spacing section-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>
      

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-7 md:space-y-10">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Sparkles size={14} />
              Próximo passo
            </div>
            <h2 className="heading-xl">
              Se o cliente já está no celular,{" "}
              <span className="text-gradient">o Avistão também precisa estar</span>
            </h2>
            <p className="body-lg text-dark-foreground/50 max-w-2xl mx-auto">
              O delivery próprio não é mais luxo. É uma forma moderna de vender mais, 
              proteger margem e fortalecer a marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center pt-6 md:pt-8">
              <a
                href="#solucao"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 md:py-5 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-base md:text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/35 hover:-translate-y-0.5 animate-pulse-glow active:scale-[0.98]"
              >
                Quero entender essa solução
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 md:py-5 rounded-2xl bg-whatsapp text-whatsapp-foreground font-display font-bold text-base md:text-lg hover:bg-whatsapp/90 transition-all duration-300 shadow-xl shadow-whatsapp/20 hover:shadow-2xl hover:shadow-whatsapp/30 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>

            <p className="text-dark-foreground/30 text-sm pt-2">
              Respondo em até 2 horas
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
