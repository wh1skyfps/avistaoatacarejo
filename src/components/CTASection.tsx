import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground">
            Pronto para parar de pagar comissão?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Essa proposta é válida por 7 dias.
          </p>

          <a
            href="https://wa.me/5587991516025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-primary-foreground text-primary font-bold text-xl hover:bg-primary-foreground/90 transition-all shadow-2xl hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Quero fechar negócio
          </a>

          <p className="text-primary-foreground/60 text-sm">
            Respondo em até 2 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
