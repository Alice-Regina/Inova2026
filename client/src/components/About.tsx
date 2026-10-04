import React from 'react';
import { Award, Users, GraduationCap, Calendar } from 'lucide-react';
import LogoInova from "../images/Logo-Inova.png"
export default function About() {
  // Indicadores com os dados REAIS extraídos do projeto oficial
  const indicators = [
    { icon: Award, label: 'Tradição & Inovação', value: '5ª Edição' },
    { icon: Users, label: 'Público Alcançado pelo Inova', value: '1.000+' },
    { icon: GraduationCap, label: 'Alunos na Organização', value: '60+' },
    { icon: Calendar, label: 'Imersão em 3 Turnos', value: '20 a 22 Out' },
  ];
  return (
    <section id="sobre" className="w-full py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#081E13' }}>
      {/* Elementos visuais de background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(134, 215, 47, 0.05)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(245, 183, 0, 0.05)' }} />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Lado Esquerdo - Imagem em Destaque com Borda/Glow */}
          <div className="w-full lg:w-1/2 h-[380px] md:h-[480px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src={LogoInova}
              alt="Tecnologia e Inovação no Agronegócio do Sul do Piauí"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Tag em Destaque sobre a Imagem */}
            <div className="absolute bottom-4 left-4 bg-[#081E12]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/30 text-xs font-bold text-amber-400">
              Conectando Ensino, Governo e Agronegócio
            </div>
          </div>

          {/* Lado Direito - Conteúdo Textual */}
          <div className="w-full lg:w-1/2 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30 inline-block">
                5ª Semana de Propriedade Intelectual e Inovação
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">INOVA IFPI 2026</span>
              </h2>
              <p className="text-base md:text-lg font-semibold ">
                Tecnologia e Inovação Movendo o Agronegócio.
              </p>
            </div>

            <p style={{ color: '#E5E5E5' }} className="text-sm md:text-base leading-relaxed">
              O <strong className="text-white">INOVA IFPI 2026</strong> chega à sua 5ª edição nos dias <strong className="text-white">20, 21 e 22 de Outubro de 2026</strong> como o maior encontro de inovação, propriedade intelectual e transferência tecnológica do Sul do Piauí. Durante três dias e em três turnos, o IFPI Campus Floriano reunirá pesquisadores, estudantes e empresários com minicursos nos laboratórios (manhã e tarde) e grandes palestras no auditório principal (19h às 22h).
            </p>

            <p style={{ color: '#E5E5E5' }} className="text-sm md:text-base leading-relaxed">
              Baseado no modelo da <strong className="text-white">Tríplice Hélice (Instituição-Empresa-Governo)</strong> e fortalecendo o papel dos Núcleos de Inovação Tecnológica (NITs), a edição de 2026 traz como foco as soluções para o campo em parceria com grandes produtores da região, como o <strong className="text-amber-400">Grupo Progresso</strong>, além de integrar alunos e professores do IFPI, UFPI, UESPI, FAESF e escolas técnicas locais.
            </p>

            {/* Grid de Indicadores com Métricas Reais */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {indicators.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl transition-all duration-300 border group"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(12px)',
                      borderColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                  >
                    <Icon className="w-6 h-6 mb-2 text-amber-400 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs font-medium text-gray-300">{item.label}</p>
                    <p className="text-lg md:text-xl font-bold text-white mt-0.5">{item.value}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .about-photo {
          transition: transform .45s cubic-bezier(.2,.7,.2,1), z-index 0s .2s;
        }
        .about-photo:hover {
          transform: scale(1.06);
          z-index: 50 !important;
          transition: transform .45s cubic-bezier(.2,.7,.2,1), z-index 0s;
        }
        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .about-float { animation: aboutFloat 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .about-float { animation: none; } }
      `}</style>
    </section>
  );
}
