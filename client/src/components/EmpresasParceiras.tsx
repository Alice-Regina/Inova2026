import Virtex from '../images/patrocinio/Virtex.png';
import Progresso from '../images/patrocinio/progresso.png';
import Avançar from '../images/patrocinio/avancar.png';
import agroap from '../images/patrocinio/agroap.png';
import fullzi from '../images/patrocinio/Fullzi.png';
import sobral from '../images/patrocinio/SOBRAL.png';
import parilla from '../images/patrocinio/sal de parrila.png';
import bob from '../images/patrocinio/BOB.png';
import geleia from '../images/patrocinio/Geleia.png';
import athos from '../images/patrocinio/athos.png';
import agrovida from '../images/patrocinio/agrovida.png';
import buffalo from '../images/patrocinio/buffalo.png';
import recanto from '../images/patrocinio/recanto.png';
import sportswear from '../images/patrocinio/sportswear.png';
import magno from '../images/patrocinio/MAGNO.png';
import danilo from '../images/patrocinio/Danilo.png';
import james from '../images/patrocinio/Logomarca James Rodrigues contorno branco.png';
import quick from '../images/patrocinio/quick.png';
import usePrata from '../images/patrocinio/useprata-sem-fundo.png';
import unifaesfCampus from '../images/patrocinio/unifaesfcampus.png';
import cef from '../images/patrocinio/cef.png';
import polibrilho from '../images/patrocinio/polibrilho.png';
import ricardo from '../images/patrocinio/ricardo.jpeg';

const empresas = [
  { name: 'Virtex Telecom', image: Virtex, link: 'https://virtex.com.br/floriano' },
  { name: 'Grupo Progresso', image: Progresso, link: 'https://www.grupoprogresso.agr.br/' },
  { name: 'Avançar', image: Avançar, link: 'https://www.avancarambiental.com/' },
  { name: 'AGROAP', image: agroap, link: 'https://www.instagram.com/agroapsolucoesagricolas/' },
  { name: 'Fullzi', image: fullzi, link: 'https://www.fullzi.com.br/' },
  { name: 'Sobral', image: sobral, link: 'https://www.laboratoriosobral.com.br/' },
  { name: 'Sal de Parilla', image: parilla, link: 'https://www.instagram.com/saldeparrillaoficial/' },
  { name: 'BOB Espeto', image: bob, link: 'https://www.instagram.com/bob.espeto/' },
  { name: 'Agrovida Rações', image: agrovida, link: 'https://www.instagram.com/agrovida_racoes_flo/', logoClass: 'scale-[1.65] group-hover:scale-[1.7] group-focus-visible:scale-[1.7]' },
  { name: 'Buffalo Bill', image: buffalo, link: 'https://www.instagram.com/buffalobillburguer/', logoClass: 'scale-[0.85] group-hover:scale-[0.9] group-focus-visible:scale-[0.9]' },
  { name: 'Quick', image: quick, link: 'https://quicksorvetes.com.br/' },
  { name: 'IL Sportswear', image: sportswear, link: 'https://instagram.com/ilsportswear/', logoClass: 'scale-[1.5] brightness-0 invert group-hover:scale-[1.55] group-focus-visible:scale-[1.55]' },
  { name: 'Sítio Recanto do Morro', image: recanto, link: 'https://instagram.com/sitio.recantodomorro_597/', logoClass: 'scale-[1.01] group-hover:scale-[1.06] group-focus-visible:scale-[1.06]' },
  { name: 'Geleia Gourmet', image: geleia, link: '#' },
  { name: 'Athos Suplementos', image: athos, link: 'https://www.instagram.com/athossuplementos1/', logoClass: 'scale-[1.08] group-hover:scale-[1.13] group-focus-visible:scale-[1.13]' },
  { name: 'Use Prata', image: usePrata, link: 'https://www.instagram.com/usepratamerma/' },
  { name: 'Magno', image: magno, link: 'https://www.instagram.com/profmagnoweverson/' },
  { name: 'James', image: james, link: 'https://www.instagram.com/jamesrodriguespi/' },
  { name: 'Danilo Martins Galalau', image: danilo, link: 'https://www.instagram.com/danillomartins.adv/', compactImage: true },
  { name: 'Unifaesf Campus Arudá Bucar', image: unifaesfCampus, link: 'https://unifaesf.edu.br/' },
  { name: 'Centro Educacional de Floriano (CEF)', image: cef, link: 'https://cefedu.com.br/' },
  { name: 'Oficina Polibrilho', image: polibrilho, link: '#', logoClass: 'scale-[1.06] group-hover:scale-[1.11] group-focus-visible:scale-[1.11]' },
  { name: 'Ricardo Eletricista', image: ricardo, link: '#', logoClass: 'scale-[0.9] mix-blend-screen group-hover:scale-[0.95] group-focus-visible:scale-[0.95]' },
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
            const isCef = empresa.name === 'Centro Educacional de Floriano (CEF)';
            const logo = (
              <div className="flex h-full w-full items-center justify-center rounded-lg">
                <img
                  src={empresa.image}
                  alt={`Logo ${empresa.name}`}
                  decoding="async"
                  className={`w-full max-h-full transition-transform duration-300 motion-reduce:transition-none motion-reduce:transform-none ${empresa.logoClass ?? (isCef ? 'scale-[1.5] group-hover:scale-[1.55] group-focus-visible:scale-[1.55]' : 'group-hover:scale-105 group-focus-visible:scale-105')} ${empresa.compactImage ? 'aspect-[2/1] h-auto object-cover' : 'h-full object-contain'}`}
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
