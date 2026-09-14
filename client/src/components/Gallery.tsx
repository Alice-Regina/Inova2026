import { Plane, Sprout, Truck } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      src: '/manus-storage/gallery-drone_b6673aeb.jpg',
      title: 'Tecnologia Aérea',
      description: 'Drones e sensores para monitoramento em tempo real',
      icon: Plane,
      position: 'left',
    },
    {
      src: '/manus-storage/gallery-plantation_4fe25d5e.jpg',
      title: 'Plantação Inteligente',
      description: 'IoT e IA transformando o cultivo agrícola',
      icon: Sprout,
      position: 'right',
    },
    {
      src: '/manus-storage/hero-agtech_0e4a2e12.jpg',
      title: 'Automação no Campo',
      description: 'Máquinas autônomas e eficiência operacional',
      icon: Truck,
      position: 'left',
    },
  ];

  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#081E13' }}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(245, 183, 0, 0.05)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(134, 215, 47, 0.05)' }} />

      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center py-16 px-20">
          <h2 className="text-5xl font-bold text-white mb-4">Galeria de Inovações</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#E5E5E5' }}>
            Conheça as tecnologias que estão revolucionando o agronegócio moderno.
          </p>
        </div>

        {/* Images alternating full-width */}
        {images.map((image, idx) => {
          const Icon = image.icon;
          const isLeft = image.position === 'left';

          return (
            <div
              key={idx}
              className="w-full flex items-center min-h-96 group"
            >
              {/* Image - Left or Right */}
              <div className={`w-1/2 h-96 relative ${isLeft ? 'order-1' : 'order-2'}`}>
                <img
                  src={image.src}
                  alt={image.title}
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
                <Icon className="w-12 h-12 mb-4" style={{ color: '#86D72F' }} />
                <h3 className="text-3xl font-bold text-white mb-3">{image.title}</h3>
                <p style={{ color: '#E5E5E5' }} className="text-lg">
                  {image.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
