type Person = {
  name: string;
  role: string; // o que a pessoa é (cargo ou titulação)
  institution: string;
  topic: string; // tema da palestra ou do minicurso
  when: string; // dia e horário
  lattes: string; // link do currículo Lattes
  image: string;
};

const LATTES = 'https://lattes.cnpq.br/'; // troque pelo link real de cada pessoa

const speakers: Person[] = [
  {
    name: 'Dr. Carlos Silva',
    role: 'Especialista em IA Agrícola',
    institution: 'Instituição',
    topic: 'Tema da palestra',
    when: 'Dia 20 · 08h às 10h',
    lattes: LATTES,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Dra. Marina Costa',
    role: 'Diretora de Sustentabilidade',
    institution: 'Instituição',
    topic: 'Tema da palestra',
    when: 'Dia 20 · 19h às 21h30',
    lattes: LATTES,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Prof. João Santos',
    role: 'Pesquisador em Automação',
    institution: 'Instituição',
    topic: 'Tema da palestra',
    when: 'Dia 21 · 10h às 12h30',
    lattes: LATTES,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    name: 'Eng. Ana Oliveira',
    role: 'Líder de Inovação Tecnológica',
    institution: 'Instituição',
    topic: 'Tema da palestra',
    when: 'Dia 22 · 10h às 12h30',
    lattes: LATTES,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
];

// Fotos fictícias (picsum.photos). Troque pelas fotos reais.
const instructors: Person[] = [
  { day: 'Dia 21', n: 1 },
  { day: 'Dia 21', n: 2 },
  { day: 'Dia 22', n: 1 },
  { day: 'Dia 22', n: 2 },
].map(({ day, n }) => ({
  name: 'Nome do instrutor',
  role: 'Cargo ou titulação',
  institution: 'Instituição',
  topic: 'Tema do minicurso',
  when: `${day} · 14h às 18h`,
  lattes: LATTES,
  image: `https://picsum.photos/seed/minicurso-${day}-${n}/400/400`,
}));

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl p-[2px] shadow-sm transition-shadow duration-300 hover:shadow-xl">
      {/* Borda neon giratória */}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-gradient-to-r from-color-green-neon via-transparent to-color-green-neon opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 overflow-hidden rounded-[14px] bg-[#0c2b16]">
        {/* Foto com nome e cargo sobre a imagem */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c2b16] via-[#0c2b16]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-3">
            <h3 className="text-base font-bold leading-tight text-white">{p.name}</h3>
            <p className="text-xs font-medium text-color-green-neon">{p.role}</p>
          </div>
        </div>

        {/* Detalhes */}
        <dl className="space-y-2 px-4 pb-4 pt-3 text-sm">
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

function Group({ title, people }: { title: string; people: Person[] }) {
  return (
    <div>
      <h3 className="mb-5 border-b border-white/10 pb-3 text-xl font-semibold text-white md:text-2xl">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <PersonCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="palestrantes" className="relative overflow-hidden bg-[#081E13] py-14 md:py-20">
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
          <Group title="Minicursos" people={instructors} />
        </div>
      </div>
    </section>
  );
}