/// <reference types="vite/client" />

const YEARS = [2022, 2023, 2024, 2025];

// Procura as fotos "Inova2022(1)", "Inova2023(3)" etc. em qualquer subpasta de src/images,
// com qualquer extensão. O ano vem do nome do arquivo e a ordem, do número entre parênteses.
const modules = import.meta.glob('../images/**/*[Ii]nova*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const found: Record<number, { src: string; order: number }[]> = Object.fromEntries(
  YEARS.map((y) => [y, []])
);

Object.entries(modules).forEach(([path, src]) => {
  const file = path.split('/').pop() ?? '';
  const year = Number(file.match(/20\d{2}/)?.[0]);
  const order = Number(file.match(/\((\d+)\)\.\w+$/)?.[1] ?? 0);
  if (found[year]) found[year].push({ src, order });
});

const PHOTOS: Record<number, string[]> = Object.fromEntries(
  YEARS.map((y) => [y, found[y].sort((a, b) => a.order - b.order).map((p) => p.src)])
);

export default function Statistics() {
  return (
    <section
      aria-labelledby="conexoes-title"
      className="bg-[#081E13] py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid items-end gap-4 md:grid-cols-2 md:gap-10">
          <h2
            id="conexoes-title"
            className="scroll-mt-28 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
          >
            Conectar Ideias,{' '}
            <span className="text-yellow-400">Tecnologia e Pessoas</span> para o amanhã.
          </h2>
          <div>
            <p className="text-sm leading-relaxed text-green-50/70 md:text-base">
              Mais de 150 participantes em palestras e minicursos que conectam pessoas e
              ideias para o agronegócio e a tecnologia.
            </p>
            <div className="mt-4 flex gap-8">
              <p className="text-white">
                <span className="text-2xl font-bold text-yellow-400">4</span>{' '}
                <span className="text-sm text-green-50/70">edições</span>
              </p>
              <p className="text-white">
                <span className="text-2xl font-bold text-yellow-400">150+</span>{' '}
                <span className="text-sm text-green-50/70">participantes</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {YEARS.map((year) => (
            <div
              key={year}
              className="grid items-center gap-3 py-4 md:grid-cols-[4rem_1fr] md:gap-6"
            >
              <h3 className="text-lg font-semibold text-yellow-400">{year}</h3>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {PHOTOS[year].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Foto ${i + 1} da edição ${year}`}
                    loading="lazy"
                    className={`aspect-[4/3] w-full rounded-lg object-cover ${
                      i > 2 ? 'hidden sm:block' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}