import CTABackground from "../images/CTAbackground.png";
export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={CTABackground}
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-color-green-dark/60 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
          Não Perca Este Evento Transformador
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Junte-se a líderes e inovadores do agronegócio. Inscreva-se agora e garanta seu lugar.
        </p>
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
              Inscreva-se
           </button>
      </div>
    </section>
  );
}
