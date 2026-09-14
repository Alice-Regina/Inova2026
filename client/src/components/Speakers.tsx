export default function Speakers() {
  const speakers = [
    {
      name: 'Dr. Carlos Silva',
      role: 'Especialista em IA Agrícola',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dra. Marina Costa',
      role: 'Diretora de Sustentabilidade',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Prof. João Santos',
      role: 'Pesquisador em Automação',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Eng. Ana Oliveira',
      role: 'Líder de Inovação Tecnológica',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Felipe Martins',
      role: 'Especialista em IoT',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dra. Beatriz Rocha',
      role: 'Consultora de Agronegócio',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="palestrantes" className="section-padding bg-gradient-to-b from-slate-900-2 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-color-green-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Palestrantes</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Líderes e especialistas que estão transformando o agronegócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden h-96 cursor-pointer"
            >
              {/* Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-sm text-green-500">{speaker.role}</p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                boxShadow: 'inset 0 0 30px rgba(134, 215, 47, 0.2)'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
