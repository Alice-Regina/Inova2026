import Gallery from './Gallery';

export default function Statistics() {
  return (
    <section aria-labelledby="conexoes-title" className="relative overflow-hidden bg-slate-50 pt-14 md:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-4 md:px-10 md:pb-6">
        <div className="grid items-center gap-6 lg:grid-cols-5 lg:gap-12">
          <h2 id="conexoes-title" className="scroll-mt-28 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:col-span-3 xl:text-6xl">
            Conectar Ideias, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-600">
              Tecnologia e Pessoas
            </span> <br />
            para o amanhã.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg lg:col-span-2">
            Um evento com <strong className="font-semibold text-slate-900">mais de 150 participantes</strong>,
            com palestras e minicursos para compartilhar conhecimento, conectar pessoas e transformar
            ideias em soluções para o agronegócio e a tecnologia.
          </p>
        </div>
      </div>
      <Gallery />
    </section>
  );
}
