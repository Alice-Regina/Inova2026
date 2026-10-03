import React, { useState } from 'react';

export default function ProgramacaoEvento() {
    // Estado para controlar a aba do dia selecionado
    const [diaAtivo, setDiaAtivo] = useState(0);

    // Estrutura de dados dos dias e eventos do Inova IFPI
    const diasProgramacao = [
        {
            id: 0,
            dia: 'Dia 01',
            data: '20 de Outubro',
            tituloDia: 'Abertura & Novas Tendências',
            eventos: [
                {
                    horario: '18:00 - 19:00',
                    titulo: 'Credenciamento & Boas-Vindas',
                    categoria: 'Recepção',
                    palestrante: 'Equipe Organizadora',
                    local: 'Lobby Principal',
                    descricao: 'Retirada de crachás, kits do evento e momento de recepção dos participantes.',
                },
                {
                    horario: '19:00 - 20:00',
                    titulo: 'Solenidade de Abertura do Inova IFPI',
                    categoria: 'Cerimônia',
                    palestrante: 'Direção IFPI & Autoridades',
                    local: 'Auditório Master',
                    descricao: 'Apresentação oficial do evento, diretrizes do hackathon e boas-vindas.',
                },
                {
                    horario: '20:00 - 21:30',
                    titulo: 'Palestra Magna: O Impacto da IA no Ecossistema Regional',
                    categoria: 'Palestra',
                    palestrante: 'Dra. Vanessa Santos (Especialista em Tecnologia)',
                    local: 'Auditório Master',
                    descricao: 'Como a inteligência artificial generativa está criando novas oportunidades de negócios.',
                },
            ],
        },
        {
            id: 1,
            dia: 'Dia 02',
            data: '21 de Outubro',
            tituloDia: 'Workshops, Hackathon & Conexões',
            eventos: [
                {
                    horario: '08:30 - 12:00',
                    titulo: 'Minicurso: Desenvolvimento Web Moderno com React',
                    categoria: 'Minicurso',
                    palestrante: 'Prof. Carlos Eduardo',
                    local: 'Laboratório 02',
                    descricao: 'Construindo interfaces performáticas e reativas utilizando bibliotecas modernas.',
                },
                {
                    horario: '12:00 - 14:00',
                    titulo: 'Intervalo & Almoço Livre',
                    categoria: 'Intervalo',
                    palestrante: '',
                    local: 'Praça de Convivência',
                    descricao: 'Momento para descompressão e networking entre equipes.',
                },
                {
                    horario: '14:00 - 18:00',
                    titulo: 'Início da Maratona Hackathon',
                    categoria: 'Hackathon',
                    palestrante: 'Mentores e Equipes',
                    local: 'Espaço Maker',
                    descricao: 'Mão na massa! Desenvolvimento de soluções para os desafios propostos no evento.',
                },
            ],
        },
        {
            id: 2,
            dia: 'Dia 03',
            data: '22 de Outubro',
            tituloDia: 'Pitches, Exposição & Premiação',
            eventos: [
                {
                    horario: '09:00 - 12:00',
                    titulo: 'Mostra Científica e Tecnológica',
                    categoria: 'Exposição',
                    palestrante: 'Alunos e Pesquisadores',
                    local: 'Hall de Entrada',
                    descricao: 'Apresentação de artigos, protótipos e projetos integradores do IFPI.',
                },
                {
                    horario: '14:00 - 17:00',
                    titulo: 'Apresentação dos Pitches Finais',
                    categoria: 'Pitch',
                    palestrante: 'Banca Avaliadora & Finalistas',
                    local: 'Auditório Master',
                    descricao: 'Equipes do Hackathon apresentam suas soluções para a comissão julgadora.',
                },
                {
                    horario: '17:30 - 19:00',
                    titulo: 'Premiação e Coquetel de Encerramento',
                    categoria: 'Encerramento',
                    palestrante: 'Comissão Organizadora',
                    local: 'Auditório Master',
                    descricao: 'Anúncio dos vencedores, distribuição de prêmios e celebração de encerramento.',
                },
            ],
        },
    ];

    return (
        <section
            id="programacao"
            className="section-padding relative overflow-hidden py-20 text-white"
            style={{ backgroundColor: '#081E13' }}
        >
            {/* Ambientação de iluminação neon fluida no fundo */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-color-green-neon/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Programação do Evento</h2>
                    <p className="text-lg text-emerald-100/70 max-w-2xl mx-auto">
                        Confira a agenda completa, palestras, minicursos e momentos marcantes do Inova IFPI.
                    </p>
                </div>

                {/* Sub-abas de Seleção dos Dias (Harmonizados em Verde Escuro) */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {diasProgramacao.map((item) => {
                        const isSelected = diaAtivo === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setDiaAtivo(item.id)}
                                className={`flex flex-col items-center px-6 py-3 rounded-xl transition-all duration-300 border ${
                                    isSelected
                                        ? 'bg-[#133A28] border-color-green-neon text-white shadow-[0_0_20px_rgba(134,215,47,0.25)] scale-105'
                                        : 'bg-[#0D281E]/80 border-emerald-800/60 text-emerald-200/60 hover:border-emerald-500/60 hover:text-white'
                                }`}
                            >
                                <span className={`text-sm font-bold ${isSelected ? 'text-color-green-neon' : ''}`}>
                                    {item.dia}
                                </span>
                                <span className="text-xs font-medium text-emerald-100/60">{item.data}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Subtítulo do Dia Ativo */}
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-semibold text-white">
                        {diasProgramacao[diaAtivo].dia} - <span className="text-color-green-neon">{diasProgramacao[diaAtivo].tituloDia}</span>
                    </h3>
                </div>

                {/* Linha do Tempo (Timeline) */}
                <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-800/60 space-y-8 ml-2 md:ml-10">
                    {diasProgramacao[diaAtivo].eventos.map((evento, idx) => (
                        <div key={idx} className="relative group">
                            
                            {/* Ponto / Nó luminoso da Timeline */}
                            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#081E13] border-2 border-color-green-neon group-hover:scale-125 group-hover:bg-color-green-neon transition-all duration-300 shadow-[0_0_12px_rgba(134,215,47,0.6)]" />

                            {/* Card do Evento (Dark Glass Emerald) */}
                            <div className="bg-[#0D281E]/90 border border-emerald-800/50 rounded-xl p-5 md:p-6 transition-all duration-300 backdrop-blur-sm group-hover:border-color-green-neon/60 group-hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)] relative overflow-hidden">
                                
                                {/* Brilho lateral neon no hover */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-color-green-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    {/* Horário e Categoria */}
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="text-sm font-bold text-color-green-neon bg-color-green-neon/10 px-3 py-1 rounded-full border border-color-green-neon/20">
                                        {evento.horario}
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-md">
                                            {evento.categoria}
                                        </span>
                                    </div>

                                    {/* Local */}
                                    {evento.local && (
                                        <span className="text-xs text-emerald-200/70 font-medium flex items-center gap-1">
                                            Local: {evento.local}
                                        </span>
                                    )}
                                </div>

                                {/* Título do Evento */}
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-color-green-neon transition-colors duration-200">
                                    {evento.titulo}
                                </h4>

                                {/* Descrição */}
                                <p className="text-emerald-100/80 text-sm mb-3 leading-relaxed">
                                    {evento.descricao}
                                </p>

                                {/* Palestrante / Apresentador */}
                                {evento.palestrante && (
                                    <div className="pt-3 border-t border-emerald-800/50 text-xs text-emerald-200/70 font-medium">
                                        🎤 <span className="text-white font-semibold">{evento.palestrante}</span>
                                    </div>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}