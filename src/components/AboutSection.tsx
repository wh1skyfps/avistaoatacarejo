import { Code2, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quem está propondo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor local, comprometido com resultado. Trabalho com projetos reais, 
            entregas rápidas e foco total em gerar valor para o seu negócio.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Code2 size={20} />
              </div>
              <span className="font-medium">Mowin — Dev</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Rocket size={20} />
              </div>
              <span className="font-medium">Entrega rápida</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Users size={20} />
              </div>
              <span className="font-medium">Clientes reais</span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-xl bg-muted border flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium">Projeto {i}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          Projetos reais entregues para clientes reais.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
