import { MessageCircle, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const CTASection = () => {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight">
              Se o cliente já está no celular,{" "}
              <span className="text-gradient">o Avistão também precisa estar</span>
            </h2>
            <p className="text-dark-foreground/60 text-lg max-w-2xl mx-auto">
              O delivery próprio não é mais luxo. É uma forma moderna de vender mais, 
              proteger margem e fortalecer a marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#solucao"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 animate-pulse-glow"
              >
                Quero entender essa solução
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-whatsapp text-whatsapp-foreground font-display font-bold text-lg hover:bg-whatsapp/90 transition-all shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/30 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>

            <p className="text-dark-foreground/40 text-sm pt-2">
              Respondo em até 2 horas
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
