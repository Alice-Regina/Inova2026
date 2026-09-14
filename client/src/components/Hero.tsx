import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import heroAgricultor from "../images/hero-agricultor.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-20 overflow-hidden">
      {/* Full-width background */}
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#081E13' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(134, 215, 47, 0.05)' }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(245, 183, 0, 0.05)' }} />
      </div>

      {/* Main content - full width grid */}
      <div className="relative z-10 w-full h-[calc(100vh-80px)] flex items-center">
        <div className="w-full h-full flex items-center overflow-hidden">
          {/* Left content */}
          <div className="w-1/2 px-16 py-12 flex flex-col justify-center space-y-8 overflow-hidden">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                O Futuro do Agronegócio É{' '}
                <span style={{ color: '#86D72F' }}>Agora</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl max-w-lg" style={{ color: '#E5E5E5' }}>
              Inteligência Artificial, Automação e Sustentabilidade transformando o campo. Junte-se a líderes da inovação agrícola.
            </p>

            {/* Event Info */}
            <div className="flex flex-col md:flex-row gap-6 text-sm md:text-base">
              <div>
                <p style={{ color: '#BDBDBD' }}>Data</p>
                <p className="text-white font-semibold">15 de Setembro, 2026</p>
              </div>
              <div>
                <p style={{ color: '#BDBDBD' }}>Local</p>
                <p className="text-white font-semibold">Teresina, Piauí</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-3 font-bold rounded-lg transition-all duration-200 ease-out"
                style={{
                  backgroundColor: '#F5B700',
                  color: '#081E13',
                  transform: 'scale(1)'
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Inscreva-se Agora
              </button>
              <button
                className="px-8 py-3 flex items-center justify-center gap-2 rounded-lg transition-all duration-200 ease-out border-2"
                style={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  backgroundColor: 'transparent',
                  transform: 'scale(1)'
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#86D72F';
                  e.currentTarget.style.color = '#86D72F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <Play size={18} />
                Ver Vídeo
              </button>
            </div>
          </div>

          {/* Right side - Full-width image */}
          <div className="w-1/2 h-full relative overflow-hidden">
            <img
              src={heroAgricultor}
              alt="Futuro do Agronegócio"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(8, 30, 19, 0.4), transparent)' }}
            />

            {/* Countdown Card - Glassmorphism */}
            <div
              className="absolute bottom-8 left-8 right-8 p-8 rounded-2xl border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <p className="text-xs mb-4 uppercase tracking-widest font-semibold" style={{ color: '#BDBDBD' }}>
                Evento Começa Em
              </p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Minutos', value: timeLeft.minutes },
                  { label: 'Segundos', value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold" style={{ color: '#86D72F' }}>
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <p className="text-xs mt-1" style={{ color: '#BDBDBD' }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: '#86D72F' }}>
          <div className="w-1 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#86D72F' }} />
        </div>
      </div>
    </section>
  );
}
