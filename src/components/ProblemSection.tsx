import { TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="proposta" className="py-20 bg-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quanto você paga de comissão por mês?
          </h2>
          <p className="text-muted-foreground text-lg">
            Plataformas como iFood cobram taxas que corroem seu lucro silenciosamente.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border p-8 md:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-loss">
              <TrendingDown size={28} />
              <span className="text-xl font-bold">Simulação de Perdas</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-muted-foreground">Comissão do iFood</span>
                <span className="font-semibold text-foreground">12% a 27% por pedido</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-muted-foreground">Faturamento mensal estimado</span>
                <span className="font-semibold text-foreground">R$ 50.000</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Perda mensal com taxas</span>
                <span className="font-black text-2xl text-loss">até R$ 13.500</span>
              </div>
            </div>

            <div className="bg-loss/10 rounded-lg p-4 text-center">
              <p className="text-loss font-semibold text-lg">
                Esse dinheiro poderia ficar no seu caixa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
