import AnimateOnScroll from "./AnimateOnScroll";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const MockupsSection = () => {
  return (
    <section className="section-spacing section-dark overflow-hidden">
      <div className="container">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-6 mb-16 md:mb-24">
            <h2 className="heading-xl">
              Como isso pode funcionar{" "}
              <span className="text-gradient">na prática</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Mobile: Stack vertically, Desktop: horizontal */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-10 container-wide">
          {/* Phone 1 - App */}
          <AnimateOnScroll delay={0}>
            <div className="w-[200px] md:w-[220px]">
              <p className="text-center text-xs text-dark-foreground/40 font-display font-semibold mb-4 tracking-widest uppercase">App do Cliente</p>
              <div className="bg-foreground/80 rounded-[2rem] p-2.5 shadow-2xl shadow-primary/10 ring-1 ring-white/5">
                <div className="bg-gradient-to-b from-primary/5 to-background rounded-[1.5rem] aspect-[9/18] flex flex-col overflow-hidden">
                  <div className="bg-primary/8 px-3 py-2.5 flex items-center gap-2 border-b border-primary/5">
                    <img src={avistaoLogo} alt="Avistão" className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-[10px] font-bold text-foreground">Avistão</span>
                  </div>
                  <div className="flex-1 p-2.5 space-y-1.5">
                    <div className="h-2 w-1/2 bg-foreground/6 rounded-full mb-2" />
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-2 bg-card/40 rounded-lg p-2 border border-border/20">
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/10 to-secondary/10 shrink-0" />
                        <div className="flex-1 space-y-1 py-0.5">
                          <div className="h-1.5 w-3/4 bg-foreground/6 rounded-full" />
                          <div className="h-1.5 w-1/3 bg-primary/15 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-2.5 pb-2.5">
                    <div className="bg-primary rounded-xl py-2 text-center text-[9px] font-bold text-primary-foreground shadow-sm">
                      Ver Carrinho
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phone 2 - Checkout */}
          <AnimateOnScroll delay={150}>
            <div className="w-[200px] md:w-[220px]">
              <p className="text-center text-xs text-dark-foreground/40 font-display font-semibold mb-4 tracking-widest uppercase">Checkout</p>
              <div className="bg-foreground/80 rounded-[2rem] p-2.5 shadow-2xl shadow-primary/10 ring-1 ring-white/5">
                <div className="bg-gradient-to-b from-primary/5 to-background rounded-[1.5rem] aspect-[9/18] flex flex-col overflow-hidden">
                  <div className="px-3 py-3">
                    <div className="h-2 w-1/3 bg-foreground/6 rounded-full mb-4" />
                    <div className="space-y-2.5">
                      <div className="bg-card/40 rounded-lg p-3 space-y-2 border border-border/20">
                        <div className="h-1.5 w-1/2 bg-foreground/6 rounded-full" />
                        <div className="h-8 bg-foreground/4 rounded-md" />
                      </div>
                      <div className="bg-card/40 rounded-lg p-3 space-y-2 border border-border/20">
                        <div className="h-1.5 w-1/3 bg-foreground/6 rounded-full" />
                        <div className="flex gap-2">
                          <div className="h-8 flex-1 bg-primary/10 rounded-md border border-primary/20" />
                          <div className="h-8 flex-1 bg-foreground/4 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto px-3 pb-3">
                    <div className="bg-primary rounded-xl py-2.5 text-center text-[9px] font-bold text-primary-foreground shadow-sm">
                      Finalizar Pedido
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Laptop - Admin */}
          <AnimateOnScroll delay={300}>
            <div className="w-full max-w-[340px] lg:w-[340px]">
              <p className="text-center text-xs text-dark-foreground/40 font-display font-semibold mb-4 tracking-widest uppercase">Painel Admin</p>
              <div className="bg-foreground/80 rounded-xl p-2 shadow-2xl shadow-primary/10 ring-1 ring-white/5">
                <div className="bg-background/95 rounded-lg aspect-[16/10] p-3 overflow-hidden">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-loss/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gain/40" />
                  </div>
                  <div className="flex gap-2 h-[calc(100%-16px)]">
                    <div className="w-1/5 space-y-1.5 border-r border-border/50 pr-2">
                      {["Pedidos", "Produtos", "Clientes", "Config."].map((item) => (
                        <div key={item} className="text-[6px] text-foreground/40 py-0.5">{item}</div>
                      ))}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex gap-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex-1 bg-primary/5 rounded-md p-2">
                            <div className="h-1 w-1/2 bg-foreground/6 rounded mb-1" />
                            <div className="h-2.5 w-2/3 bg-primary/15 rounded" />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex items-center gap-2 bg-card/50 rounded-md px-2 py-1 border border-border/20">
                            <div className="w-4 h-4 rounded bg-primary/10" />
                            <div className="flex-1 h-1.5 bg-foreground/4 rounded" />
                            <div className="w-10 h-3 bg-gain/15 rounded text-[5px] text-gain flex items-center justify-center font-bold">Novo</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[90%] h-2 bg-foreground/50 rounded-b-xl mx-auto -mt-0.5" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MockupsSection;
