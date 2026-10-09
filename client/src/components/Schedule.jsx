import { useState } from 'react';
import isabella from '../images/palestrantes/isabella.jpeg';
import samuel from '../images/palestrantes/samuel.jpeg';
import layara from '../images/palestrantes/layara.jpeg';
import camilo from '../images/palestrantes/camilo.jpeg';
import luanny from '../images/palestrantes/luanny.jpeg';
import lizandro from '../images/palestrantes/lizandro.jpeg';
import sebrae from '../images/palestrantes/sebrae.jpeg';
// Fotos fictícias (picsum.photos). Troque `photo` pela foto real de cada pessoa.
const photo = (seed) => `https://picsum.photos/seed/${seed}/200/200`;

const person = (seed, {
  role,
  name = 'Nome do palestrante',
  institution = 'Instituição',
  image = photo(seed),
} = {}) => ({
  name,
  institution,
  role,
  photo: image,
});

const lecture = (seed, {
  theme = 'Tema da palestra',
  location = 'Local',
  speaker = {},
} = {}) => ({
  type: 'Palestra',
  theme,
  location,
  people: [person(seed, speaker)],
});

const course = (seed, {
  theme = 'Tema do minicurso',
  location = 'Local',
  speaker = {},
} = {}) => ({
  type: 'Minicurso',
  theme,
  location,
  people: [person(seed, speaker)],
});

// Edite cada atividade separadamente. Para trocar uma foto, substitua photo('...')
// pela URL ou pelo caminho da imagem desejada.
const DAYS = [
  {
    day: 20,
    slots: [
      {
        time: '08h – 10h',
        items: [lecture('d20-a', {
          theme: 'Força Feminina no Agro',
          location: 'Auditório',
          speaker: {
            name: 'Isabella Maciel',
            institution: 'Fazenda Formosa',
            image: isabella,
          },
        })],
      },
      {
        time: '10h30 - 12h',
        items: [
          {
            type: 'Oficina',
            theme: 'Empreender na Prática: Ideias que Transformam',
            location: 'Auditório',
            people: [person('d20-b', {
              name: 'SEBRAE',
              institution: 'SEBRAE',
              image: sebrae,
            })],
          },
        ],
      },
      {
        time: '19h - 21h30',
        items: [
          {
            type: 'Talk show',
            theme: 'Do campo ao futuro: como a tecnologia e a inovação estão transformando o agronegócio',
            location: 'Local',
            people: [
              person('d20-t1', {
                role: 'Mediador',
                name: 'Prof Dr. Robson Freitas',
                institution: 'Instituto Federal do Piauí',
                image: photo('d20-t1'),
              }),
              person('d20-t2', {
                role: 'Participante',
                name: 'Samuel Coelho de Sá',
                institution: 'Networks Solutions',
                image: samuel,
              }),
              person('d20-t3', {
                role: 'Participante',
                name: 'Layara Campelo',
                institution: 'Instituto Federal do Piauí',
                image: layara,
              }),
            ],
          },
        ],
      },
      
    ],
  },
  {
    day: 21,
    slots: [
      {
        time: '10h – 12h30',
        items: [lecture('d21-a', {
          theme: 'Do Apiário à Inovação: Como a Tecnologia Está Transformando a Apicultura e Movendo o Agronegócio',
          location: 'Auditório',
          speaker: {
            name: 'Thais Trajano',
            institution: 'Célula de Inovação de Floriano',
            image: photo('d21-a'),
          },
        })],
      },
      {
        time: '14h – 15h30',
        items: [
          {
            type: 'Oficina',
            theme: 'Da ideia ao modelo de negócio: empreendendo na prática',
            location: 'Auditório',
            people: [person('d21-o1', {
              name: 'Nome do palestrante',
              institution: 'SEBRAE',
              image: sebrae,
            })],
          },
        ],
      },
      {
        time: '14h – 18h',
        items: [
          course('d21-c1', {
            theme: 'Uso de Drones como ferramenta de inspeção',
            location: 'Local',
            speaker: {
              name: 'Prof. Tarso',
              institution: 'Drone Floriano Tecnologia no Campo',
              image: photo('d21-c1'),
            },
          }),
          course('d21-c2', {
            theme: ' IA sem Nuvem: Executando LLMs Localmente',
            location: 'Laboratório 3',
            speaker: {
              name: 'Prof. Me. Ronaldo Pires Borges',
              institution: 'IFPI - FLORIANO',
              image: photo('d21-c2'),
            },
          }),
        ],
      },
      {
        time: '19h – 20h',
        items: [lecture('d21-b', {
          theme: 'O Bem Estar Animal e seu Impacto nos Sistemas de Produção de Gado de Corte',
          location: 'Auditório',
          speaker: {
            name: 'Ricardo Aboud',
            institution: 'Fazenda África',
            image: photo('d21-b'),
          },
        })],
      },
      {
        time: '20h – 21h',
        items: [lecture('d21-c', {
          theme: 'A contribuição da disponibilidade tecnológica na produção e beneficiamento de sementes para o aumento da produtividade.',
          location: 'Auditório',
          speaker: {
            name: 'Yana Rocha dos Reis Carvalho',
            institution: 'Fazenda Aliança',
            image: photo('d21-c'),
          },
        })],
      },
    ],
  },
  {
    day: 22,
    slots: [
      {
        time: '10h – 12h30',
        items: [lecture('d22-a', {
          theme: 'Conectividade Estratégica: Liderando a Inovação e Escalando Resultados em Ecossistemas',
          location: 'Auditório',
          speaker: {
            name: 'Luanny Emmanuelly',
            institution: 'Virtex',
            image: luanny,
          },
        })],
      },
      {
        time: '14h – 18h',
        items: [
          course('d22-c1', {
            theme: ' Aplicação do software R na análise de dados agrometeorológicos.',
            location: 'Local',
            speaker: {
              name: 'Prof. Dr. Lizandro',
              institution: 'IFPI - Floriano',
              image: lizandro,
            },
          }),
          course('d22-c2', {
            theme: 'Desenvolvimento de Site do Zero ao Profissional com IA',
            location: 'Laboratório J18',
            speaker: {
              name: 'Weslley Silva de Sousa Ferreira',
              institution: 'Instituição',
              image: photo('d22-c2'),
            },
          }),
        ],
      },
      {
        time: '19h – 20h',
        items: [lecture('d22-b', {
          theme: 'Além do Diploma: As Competências que o Agro do Futuro Procura',
          location: 'Auditório',
          speaker: {
            name: 'Camilo Saraiva',
            institution: 'Fazenda Progresso',
            image: camilo,
          },
        })],
      },
      {
        time: '20h – 21h',
        items: [lecture('d22-c', {
          theme: 'Tema da palestra',
          location: 'Auditório',
          speaker: {
            name: 'Fullzi',
            institution: 'Fullzi Tecnologia',
            image: photo('d22-c'),
          },
        })],
      },
    ],
  },
];

