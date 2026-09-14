export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-agtech_0e4a2e12.jpg"
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
        <button className="btn-primary text-lg px-10 py-4">
          Inscrever-se Agora
        </button>
      </div>
    </section>
  );
}
