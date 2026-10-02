import { Plane, Sprout, Truck } from 'lucide-react';

export default function Gallery() {
  const inovaEdicoes = [
    {
      title: 'Inova IFPI 2022',
      date: 'Outubro de 2022',
      description: 'Foco na integração entre soluções tecnológicas e práticas sustentáveis para o desenvolvimento regional.',
      src: '/caminho/para/imagem1.jpg',
      position: 'left'
    },
    {
      title: 'Inova IFPI 2023',
      date: 'Novembro de 2023',
      description: 'Foco em empreendedorismo digital, startups e inovação aberta no ecossistema tecnológico piauiense.',
      src: '/caminho/para/imagem2.jpg',
      position: 'right'
    },
    {
      title: 'Inova IFPI 2024',
      date: 'Outubro de 2024',
      description: 'Debates e protótipos voltados para o impacto da inteligência artificial na automação e serviços públicos.',
      src: '/caminho/para/imagem3.jpg',
      position: 'left'
    },
    {
      title: 'Inova IFPI 2025',
      date: 'Setembro de 2025',
      description: 'Apresentação de projetos voltados para urbanismo sustentável, mobilidade urbana e inclusão digital.',
      src: '/caminho/para/imagem4.jpg',
      position: 'right'
    }
  ];

  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#081E13' }}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(245, 183, 0, 0.05)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(134, 215, 47, 0.05)' }} />

      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center py-16 px-20">
          <h2 className="text-5xl font-bold text-white mb-4">Galeria de Eventos InovaIFPI</h2>
          <p className="text-lg mb-4" style={{ color: '#E5E5E5' }}>
            <b style={{ color: '#F5B700' }}>5 anos</b> de inovações, transformações e contribuições à sociedade
          </p>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#E5E5E5' }}>
            Conheça algumas de nossas edições
          </p>
        </div>

        {inovaEdicoes.map((item, idx) => {
          const isLeft = item.position === 'left';

          return (
            <div
              key={idx}
              className="w-full flex items-center min-h-96 group"
            >
              {/* Image - Left or Right */}
              <div className={`w-1/2 h-96 relative ${isLeft ? 'order-1' : 'order-2'}`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: 'linear-gradient(to top, rgba(8, 30, 19, 0.6), transparent)' }}
                />
              </div>

              {/* Content - Right or Left */}
              <div className={`w-1/2 px-20 py-12 flex flex-col justify-center ${isLeft ? 'order-2' : 'order-1'}`}>
                <span className="text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: '#86D72F' }}>
                  {item.date}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">{item.title}</h3>
                <p style={{ color: '#E5E5E5' }} className="text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
