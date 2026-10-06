import Virtex from '../images/patrocinio/Virtex.png';
import Progresso from '../images/patrocinio/progresso.png';
import Avançar from '../images/patrocinio/avancar.png';
import agroap from '../images/patrocinio/agroap.png';
import fullzi from '../images/patrocinio/Fullzi.png';
import sobral from '../images/patrocinio/SOBRAL.png';
import parilla from '../images/patrocinio/sal de parrila.png';
import bob from '../images/patrocinio/BOB.png';
import geleia from '../images/patrocinio/Geleia.png';
import magno from '../images/patrocinio/MAGNO.png';
import danilo from '../images/patrocinio/Danilo.png';
import james from '../images/patrocinio/Logomarca James Rodrigues contorno branco.png';

const empresas = [
  { name: 'Virtex Telecom', image: Virtex, link: 'https://virtex.com.br/floriano' },
  { name: 'Grupo Progresso', image: Progresso, link: 'https://www.grupoprogresso.agr.br/' },
  { name: 'Avançar', image: Avançar, link: 'https://www.avancarambiental.com/' },
  { name: 'AGROAP', image: agroap, link: 'https://www.instagram.com/agroapsolucoesagricolas/' },
  { name: 'Fullzi', image: fullzi, link: 'https://www.fullzi.com.br/' },
  { name: 'Sobral', image: sobral, link: 'https://www.laboratoriosobral.com.br/' },
  { name: 'Sal de Parilla', image: parilla, link: 'https://www.instagram.com/saldeparrillaoficial/' },
  { name: 'BOB Espeto', image: bob, link: '#' },
  { name: 'Geleia Gourmet', image: geleia, link: '#' },
  { name: 'Magno', image: magno, link: '#' },
  { name: 'James', image: james, link: '#' },
  { name: 'Danilo Martins Galalau', image: danilo, link: '#', compactImage: true },
];

export default function EmpresasParceiras() {
  const partnerClassName = 'group flex h-full w-full items-center justify-center rounded-lg p-2 transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86D72F] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0';

  return (
    <section id="empresas-parceiras" aria-labelledby="parceiras-title" className="relative scroll-mt-24 overflow-hidden border-y border-white/5 py-14 md:py-20" style={{ backgroundColor: '#081E13' }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(63, 174, 73, 0.07), transparent 65%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 id="parceiras-title" className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            Empresas <span className="text-[#86D72F]">Parceiras</span>
          </h2>
          <p className="mt-3 text-balance text-base leading-relaxed text-gray-300">
            Instituições e marcas que acreditam e impulsionam a inovação.
          </p>
        </header>

        <ul className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-8" aria-label="Marcas parceiras">
          {empresas.map((empresa) => {
            const hasLink = empresa.link !== '#';
            const logo = (
              <div className="flex h-full w-full items-center justify-center rounded-lg">
                <img
                  src={empresa.image}
                  alt={`Logo ${empresa.name}`}
                  decoding="async"
                  className={`w-full max-h-full transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:transform-none ${empresa.compactImage ? 'aspect-[2/1] h-auto object-cover' : 'h-full object-contain'}`}
                />
              </div>
            );

            return (
              <li key={empresa.name} className="h-32 min-w-0 basis-[calc((100%_-_1.5rem)/2)] md:h-36 md:basis-[calc((100%_-_6rem)/3)] lg:basis-[calc((100%_-_9rem)/4)]">
                {hasLink ? (
                  <a
                    href={empresa.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${empresa.name} (abre em nova aba)`}
                    className={partnerClassName}
                  >
                    {logo}
                  </a>
                ) : (
                  <div className={partnerClassName}>{logo}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
