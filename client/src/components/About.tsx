import { CalendarDays, Lightbulb, TrendingUp, Cpu } from 'lucide-react';

import imagem1 from '../images/imagem1.jpg';
import imagem2 from '../images/imagem2.jpg';
import imagem3 from '../images/imagem3.jpg';
import imagem4 from '../images/imagem4.jpg';
import imagem5 from '../images/imagem5.jpg';
import imagem6 from '../images/imagem6.jpeg';
import imagem7 from '../images/imagem7.jpeg';
import imagem8 from '../images/imagem8.jpeg';

const GREEN = '#86D72F';

// Colagem escalonada em 2 colunas. Medidas em "unidades de largura" (o container tem 100 de largura e 125 de altura):
// x = distância da esquerda, y = distância do topo, w = largura da foto. Fotos de baixo ficam por cima das de cima.
const CONTAINER_H = 125;

const photos = [
  { src: imagem1, alt: 'INOVA IFPI - imagem 1', x: 0,  y: 0,  w: 58,   ratio: '16/9', delay: '0s' },
  { src: imagem2, alt: 'INOVA IFPI - imagem 2', x: 52, y: 7,  w: 41,   ratio: '3/2',  delay: '0.6s' },
  { src: imagem3, alt: 'INOVA IFPI - imagem 3', x: 15, y: 26, w: 42.5, ratio: '3/2',  delay: '1.2s' },
  { src: imagem4, alt: 'INOVA IFPI - imagem 4', x: 58, y: 31, w: 42,   ratio: '3/2',  delay: '1.8s' },
  { src: imagem5, alt: 'INOVA IFPI - imagem 5', x: 6,  y: 53, w: 47.5, ratio: '3/2',  delay: '2.4s' },
  { src: imagem6, alt: 'INOVA IFPI - imagem 6', x: 51, y: 61, w: 47,   ratio: '13/9', delay: '3s' },
  { src: imagem7, alt: 'INOVA IFPI - imagem 7', x: 10, y: 82, w: 44,   ratio: '3/2',  delay: '3.6s' },
  { src: imagem8, alt: 'INOVA IFPI - imagem 8', x: 56, y: 91, w: 44,   ratio: '3/2',  delay: '4.2s' },
];

const topics = [
  {
    icon: CalendarDays,
    title: 'Cinco anos de história',
    text: 'Evento realizado pelo Instituto Federal do Piauí (IFPI), no Campus Floriano, que reúne estudantes, servidores e comunidade.',
  },
  {
    icon: Lightbulb,
    title: 'Tema desta edição',
    text: '“Inovação e tecnologia movendo o agronegócio”.',
  },
  {
    icon: TrendingUp,
    title: 'Agronegócio e renda no Piauí',
    text: 'Uma das áreas que mais influenciam diretamente a geração de renda do estado e que mostra, a cada safra, a sua importância.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia em todos os setores',
    text: 'Veja como a tecnologia está transformando os diversos setores do agronegócio, do campo à gestão.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="w-full scroll-mt-24 py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#081E13' }}>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(134, 215, 47, 0.04)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(245, 183, 0, 0.04)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
        {/* Esquerda - Fotos espalhadas */}
        <div className="relative w-full max-w-xl mx-auto aspect-[4/5]">
          {photos.map((p, i) => (
            <div
              key={p.alt}
              className="about-photo absolute"
              style={{
                left: `${p.x}%`,
                top: `${(p.y / CONTAINER_H) * 100}%`,
                width: `${p.w}%`,
                zIndex: i + 1,
              }}
            >
              <div className="about-float" style={{ animationDelay: p.delay }}>
                <div
                  className="w-full overflow-hidden rounded-xl"
                  style={{ aspectRatio: p.ratio, boxShadow: '0 16px 36px -10px rgba(0,0,0,0.6)' }}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direita - Texto */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GREEN }}>
              Sobre o evento
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Sobre o INOVA IFPI</h2>
            <p className="text-lg" style={{ color: '#E5E5E5' }}>
              Tecnologia, inovação e debate sobre os temas que movem a sociedade.
            </p>
          </div>

          <ul className="space-y-5">
            {topics.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="flex gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(134, 215, 47, 0.1)' }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: GREEN }} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="leading-relaxed mt-0.5" style={{ color: '#C9D1CC' }}>{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
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
