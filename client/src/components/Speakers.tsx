import isabella from '../images/palestrantes/isabella.jpeg';
import camilo from '../images/palestrantes/camilo.jpeg';
import luanny from '../images/palestrantes/luanny.jpeg';
import lizandro from '../images/palestrantes/lizandro.jpeg';

type Person = {
  name: string;
  role: string; // o que a pessoa é (cargo ou titulação)
  institution: string;
  topic: string; // tema da palestra ou do minicurso
  when: string; // dia e horário
  lattes: string; // link do currículo Lattes
  image: string;
  imagePosition?: string;
  imageZoom?: boolean;
};

const LATTES = 'https://lattes.cnpq.br/'; // troque pelo link real de cada pessoa

const speakers: Person[] = [
  {
    name: 'Isabella Maciel',
    role: '',
    institution: 'Fazenda Formosa (BA)',
    topic: 'Força Feminina no Agro',
    when: 'Dia 20 · 08h às 10h',
    lattes: LATTES,
    image: isabella,
    imagePosition: 'center 62%',
    imageZoom: true,
  },
  {
    name: 'Thais Trajano',
    role: '',
    institution: 'Célula de Inovação de Floriano',
    topic: 'O Bem Estar Animal e seu Impacto nos Sistemas de Produção de Gado de Corte',
    when: 'Dia 21 · 10h às 12h30',
    lattes: 'https://lattes.cnpq.br/1085606389238096',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Ricardo Aboud',
    role: '',
    institution: 'Fazenda África',
    topic: 'O Bem Estar Animal e seu Impacto nos Sistemas de Produção de Gado de Corte',
    when: 'Dia 21 · 19h às 20h',
    lattes: LATTES,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Yana Rocha dos Reis Carvalho',
    role: '',
    institution: 'Fazenda Aliança',
    topic: 'A contribuição da disponibilidade tecnológica na produção e beneficiamento de sementes para o aumento da produtividade.',
    when: 'Dia 21 · 20h às 21h',
    lattes: LATTES,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    name: 'Luanny Emmanuelly',
    role: '-',
    institution: 'Virtex',
    topic: 'Conectividade Estratégica: Liderando a Inovação e Escalando Resultados em Ecossistemas',
    when: 'Dia 22 · 10h às 12h30',
    lattes: LATTES,
    image: luanny,
    imagePosition: 'center 16%',
  },
  {
    name: 'Camilo Saraiva',
    role: 'Coordenador de Gente & Gestão',
    institution: 'Fazenda Progresso',
    topic: 'Além do Diploma: As Competências que o Agro do Futuro Procura',
    when: 'Dia 22 · 19h às 20h',
    lattes: LATTES,
    image: camilo,
    imagePosition: 'center 40%',
  },
];

// Fotos fictícias (picsum.photos). Troque pelas fotos reais.
const instructors: Person[] = [
  {
    name: 'Prof. Tarso',
    role: 'Cargo ou titulação',
    institution: 'Drone Floriano Tecnologia no Campo',
    topic: 'Uso de Drones como ferramenta de inspeção',
    when: 'Dia 21 · 14h às 18h',
    lattes: LATTES,
    image: 'https://picsum.photos/seed/minicurso-1/400/400',
  },
  {
    name: 'Prof. Ronaldo Pires Borges',
    role: 'Professor Me. do IFPI',
    institution: 'Instituto Federal do Piauí',
    topic: 'IA sem nuvem: Executando LLMs Localmente',
    when: 'Dia 21 · 14h às 18h',
    lattes: LATTES,
    image: 'https://picsum.photos/seed/minicurso-2/400/400',
  },
  {
    name: 'Prof. Lizandro',
    role: 'Professor Dr. do IFPI',
    institution: 'Instituto Federal do Piauí',
    topic: 'Aplicação do software R na análise de dados agrometeorológicos',
    when: 'Dia 22 · 14h às 18h',
    lattes: LATTES,
    image: lizandro,
  },
  {
    name: 'Weslley Silva de Sousa Ferreira',
    role: 'Estudante',
    institution: 'Instituto Federal do Piauí',
    topic: 'Tema do quarto minicurso',
    when: 'Dia 22 · 14h às 18h',
    lattes: LATTES,
    image: 'https://picsum.photos/seed/minicurso-4/400/400',
  },
];
function PersonCard({ p }: { p: Person }) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl p-[2px] shadow-sm transition-shadow duration-300 hover:shadow-xl">
      {/* Borda neon giratória */}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-gradient-to-r from-color-green-neon via-transparent to-color-green-neon opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[14px] bg-[#0c2b16]">
        {/* Foto com nome e cargo sobre a imagem */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            style={{ objectPosition: p.imagePosition ?? 'center top' }}
            className={`h-full w-full object-cover transition-transform duration-500 ${p.imageZoom ? 'scale-[2.2] group-hover:scale-[2.3]' : 'group-hover:scale-105'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c2b16] via-[#0c2b16]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-3">
            <h3 className="text-base font-bold leading-tight text-white">{p.name}</h3>
            <p className="text-xs font-medium text-color-green-neon">{p.role}</p>
          </div>
        </div>

        {/* Detalhes */}
        <dl className="flex-1 space-y-2 px-4 pb-4 pt-3 text-sm">
          <div>
            <dt className="text-xs text-green-50/50">Instituição</dt>
            <dd className="text-white/90">{p.institution}</dd>
          </div>
          <div>
            <dt className="text-xs text-green-50/50">Tema</dt>
            <dd className="text-white/90">{p.topic}</dd>
          </div>
          <div>
            <dt className="text-xs text-green-50/50">Quando</dt>
            <dd className="text-yellow-400">{p.when}</dd>
          </div>
        </dl>

        <div className="border-t border-white/10 px-4 py-3">
          <a
            href={p.lattes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
          >
            Currículo Lattes
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>

      {/* Brilho interno */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 20px rgba(134, 215, 47, 0.25)' }}
      />
    </div>
  );
}

function Group({ id, title, people }: { id?: string; title: string; people: Person[] }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="mb-5 border-b border-white/10 pb-3 text-xl font-semibold text-white md:text-2xl">
        {title}
      </h3>
      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <div key={i} className="h-full">
            <PersonCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="palestrantes" className="relative scroll-mt-24 overflow-hidden bg-[#081E13] py-14 md:py-20">
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-color-green-neon/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Nossos Palestrantes</h2>
          <p className="mx-auto max-w-2xl text-base text-green-50/70">
            Líderes e especialistas que estão transformando o agronegócio e a tecnologia.
          </p>
        </div>

        <div className="space-y-12">
          <Group title="Palestras" people={speakers} />
          <Group id="minicursos" title="Minicursos" people={instructors} />
        </div>
      </div>
    </section>
  );
}
