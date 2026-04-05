import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import avistaoLogo from "@/assets/avistao-logo.jpg";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import heroLaptopMockup from "@/assets/hero-laptop-mockup.png";
import { useIsMobile } from "@/hooks/use-mobile";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, ease, delay },
});

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl sm:rounded-[3rem] m-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-20"
          src={isMobile ? "/videos/hero-bg-mobile.mp4" : "/videos/hero-bg.mp4"}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content — left side */}
          <div className="flex-1 max-w-lg text-center lg:text-left lg:max-w-xl">
            <motion.div {...fadeUp(0.15)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-dark-foreground/40">
                <img src={avistaoLogo} alt="Avistão" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" />
                Proposta exclusiva · Avistão Supermercados
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.3)}
              className="mt-8 text-balance text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] xl:text-[4rem] font-display font-bold tracking-[-0.04em] leading-[1.05] text-dark-foreground"
            >
              Sua rede merece uma{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                plataforma digital própria
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.45)}
              className="mt-7 max-w-xl text-balance text-[0.95rem] sm:text-[1.05rem] text-dark-foreground/45 leading-[1.7] tracking-[-0.01em]"
            >
              Vendas, delivery, cartão fidelidade e gestão multilojas — sem comissões, sem intermediários, 100% com a marca Avistão.
            </motion.p>

            <motion.div
              {...fadeUp(0.6)}
              className="mt-12 flex flex-col items-center sm:flex-row gap-3 lg:justify-start"
            >
              <a
                href="#solucao"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground font-display transition-all duration-300 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Ver como funciona
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5587991516025?text=Ol%C3%A1%2C%20vi%20a%20proposta%20do%20app%20de%20delivery%20do%20Avist%C3%A3o%20e%20quero%20entender%20melhor%20como%20funcionaria."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-dark-foreground/60 font-display backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-dark-foreground/90 hover:border-white/20 active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                Falar pelo WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Mockups — right side */}
          <motion.div
            className="relative flex-shrink-0 flex items-end justify-center"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.5 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute -inset-10 bg-primary/8 rounded-full blur-3xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Laptop */}
            <motion.div
              className="relative z-10 w-[280px] sm:w-[360px] lg:w-[420px]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroLaptopMockup}
                alt="Painel de gestão Avistão"
                className="w-full h-auto drop-shadow-2xl"
                width={1024}
                height={768}
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              className="relative z-20 -ml-14 sm:-ml-20 w-[190px] sm:w-[240px] lg:w-[300px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <img
                src={heroPhoneMockup}
                alt="App Avistão Supermercados"
                className="w-full h-auto drop-shadow-2xl"
                width={512}
                height={1024}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
