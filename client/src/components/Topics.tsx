import { Brain, Zap, Leaf, BarChart3, Shield, Cpu } from 'lucide-react';

export default function Topics() {
  const topics = [
    { icon: Brain, title: 'Inteligência Artificial', description: 'IA aplicada ao agronegócio moderno' },
    { icon: Zap, title: 'Automação Inteligente', description: 'Máquinas autônomas e eficiência' },
    { icon: Leaf, title: 'Agricultura Sustentável', description: 'Práticas eco-responsáveis' },
    { icon: BarChart3, title: 'Análise de Dados', description: 'Big Data para decisões estratégicas' },
    { icon: Shield, title: 'Segurança Alimentar', description: 'Rastreabilidade e qualidade' },
    { icon: Cpu, title: 'IoT e Sensores', description: 'Conectividade no campo' },
  ];

  return (
    <section id="temas" className="section-padding bg-gradient-to-b from-slate-900 to-slate-900-2 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-color-green-neon/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Temas Principais</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore os tópicos que definem o futuro do agronegócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-gray-300">{topic.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
