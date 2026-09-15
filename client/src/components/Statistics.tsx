import React from 'react';
import { Users, Lightbulb, MapPin, Award } from 'lucide-react';
import fazendeiroOlhando from "../images/FazendeiroOlhandoGado.png";
import PilotandoDrone from "../images/PilotandoDrone.png";
import ColhendoSoja from "../images/ColhendoSoja.png";

export default function Statistics() {
  const stats = [
    { icon: Users, number: '250+', label: 'Participantes' },
    { icon: Lightbulb, number: '20+', label: 'Palestras e Workshops' },
    { icon: MapPin, number: '3', label: 'Áreas de Exposição' },
    { icon: Award, number: '10+', label: 'Empresas Parceiras' },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden py-24">
      {/* Glow de fundo ajustado para o modo claro */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LADO ESQUERDO: Textos e Estatísticas */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-semibold tracking-wider text-green-700 uppercase mb-2 block">
              Sobre o Evento
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Conectar Ideias, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-600">
                Tecnologia e Pessoas
              </span> <br />
              para o amanhã.
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-xl">
              Um evento de escala internacional com impacto transformador no agronegócio e na tecnologia.
              Reunimos os principais especialistas e startups para promover conexões que geram resultados reais.
            </p>

            {/* Grid dos Números */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left border-t border-slate-200 pt-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="group">
                    <div className="mb-3 flex justify-center sm:justify-start">
                      <Icon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                      {stat.number}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* LADO DIREITO: Imagens Inclinadas (Skew) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-2 h-[400px] md:h-[500px] w-full max-w-xl transform -skew-x-12 px-2">

              {/* Imagem 1 */}
              <div className="w-full h-full overflow-hidden rounded-2xl relative group shadow-md">
                <img
                  src={fazendeiroOlhando}
                  alt="Agricultor com Tecnologia no Campo"
                  className="w-full h-full object-cover transform skew-x-12 scale-[1.45] group-hover:scale-[1.55] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Imagem 2 */}
              <div className="w-full h-full overflow-hidden rounded-2xl relative group shadow-md">
                <img
                  src={PilotandoDrone}
                  alt="Sustentabilidade"
                  className="w-full h-full object-cover transform skew-x-12 scale-[1.45] group-hover:scale-[1.55] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-green-600/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Imagem 3 */}
              <div className="w-full h-full overflow-hidden rounded-2xl relative group shadow-md">
                <img
                  src={ColhendoSoja}
                  alt="Inovação e Robótica"
                  className="w-full h-full object-cover transform skew-x-12 scale-[1.45] group-hover:scale-[1.55] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}