import { CreditCard, Smartphone, Gift, UserPlus, Heart, FileText, Phone, Eye, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import avistaoCardImg from "@/assets/avistao-card.png";

const features = [
  {
    icon: UserPlus,
    title: "Solicitação facilitada",
    desc: "O cliente pode iniciar o processo do Avistão Card direto pelo app, sem complicação.",
  },
  {
    icon: Gift,
    title: "Área de benefícios",
    desc: "Benefícios e vantagens do cartão acessíveis de forma clara dentro do aplicativo.",
  },
  {
    icon: Smartphone,
    title: "Mais praticidade",
    desc: "Tudo sobre o cartão em um só lugar — no celular do cliente, a qualquer hora.",
  },
  {
    icon: Heart,
    title: "Valorização da marca",
    desc: "Fortalece a identidade do Avistão Card e aumenta a fidelização do cliente.",
  },
];

const steps = [
  {
    icon: Smartphone,
    title: "Acessa a área do cartão no app",
    text: "O cliente encontra facilmente a opção do Avistão Card dentro do aplicativo.",
  },
  {
    icon: Eye,
    title: "Visualiza benefícios e vantagens",
    text: "Pode entender as condições, benefícios e diferenciais do cartão de forma clara.",
  },
  {
    icon: FileText,
    title: "Vê o que é necessário para solicitar",
    text: "Informações como RG, CPF, comprovante de residência e telefone para contato.",
  },
  {
    icon: ArrowRight,
    title: "Segue o processo de solicitação",
    text: "O app orienta o cliente de forma simples sobre como solicitar ou iniciar o atendimento.",
  },
  {
    icon: Heart,
    title: "Fica mais conectado à rede Avistão",
    text: "Além de comprar, o cliente passa a se relacionar mais com a marca e seus benefícios.",
  },
];

const AvistaoCardSection = () => {
  return (
    <section className="section-spacing section-dark relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px]" />

      <div className="container relative">
        {/* Header */}
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-5 mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 text-secondary font-display font-bold text-xs tracking-widest uppercase">
              <CreditCard size={14} />
              Avistão Card
            </div>
            <h2 className="heading-xl">
              O app também pode fortalecer o{" "}
              <span className="text-gradient">Avistão Card</span>
            </h2>
            <p className="body-lg text-dark-foreground/50 max-w-2xl mx-auto">
              Além de vender mais no delivery, o app pode ajudar a valorizar ainda mais o cartão da rede e aproximar o cliente da marca.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Card showcase */}
        <AnimateOnScroll delay={50}>
          <div className="container-narrow mb-16 md:mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/[0.03] border border-white/8 rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden">
              <div className="w-full md:w-2/5 shrink-0 flex justify-center">
                <img
                  src={avistaoCardImg}
                  alt="Avistão Card / Tricard"
                  className="w-48 md:w-56 rounded-2xl shadow-2xl shadow-secondary/20 animate-float"
                />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-display font-black leading-tight">
                  Conveniência + crédito próprio +{" "}
                  <span className="text-secondary">relacionamento</span>
                </h3>
                <p className="text-dark-foreground/50 text-sm md:text-base leading-relaxed">
                  O app pode se tornar um canal inteligente para aumentar o uso, a adesão e a valorização do Avistão Card — unindo praticidade digital com o cartão da rede.
                </p>
                <p className="text-dark-foreground/40 text-xs md:text-sm">
                  Mais recorrência de compra. Mais fidelização. <span className="text-secondary font-bold">Mais valor para a marca.</span>
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 container-wide mb-16 md:mb-24">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 80}>
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-7 space-y-4 hover:border-secondary/20 hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <f.icon size={22} className="text-secondary" />
                </div>
                <h3 className="font-display font-bold text-base md:text-lg">{f.title}</h3>
                <p className="text-dark-foreground/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Steps - How to get the card */}
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-4 mb-12 md:mb-16">
            <h3 className="heading-lg">
              Como o cliente pode solicitar o{" "}
              <span className="text-gradient">Avistão Card</span>
            </h3>
            <p className="text-dark-foreground/50 text-sm md:text-base max-w-xl mx-auto">
              Tudo mais simples, organizado e acessível dentro de uma experiência digital moderna.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="container-narrow space-y-4 md:space-y-5">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.title} delay={i * 80}>
              <div className="flex items-start gap-5 md:gap-6 bg-white/[0.04] border border-white/8 rounded-2xl md:rounded-3xl p-5 md:p-7 hover:border-secondary/20 transition-all duration-500">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <step.icon size={22} className="text-secondary" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-dark border-2 border-secondary/30 flex items-center justify-center">
                    <span className="text-[10px] font-display font-black text-secondary">{i + 1}</span>
                  </div>
                </div>
                <div className="space-y-1.5 pt-1">
                  <h4 className="font-display font-bold text-[15px] md:text-base">{step.title}</h4>
                  <p className="text-dark-foreground/50 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <p className="text-center text-xs md:text-sm text-dark-foreground/30 mt-8 md:mt-12 max-w-lg mx-auto">
            * Funcionalidades apresentadas como possibilidades estratégicas do app, que podem ser adaptadas conforme a operação do Avistão.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AvistaoCardSection;