function Card({ item }) {
  const featured = item.type === 'Talk show';
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-[#08200f]">
          {item.type}
        </span>
        <span className="text-sm text-green-50/60">{item.location}</span>
      </div>

      <h4 className="mt-3 text-lg font-semibold leading-snug text-white">{item.theme}</h4>

      <ul className={`mt-4 gap-4 ${featured ? 'grid sm:grid-cols-3' : 'space-y-3'}`}>
        {item.people.map((p, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
              <img
                src={p.photo}
                alt={p.photo === sebrae ? 'Logo do SEBRAE' : `Foto de ${p.name}`}
                loading="lazy"
                className={`h-full w-full object-cover ${p.name === 'Isabella Maciel' ? 'scale-[2.2] object-[center_62%]' : 'object-center'}`}
              />
            </span>
            <div className="min-w-0">
              {p.role && <p className="text-xs font-medium text-yellow-400">{p.role}</p>}
              <p className="truncate text-sm font-medium text-white">{p.name}</p>
              <p className="truncate text-sm text-green-50/60">{p.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Schedule() {
  const [active, setActive] = useState(DAYS[0].day);
  const current = DAYS.find((d) => d.day === active);

  return (
    <section id="cronograma" aria-labelledby="cronograma-title" className="scroll-mt-24 bg-[#08200f] py-12 md:py-16">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="cronograma-title"
              className="scroll-mt-28 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              Cronograma
            </h2>
            <p className="mt-2 text-sm text-green-50/70 md:text-base">
              Escolha o dia para ver a programação.
            </p>
          </div>

          <div role="tablist" aria-label="Dias do evento" className="flex gap-2">
            {DAYS.map(({ day }) => (
              <button
                key={day}
                id={`tab-${day}`}
                role="tab"
                aria-selected={day === active}
                aria-controls={`panel-${day}`}
                onClick={() => setActive(day)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 ${
                  day === active
                    ? 'bg-yellow-400 text-[#08200f]'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Dia {day}
              </button>
            ))}
          </div>
        </div>

        <div
          key={current.day}
          id={`panel-${current.day}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.day}`}
          className="mt-8 divide-y divide-white/10 border-y border-white/10"
        >
          {current.slots.map((slot) => (
            <div key={slot.time} className="grid gap-3 py-5 md:grid-cols-[9rem_1fr] md:gap-6">
              <p className="pt-1 text-base font-semibold text-yellow-400">{slot.time}</p>
              <div className={`grid gap-4 ${slot.items.length > 1 ? 'md:grid-cols-2' : ''}`}>
                {slot.items.map((item, i) => (
                  <Card key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
