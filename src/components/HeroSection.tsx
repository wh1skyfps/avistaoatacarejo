import { motion } from "framer-motion";
import avistaoLogo from "@/assets/avistao-logo.jpg";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";
import heroLaptopMockup from "@/assets/hero-laptop-mockup.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextEffect } from "./ui/text-effect";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroSection = ({ introComplete = false }: { introComplete?: boolean }) => {
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
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <img src={avistaoLogo} alt="Avistão" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" />
              <AnimatedShinyText className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase !text-red-500">
                🚀 Proposta exclusiva · Avistão Supermercados
              </AnimatedShinyText>
            </div>

            <h1 className="mt-8 text-balance text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] xl:text-[4rem] font-display font-bold tracking-[-0.04em] leading-[1.05]">
              <TextEffect
                per="word"
                as="span"
                preset="slide"
                delay={0.6}
                trigger={introComplete}
                className="text-dark-foreground"
              >
                {"Sua rede merece uma "}
              </TextEffect>
              <TextEffect
                per="word"
                as="span"
                preset="slide"
                delay={0.9}
                trigger={introComplete}
                className="text-primary"
              >
                plataforma digital própria
              </TextEffect>
            </h1>

            <div className="mt-7">
              <TextEffect
                per="word"
                as="p"
                preset="slide"
                delay={1.2}
                trigger={introComplete}
                className="max-w-xl text-balance text-[0.95rem] sm:text-[1.05rem] text-dark-foreground/45 leading-[1.7] tracking-[-0.01em]"
              >
                Vendas, delivery, cartão fidelidade e gestão multilojas — sem comissões, sem intermediários, 100% com a marca Avistão.
              </TextEffect>
            </div>

          </div>

          {/* Mockups — right side */}
          <motion.div
            className="relative flex-shrink-0 flex items-end justify-center"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={introComplete ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
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
