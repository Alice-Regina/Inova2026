import { Users, Lightbulb, MapPin, Award } from 'lucide-react';

export default function Statistics() {
  const stats = [
    { icon: Users, number: '500+', label: 'Participantes Esperados' },
    { icon: Lightbulb, number: '25', label: 'Palestras e Workshops' },
    { icon: MapPin, number: '3', label: 'Áreas de Exposição' },
    { icon: Award, number: '10', label: 'Empresas Parceiras' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900-2 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-color-green-neon/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Números que Falam</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Um evento de escala internacional com impacto transformador no agronegócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-4xl font-bold text-green-500 mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
