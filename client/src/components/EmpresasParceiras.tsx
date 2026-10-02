import React from 'react';
import Diamante1 from "../images/cotaDiamante/Virtex.png";

export default function EmpresasParceiras() {
    // Estrutura com tamanhos progressivos para cada plano
    const planos = [
        {
            titulo: 'Cota Diamante',
            // Grid grande: 1 ou 2 por linha. Altura máxima (h-48 a h-56)
            gridClass: 'grid-cols-1 md:grid-cols-2 max-w-4xl',
            cardHeight: 'h-48 md:h-56',
            empresas: [
                // Adicione a propriedade "link" com o site ou instagram
                { name: 'Virtex Telecom', image: Diamante1, link: 'https://virtex.com.br/floriano' },
                { name: 'Diamante 2', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&h=300&fit=crop', link: 'https://seusite.com' },
            ],
        },
        {
            titulo: 'Cota Ouro',
            // Grid médio: 2 ou 3 por linha. Altura grande (h-36 a h-40)
            gridClass: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl',
            cardHeight: 'h-36 md:h-40',
            empresas: [
                { name: 'Ouro 1', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Ouro 2', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Ouro 3', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
            ],
        },
        {
            titulo: 'Cota Prata',
            // Grid normal: 2 a 4 por linha. Altura média (h-28 a h-32)
            gridClass: 'grid-cols-2 md:grid-cols-4 max-w-6xl',
            cardHeight: 'h-28 md:h-32',
            empresas: [
                { name: 'Prata 1', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Prata 2', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Prata 3', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Prata 4', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
            ],
        },
        {
            titulo: 'Apoio',
            // Grid denso: 3 a 5 por linha. Altura pequena (h-20 a h-24)
            gridClass: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl',
            cardHeight: 'h-20 md:h-24',
            empresas: [
                { name: 'Apoio 1', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Apoio 2', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Apoio 3', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Apoio 4', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
                { name: 'Apoio 5', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop', link: '#' },
            ],
        }
    ];

    return (
        <section id="empresas parceiras" className="section-padding bg-gradient-to-b from-slate-900 to-slate-900/95 relative overflow-hidden py-20">
            {/* Elementos de background */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-color-green-neon/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

            <div className="container relative z-10 mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Empresas Parceiras</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Instituições e marcas que acreditam e impulsionam a inovação.
                    </p>
                </div>

                <div className="space-y-20">
                    {planos.map((plano, planIdx) => (
                        <div key={planIdx} className="flex flex-col items-center">

                            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-color-green-neon pb-2 inline-block">
                                {plano.titulo}
                            </h3>

                            {/* O max-w e mx-auto centralizam e limitam a largura dependendo da cota */}
                            <div className={`grid gap-4 md:gap-6 w-full mx-auto ${plano.gridClass}`}>
                                {plano.empresas.map((empresa, empIdx) => (
                                    <a // Trocado de div para 'a'
                                        key={empIdx}
                                        href={empresa.link} // Link que configuramos no array
                                        target="_blank" // Abre em uma nova aba
                                        rel="noopener noreferrer" // Recomendação de segurança para links externos
                                        className={`block group relative rounded-xl overflow-hidden ${plano.cardHeight} p-[2px] cursor-pointer`}
                                        title={`Visitar ${empresa.name}`}
                                    >
                                        {/* 1. O fundo de energia giratório */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-color-green-neon via-slate-900 to-color-green-neon animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* 2. O card escuro com a logo (bg-slate-900 combinando com o site) */}
                                        <div className="relative flex items-center justify-center bg-slate-900 h-full w-full rounded-[10px] p-4 md:p-6 z-10">
                                            <img
                                                src={empresa.image}
                                                alt={`Logo ${empresa.name}`}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* 3. Brilho neon interno sutil */}
                                        <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(134,215,47,0)] group-hover:shadow-[inset_0_0_20px_rgba(134,215,47,0.3)] transition-shadow duration-500 z-20 pointer-events-none" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}