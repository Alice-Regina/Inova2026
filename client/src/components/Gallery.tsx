import { useState, type PointerEvent as ReactPointerEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import ColhendoSoja from '../images/ColhendoSoja.png';
import FazendeiroOlhandoGado from '../images/FazendeiroOlhandoGado.png';
import heroAgricultor from '../images/hero-agricultor.png';
import PilotandoDrone from '../images/PilotandoDrone.png';

const inovaEdicoes = [
  {
    title: 'Inova IFPI 2022',
    date: 'Outubro de 2022',
    description: 'Foco na integração entre soluções tecnológicas e práticas sustentáveis para o desenvolvimento regional.',
    src: ColhendoSoja,
  },
  {
    title: 'Inova IFPI 2023',
    date: 'Novembro de 2023',
    description: 'Foco em empreendedorismo digital, startups e inovação aberta no ecossistema tecnológico piauiense.',
    src: heroAgricultor,
  },
  {
    title: 'Inova IFPI 2024',
    date: 'Outubro de 2024',
    description: 'Debates e protótipos voltados para o impacto da inteligência artificial na automação e nos serviços públicos.',
    src: PilotandoDrone,
  },
  {
    title: 'Inova IFPI 2025',
    date: 'Setembro de 2025',
    description: 'Apresentação de projetos voltados para urbanismo sustentável, mobilidade urbana e inclusão digital.',
    src: FazendeiroOlhandoGado,
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const activeEdition = inovaEdicoes[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + inovaEdicoes.length) % inovaEdicoes.length);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest('button')) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragStart(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart === null) return;
    const distance = event.clientX - dragStart;
    if (Math.abs(distance) > 50) goTo(activeIndex + (distance < 0 ? 1 : -1));
    setDragStart(null);
  };

  return (
    <div id="galeria" className="relative z-10 w-full scroll-mt-20" role="region" aria-labelledby="trajetoria-title" aria-roledescription="carrossel">
        <header className="mx-auto max-w-5xl px-6 pb-6 pt-8 text-center md:pb-8 md:pt-10">
          <h3 id="trajetoria-title" className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            <span className="inline-block bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text font-extrabold text-transparent">5 anos</span>{' '}
            de inovação
          </h3>
          <p className="mt-2 text-balance text-sm leading-relaxed text-slate-600 md:text-base">
            Uma trajetória de ideias, conexões e transformação.
          </p>
        </header>

        <div
          className="relative w-full touch-pan-y overflow-hidden bg-[#081E13] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          tabIndex={0}
          aria-label="Fotos das edições anteriores. Use as setas do teclado para navegar."
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              goTo(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => setDragStart(null)}
        >
          <div
            className="relative select-none"
            style={{ height: 'clamp(420px, 60vw, 720px)' }}
          >
            {inovaEdicoes.map((edition, index) => (
              <motion.img
                key={edition.src}
                src={edition.src}
                alt={`Imagem ilustrativa de agronegócio — ${edition.title}`}
                aria-hidden={index !== activeIndex}
                className="absolute inset-0 h-full w-full object-cover"
                initial={false}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeInOut' }}
                draggable="false"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04130c] via-[#04130c]/45 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-5xl p-6 md:p-12 lg:p-16" aria-live="polite" aria-atomic="true">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em]" style={{ color: '#86D72F' }}>
                {activeEdition.date}
              </p>
              <h4 className="text-3xl font-bold text-white md:text-6xl">{activeEdition.title}</h4>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-xl">{activeEdition.description}</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Evento anterior"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 p-3 text-white shadow-lg backdrop-blur transition hover:bg-amber-500 hover:text-[#081E13] md:left-10 md:p-4"
          >
            <ArrowLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Próximo evento"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 p-3 text-white shadow-lg backdrop-blur transition hover:bg-amber-500 hover:text-[#081E13] md:right-10 md:p-4"
          >
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-1 py-3" aria-label="Seleção de evento">
          {inovaEdicoes.map((edition, index) => (
            <button
              key={edition.title}
              type="button"
              aria-label={`Selecionar ${edition.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => goTo(index)}
              className="flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-green-700"
            >
              <span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${index === activeIndex ? 'w-8 bg-green-700' : 'w-2 bg-slate-300 hover:bg-green-500'}`} />
            </button>
          ))}
        </div>
    </div>
  );
}
