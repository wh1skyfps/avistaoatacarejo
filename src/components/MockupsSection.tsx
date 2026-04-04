import AnimateOnScroll from "./AnimateOnScroll";

const MockupsSection = () => {
  return (
    <section className="py-24 section-dark overflow-hidden">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight">
              Como isso pode funcionar{" "}
              <span className="text-gradient">na prática</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {/* Phone 1 - App */}
          <AnimateOnScroll delay={0}>
            <div className="w-[220px]">
              <p className="text-center text-sm text-dark-foreground/50 font-display font-medium mb-4">App do Cliente</p>
              <div className="bg-foreground/80 rounded-[2rem] p-2.5 shadow-2xl shadow-primary/10">
                <div className="bg-gradient-to-b from-primary/5 to-background rounded-[1.5rem] aspect-[9/18] flex flex-col overflow-hidden">
                  <div className="bg-primary/10 px-3 py-2.5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/30" />
                    <span className="text-[10px] font-bold text-foreground">Avistão</span>
                  </div>
                  <div className="flex-1 p-2.5 space-y-1.5">
                    <div className="h-2 w-1/2 bg-foreground/8 rounded mb-2" />
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-2 bg-card/40 rounded-lg p-2">
                        <div className="w-10 h-10 rounded-md bg-primary/10 shrink-0" />
                        <div className="flex-1 space-y-1 py-0.5">
                          <div className="h-1.5 w-3/4 bg-foreground/8 rounded" />
                          <div className="h-1.5 w-1/3 bg-primary/20 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phone 2 - Checkout */}
          <AnimateOnScroll delay={150}>
            <div className="w-[220px]">
              <p className="text-center text-sm text-dark-foreground/50 font-display font-medium mb-4">Checkout</p>
              <div className="bg-foreground/80 rounded-[2rem] p-2.5 shadow-2xl shadow-primary/10">
                <div className="bg-gradient-to-b from-primary/5 to-background rounded-[1.5rem] aspect-[9/18] flex flex-col overflow-hidden">
                  <div className="px-3 py-3">
                    <div className="h-2 w-1/3 bg-foreground/8 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="bg-card/40 rounded-lg p-3 space-y-2">
                        <div className="h-1.5 w-1/2 bg-foreground/8 rounded" />
                        <div className="h-8 bg-foreground/5 rounded-md" />
                      </div>
                      <div className="bg-card/40 rounded-lg p-3 space-y-2">
                        <div className="h-1.5 w-1/3 bg-foreground/8 rounded" />
                        <div className="flex gap-2">
                          <div className="h-8 flex-1 bg-primary/10 rounded-md border border-primary/20" />
                          <div className="h-8 flex-1 bg-foreground/5 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto px-3 pb-3">
                    <div className="bg-primary rounded-xl py-2.5 text-center text-[10px] font-bold text-primary-foreground">
                      Finalizar Pedido
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Laptop - Admin */}
          <AnimateOnScroll delay={300}>
            <div className="w-[340px]">
              <p className="text-center text-sm text-dark-foreground/50 font-display font-medium mb-4">Painel Admin</p>
              <div className="bg-foreground/80 rounded-xl p-2 shadow-2xl shadow-primary/10">
                <div className="bg-background/95 rounded-lg aspect-[16/10] p-3 overflow-hidden">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-loss/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gain/50" />
                  </div>
                  <div className="flex gap-2 h-[calc(100%-16px)]">
                    <div className="w-1/5 space-y-1.5 border-r border-border pr-2">
                      {["Pedidos", "Produtos", "Clientes", "Config."].map((item) => (
                        <div key={item} className="text-[6px] text-foreground/50 py-0.5">{item}</div>
                      ))}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex gap-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex-1 bg-primary/5 rounded-md p-2">
                            <div className="h-1 w-1/2 bg-foreground/8 rounded mb-1" />
                            <div className="h-2.5 w-2/3 bg-primary/20 rounded" />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex items-center gap-2 bg-card/50 rounded-md px-2 py-1">
                            <div className="w-4 h-4 rounded bg-primary/10" />
                            <div className="flex-1 h-1.5 bg-foreground/5 rounded" />
                            <div className="w-10 h-3 bg-gain/20 rounded text-[5px] text-gain flex items-center justify-center font-bold">Novo</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[380px] h-2 bg-foreground/60 rounded-b-xl mx-auto -mt-0.5" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MockupsSection;
