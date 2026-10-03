import React, { useState } from 'react';

export default function Minicursos() {
    // Dados dos minicursos com links diretos para o SUAP
    const minicursos = [
        {
            id: 1,
            titulo: 'Construindo Aplicações Web Modernas com React & Tailwind CSS',
            ministrante: 'Prof. Carlos Eduardo',
            cargoMinistrante: 'Docente em Análise e Desenvolvimento de Sistemas',
            area: 'Desenvolvimento Web',
            horario: '21/10 - 08:30 às 12:00',
            local: 'Laboratório de Informática 02',
            cargaHoraria: '4h',
            requisitos: 'Levar notebook próprio com VS Code e Node.js instalados.',
            linkSuap: 'https://suap.ifpi.edu.br/eventos/inscricao_publica/',
            tags: ['React', 'Tailwind CSS', 'Frontend', 'JavaScript'],
            descricao: 'Aprenda do zero a criar interfaces modernas, reativas e responsivas utilizando as tecnologias mais requisitadas do mercado.'
        },
        {
            id: 2,
            titulo: 'Inteligência Artificial Prática: Criando Chatbots com Python e APIs da OpenAI',
            ministrante: 'Eng. Amanda Silveira',
            cargoMinistrante: 'Engenheira de IA e Dados',
            area: 'Inteligência Artificial',
            horario: '21/10 - 14:00 às 18:00',
            local: 'Laboratório de Pesquisa e Inovação',
            cargaHoraria: '4h',
            requisitos: 'Lógica de programação básica (preferencialmente Python).',
            linkSuap: 'https://suap.ifpi.edu.br/eventos/inscricao_publica/',
            tags: ['Python', 'OpenAI', 'Prompt Engineering', 'IA Generativa'],
            descricao: 'Explore a integração de LLMs e aprenda a construir assistentes virtuais inteligentes capazes de automatizar tarefas.'
        },
        {
            id: 3,
            titulo: 'Introdução à Robótica e IoT com Arduino para Automação',
            ministrante: 'Me. Roberto Fontes',
            cargoMinistrante: 'Pesquisador em Sistemas Embarcados',
            area: 'Robótica e Hardware',
            horario: '22/10 - 08:30 às 12:00',
            local: 'Espaço Maker / Lab Eletrônica',
            cargaHoraria: '4h',
            requisitos: 'Nenhum pré-requisito necessário. Kits inclusos.',
            linkSuap: 'https://suap.ifpi.edu.br/eventos/inscricao_publica/',
            tags: ['Arduino', 'IoT', 'Eletrônica', 'Automação'],
            descricao: 'Conceitos práticos de programação de sensores, atuadores e conectividade de objetos no ecossistema de Internet das Coisas.'
        },
        {
            id: 4,
            titulo: 'Design de Experiência do Usuário (UI/UX): Do Rascunho ao Protótipo no Figma',
            ministrante: 'Mariana Duarte',
            cargoMinistrante: 'UI/UX Designer na TechLead',
            area: 'Design & Produto',
            horario: '22/10 - 14:00 às 18:00',
            local: 'Sala Multimídia 01',
            cargaHoraria: '4h',
            requisitos: 'Levar notebook e conta gratuita criada no Figma.',
            linkSuap: 'https://suap.ifpi.edu.br/eventos/inscricao_publica/',
            tags: ['Figma', 'UI Design', 'UX Research', 'Prototipagem'],
            descricao: 'Aprenda os princípios fundamentais de arquitetura de informação, criação de wireframes e prototipagem interativa.'
        }
    ];

    // Filtro por Área
    const [filtroArea, setFiltroArea] = useState('Todas');
    const areas = ['Todas', 'Desenvolvimento Web', 'Inteligência Artificial', 'Robótica e Hardware', 'Design & Produto'];

    const minicursosFiltrados = filtroArea === 'Todas'
        ? minicursos
        : minicursos.filter(m => m.area === filtroArea);

    return (
        <section
            id="minicursos"
            className="section-padding relative overflow-hidden py-10 text-white"
            style={{ backgroundColor: '#081E13' }}
        >
            {/* Iluminação ambiente Dourada no background */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-14">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3">
                        Capacitação Profissional
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Minicursos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Oficinas</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
                        Desenvolva novas habilidades práticas com professores e especialistas.
                    </p>
                </div>

                {/* Filtros por Área */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-14">
                    {areas.map((area, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFiltroArea(area)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border ${
                                filtroArea === area
                                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-105'
                                    : 'bg-slate-900/90 text-slate-300 border-slate-700/80 hover:border-amber-500/50 hover:text-white'
                            }`}
                        >
                            {area}
                        </button>
                    ))}
                </div>

                {/* Grid de Cards dos Minicursos (Cards Brancos com Textos em Verde Escuro) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {minicursosFiltrados.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-400 hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] relative group shadow-xl"
                        >
                            {/* Linha de Destaque Dourada no Topo do Card */}
                            <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div>
                                {/* Topo: Categoria e Carga Horária */}
                                <div className="flex items-center justify-between gap-2 mb-5">
                                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
                                        {item.area}
                                    </span>

                                    <span className="text-xs font-bold text-[#081E13] bg-slate-100 px-4 py-1.5 rounded-lg border border-slate-200">
                                        ⏱️ {item.cargaHoraria}
                                    </span>
                                </div>

                                {/* Título em Verde Escuro com Destaque Dourado no Hover */}
                                <h3 className="text-xl md:text-2xl font-bold text-[#081E13] mb-3 group-hover:text-amber-600 transition-colors duration-200 leading-snug">
                                    {item.titulo}
                                </h3>

                                {/* Descrição em Verde Escuro Suave */}
                                <p className="text-[#081E13]/80 text-sm mb-5 leading-relaxed font-normal">
                                    {item.descricao}
                                </p>

                                {/* Caixa de Requisito em Destaque */}
                                {item.requisitos && (
                                    <div className="mb-5 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-[#081E13]">
                                        <span className="font-bold text-amber-700">💻 Requisito: </span>
                                        {item.requisitos}
                                    </div>
                                )}

                                {/* Tags Tecnológicas */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {item.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="text-[11px] font-mono font-medium text-[#081E13] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Rodapé: Ministrante, Local, Horário e Botão Dourado */}
                            <div className="pt-5 border-t border-slate-200 mt-auto">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                    {/* Ministrante */}
                                    <div>
                                        <p className="text-xs text-[#081E13]/60 font-medium">Ministrado por:</p>
                                        <p className="text-sm font-bold text-[#081E13]">{item.ministrante}</p>
                                        <p className="text-[11px] text-[#081E13]/70">{item.cargoMinistrante}</p>
                                    </div>

                                    {/* Horário e Local */}
                                    <div className="text-left sm:text-right text-xs space-y-1">
                                        <p className="font-bold text-amber-700">📅 {item.horario}</p>
                                        <p className="text-[#081E13]/80 font-medium">📍 {item.local}</p>
                                    </div>
                                </div>

                                {/* Botão de Ação Dourado Metalizado */}
                                <a
                                    href={item.linkSuap}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full text-center py-3.5 px-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 hover:brightness-105 transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] active:scale-[0.99]"
                                >
                                    <span>Inscrever-se</span>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}