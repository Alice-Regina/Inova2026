import React from 'react';

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
    <section id="palestrantes" className="section-padding bg-slate-50 relative overflow-hidden py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-color-green-neon/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Nossos Palestrantes</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Líderes e especialistas que estão transformando o agronegócio e a tecnologia.
          </p>
        </div>

        {/* 
            Grid Responsivo Seguro:
            - Mobile: 1 coluna com largura máxima controlada (max-w-xs) para não ficar gigante
            - Tablet (sm): 2 colunas
            - Desktop (lg): 3 colunas impecáveis
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden h-80 sm:h-80 md:h-96 w-full max-w-xs sm:max-w-none mx-auto p-[2px] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* 1. Borda Neon Giratória (Cobrinha) */}
              <div className="absolute inset-0 bg-gradient-to-r from-color-green-neon via-transparent to-color-green-neon animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 2. Conteúdo do Card (Mantido escuro para destacar a foto e o texto branco do palestrante) */}
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900 z-10">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Sombra inferior para legibilidade do texto interno */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300" />

                {/* Dados do Palestrante */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-color-green-neon transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-xs md:text-sm text-color-green-neon font-medium">
                    {speaker.role}
                  </p>
                </div>
              </div>

              {/* Brilho interno */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" 
                style={{
                  boxShadow: 'inset 0 0 20px rgba(134, 215, 47, 0.25)'
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}