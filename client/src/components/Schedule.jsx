import { useState } from 'react';

// Fotos fictícias (picsum.photos). Troque `photo` pela foto real de cada pessoa.
const photo = (seed) => `https://picsum.photos/seed/${seed}/200/200`;

const person = (seed, role) => ({
  name: 'Nome do palestrante',
  institution: 'Instituição',
  role,
  photo: photo(seed),
});

const lecture = (seed, theme = 'Tema da palestra') => ({
  type: 'Palestra',
  theme,
  location: 'Local',
  people: [person(seed)],
});

const course = (seed) => ({
  type: 'Minicurso',
  theme: 'Tema do minicurso',
  location: 'Local',
  people: [person(seed)],
});

const DAYS = [
  {
    day: 20,
    slots: [
      { time: '08h – 10h', items: [lecture('d20-a')] },
      {
        time: 'Horário a definir',
        items: [
          {
            type: 'Talk show',
            theme: 'Tema do talk show',
            location: 'Local',
            people: [
              person('d20-t1', 'Mediador'),
              person('d20-t2', 'Participante'),
              person('d20-t3', 'Participante'),
            ],
          },
        ],
      },
      { time: '19h – 21h30', items: [lecture('d20-b')] },
    ],
  },
  ...[21, 22].map((day) => ({
    day,
    slots: [
      { time: '10h – 12h30', items: [lecture(`d${day}-a`)] },
      { time: '14h – 18h', items: [course(`d${day}-c1`), course(`d${day}-c2`)] },
      { time: '19h – 20h', items: [lecture(`d${day}-b`)] },
      { time: '20h – 21h', items: [lecture(`d${day}-c`)] },
    ],
  })),
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
            <img
              src={p.photo}
              alt={`Foto de ${p.name}`}
              loading="lazy"
              className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white/10"
            />
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
    <section aria-labelledby="cronograma-title" className="bg-[#08200f] py-12 md:py-16">
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