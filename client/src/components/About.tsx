import { Leaf, Zap, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  const indicators = [
    { icon: Leaf, label: 'Sustentabilidade', value: '100%' },
    { icon: Zap, label: 'Inovação', value: '50+' },
    { icon: Globe, label: 'Alcance Global', value: '15 Países' },
    { icon: TrendingUp, label: 'Crescimento', value: '+300%' },
  ];

  return (
    <section id="sobre" className="w-full py-32 relative overflow-hidden" style={{ backgroundColor: '#081E13' }}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(134, 215, 47, 0.05)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(245, 183, 0, 0.05)' }} />

      <div className="relative z-10 w-full flex items-center min-h-96">
        {/* Left - Full-width Image */}
        <div className="w-1/2 h-96 relative">
          <img
            src="/manus-storage/gallery-drone_b6673aeb.jpg"
            alt="Visão aérea de campo inteligente"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-1/2 px-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white">Sobre o INOVA IFPI</h2>
            <p className="text-lg" style={{ color: '#E5E5E5' }}>Um encontro transformador dedicado ao futuro do agronegócio.</p>
          </div>

          <p style={{ color: '#E5E5E5' }} className="leading-relaxed">
            O INOVA IFPI reúne especialistas, empreendedores e líderes do setor agrícola para explorar as tecnologias que estão revolucionando o campo. De inteligência artificial a automação inteligente, descubra como a inovação está transformando a forma como produzimos alimentos.
          </p>

          <p style={{ color: '#E5E5E5' }} className="leading-relaxed">
            Com foco em sustentabilidade, eficiência e impacto social, o evento apresenta soluções práticas que já estão mudando realidades no agronegócio moderno.
          </p>

          {/* Indicators */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {indicators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl transition-all duration-300 border"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <Icon className="w-6 h-6 mb-2" style={{ color: '#86D72F' }} />
                  <p className="text-sm" style={{ color: '#BDBDBD' }}>{item.label}</p>
                  <p className="text-lg font-bold" style={{ color: '#86D72F' }}>{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
