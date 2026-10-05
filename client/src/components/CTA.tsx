import CTABackground from "../images/CTAbackground.png";

const REGISTER_URL = "#"; // troque pelo link de inscrição
const SCHEDULE_ID = "#cronograma"; // adicione id="cronograma" na section do Schedule

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={CTABackground}
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Overlay escuro (original) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-color-green-dark/60 to-slate-900/40" />

        {/* Transição suave para o verde do restante da página */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#081E13] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081E13] to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="mb-5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
          3 dias de palestras, minicursos e conexões
        </p>

        <h2
          id="cta-title"
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Não Perca Este Evento Transformador
        </h2>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
          Junte-se a líderes e inovadores do agronegócio. Inscreva-se agora e garanta seu lugar.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={REGISTER_URL}
            className="w-full rounded-lg bg-[#F5B700] px-8 py-3 text-center font-bold text-[#081E13] transition duration-200 hover:bg-yellow-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            Inscreva-se
          </a>
          <a
            href={SCHEDULE_ID}
            className="w-full rounded-lg border border-white/40 px-8 py-3 text-center font-semibold text-white transition duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            Ver cronograma
          </a>
        </div>
      </div>
    </section>
  );
}