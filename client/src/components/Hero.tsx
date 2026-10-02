import { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import heroAgricultor from '../images/hero-agricultor.png';

// 20 de outubro de 2026, 08:00 (horário local)
const EVENT_DATE = new Date(2026, 9, 20, 8, 0, 0).getTime();

const GREEN = '#86D72F';
const GOLD = '#F5B700';

function getTimeLeft() {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const countdown = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <section className="w-full min-h-screen pt-20 flex items-center" style={{ backgroundColor: '#081E13' }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto */}
        <div className="flex flex-col space-y-8 hero-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            Inovação e Tecnologia Movendo o <span style={{ color: GREEN }}>Agronegócio</span>
          </h1>

          <p className="text-lg md:text-xl max-w-lg leading-relaxed text-white/80">
            Evento de Tecnologia e Inovação do Instituto Federal do Piauí
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-white font-medium">20 a 22 de outubro, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-white font-medium">IFPI Campus Floriano</span>
            </div>
          </div>

          {/* Contagem simples */}
          <div className="flex items-center gap-6">
            {countdown.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-semibold tabular-nums text-white">
                  {String(item.value).padStart(2, '0')}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/50">{item.label}</p>
              </div>
            ))}
          </div>

          <div>
            <button
              className="group px-8 py-3.5 font-bold rounded-xl inline-flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ backgroundColor: GOLD, color: '#081E13' }}
            >
              Inscreva-se Agora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Imagem ao lado */}
        <div className="hero-up" style={{ animationDelay: '.15s' }}>
          <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
            {/* Contorno deslocado atrás da imagem */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 border-2 rounded-tl-[9rem] rounded-br-[9rem] rounded-tr-[2rem] rounded-bl-[2rem]"
              style={{ borderColor: 'rgba(134,215,47,0.5)' }}
            />

            {/* Imagem em formato de folha */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[9rem] rounded-br-[9rem] rounded-tr-[2rem] rounded-bl-[2rem]">
              <img
                src={heroAgricultor}
                alt="Agricultor no campo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Detalhe: círculo dourado */}
            <div
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        .hero-up { opacity: 0; animation: heroUp .8s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .hero-up { animation: none; opacity: 1; } }
      `}</style>
    </section>
  );
}