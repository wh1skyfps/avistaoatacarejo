import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar mensalidade?",
    a: "Não nos planos Básico e Completo. A mensalidade existe apenas no plano Completo + Manutenção, onde você recebe suporte contínuo e atualizações.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Entre 7 e 14 dias úteis, dependendo do plano escolhido.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% na assinatura do contrato e 50% na entrega do projeto finalizado.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
