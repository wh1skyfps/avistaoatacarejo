import { X, Check, TrendingDown, AlertTriangle, Percent } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

import dinheiroImg from "@/assets/dinheiro.png";

const taxBreakdown = [
  { label: "Comissão por pedido", value: "12% a 27%", desc: "Cada venda feita pelo iFood desconta essa porcentagem direto do seu faturamento." },
  { label: "Taxa de entrega repassada", value: "Variável", desc: "O custo logístico muitas vezes recai sobre o estabelecimento, não sobre o cliente." },
  { label: "Mensalidade do plano", value: "R$ 100+/mês", desc: "Planos com maior visibilidade cobram mensalidades fixas além das comissões." },
  { label: "Promoções obrigatórias", value: "Descontos forçados", desc: "Para aparecer no app, muitas vezes é preciso participar de promoções que reduzem sua margem." },
];

const scenarios = [
  { revenue: "R$ 20 mil", loss: "R$ 5.400", annual: "R$ 64.800" },
  { revenue: "R$ 50 mil", loss: "R$ 13.500", annual: "R$ 162.000", featured: true },
  { revenue: "R$ 80 mil", loss: "R$ 21.600", annual: "R$ 259.200" },
];

const thirdParty = [
  "Comissão de até 27% por pedido",
  "Dependência total da plataforma",
  "Menor controle sobre a experiência",
  "Cliente pertence ao iFood, não a você",
];

const ownApp = [
  "Zero comissão por pedido",
  "Marca 100% fortalecida",
  "Controle total da operação",
  "Cliente dentro do seu ecossistema",
];

const TaxComparisonSection = () => {
  return (
    <section className="section-spacing section-dark relative overflow-hidden">
      <div className="absolute inset-0 text-white opacity-20 overflow-hidden"><FloatingPaths position={1} /><FloatingPaths position={-1} /></div>
      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 text-loss font-display font-bold text-xs tracking-widest uppercase">
              <AlertTriangle size={14} />
              Atenção
            </div>
            <h2 className="heading-xl">
              Você está pagando caro para{" "}
              <span className="text-gradient">vender o que já é seu.</span>
            </h2>
            <p className="body-lg text-dark-foreground/50 max-w-2xl mx-auto">
              O iFood e outras plataformas cobram taxas que podem ultrapassar <strong className="text-dark-foreground/80">27% por pedido</strong>. 
              Isso significa que a cada R$ 100 vendidos, até R$ 27 vão para o bolso de outra empresa — e não para o seu caixa.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tax breakdown */}
        <AnimateOnScroll delay={50}>
          <div className="container-narrow mb-14 md:mb-20">
            <h3 className="text-center text-sm md:text-base font-display font-bold text-dark-foreground/60 mb-6 uppercase tracking-wider">
              Como o iFood cobra do seu negócio
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {taxBreakdown.map((item, i) => (
                <div key={item.label} className="bg-white/[0.03] border border-loss/10 rounded-2xl p-5 md:p-6 space-y-2 hover:border-loss/25 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-dark-foreground/80">{item.label}</span>
                    <span className="text-loss font-display font-black text-sm bg-loss/10 px-2.5 py-1 rounded-lg">{item.value}</span>
                  </div>
                  <p className="text-xs text-dark-foreground/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80}>
          <div className="container-narrow mb-14 md:mb-20 p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <motion.div
                className="w-full md:w-1/2 shrink-0"
                animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img
                  src={dinheiroImg}
                  alt="Dinheiro perdido em comissões"
                  className="w-full max-w-xs mx-auto md:max-w-none drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-display font-black leading-tight">
                  Esse dinheiro poderia estar{" "}
                  <span className="text-primary">no caixa do Avistão</span>
                </h3>
                <p className="text-dark-foreground/50 text-sm md:text-base leading-relaxed">
                  A cada pedido feito por plataformas de terceiros, uma fatia significativa do faturamento vai embora em comissões — sem que o cliente sequer saiba que está comprando do Avistão.
                </p>
                <p className="text-dark-foreground/40 text-xs md:text-sm">
                  Com um app próprio, <span className="text-primary font-bold">100% do valor fica com você.</span>
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Loss scenarios */}
        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 container-narrow mb-12 md:mb-20">
            {scenarios.map((s) => (
              <div
                key={s.revenue}
                className={`rounded-2xl md:rounded-3xl p-6 md:p-7 text-center space-y-3 border transition-all duration-500 hover:-translate-y-1 ${
                  s.featured
                    ? "bg-primary/8 border-primary/25 shadow-lg shadow-primary/5 scale-[1.02]"
                    : "bg-white/[0.04] border-white/10 hover:border-primary/20"
                }`}
              >
                <p className="text-xs text-dark-foreground/40 font-medium uppercase tracking-wider">Faturamento</p>
                <p className="text-xl md:text-2xl font-display font-black">{s.revenue}<span className="text-sm font-medium text-dark-foreground/40">/mês</span></p>
                <div className="flex items-center justify-center gap-1.5 text-loss">
                  <TrendingDown size={15} />
                  <span className="text-xs font-semibold">Perda com taxas</span>
                </div>
                <p className="text-2xl md:text-3xl font-display font-black text-loss">
                  {s.loss}<span className="text-sm font-semibold">/mês</span>
                </p>
                <div className="bg-loss/8 rounded-xl py-2.5 px-3">
                  <p className="text-[10px] text-dark-foreground/40 mb-0.5">Prejuízo anual</p>
                  <p className="text-base md:text-lg font-display font-black text-loss">{s.annual}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-center text-base md:text-lg font-display font-bold text-primary mb-14 md:mb-20 px-4">
            Em poucos meses, esse valor pode ser <span className="underline decoration-primary/40 decoration-2 underline-offset-4">muito maior</span> do que o investimento em um app próprio.
          </p>
        </AnimateOnScroll>

        {/* Comparison */}
        <AnimateOnScroll delay={300}>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 container-narrow">
            {/* Third party */}
            <div className="bg-white/[0.03] border border-loss/15 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-loss/15 flex items-center justify-center">
                  <X size={20} className="text-loss" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg">App de terceiros</h3>
                  <p className="text-xs text-dark-foreground/40">iFood, Rappi, etc.</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {thirdParty.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark-foreground/50 text-[15px]">
                    <X size={15} className="text-loss/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Own app */}
            <div className="bg-primary/[0.06] border border-primary/20 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-5 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <Check size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg">App próprio</h3>
                  <p className="text-xs text-dark-foreground/40">100% do Avistão</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {ownApp.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark-foreground/70 text-[15px]">
                    <Check size={15} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TaxComparisonSection;
