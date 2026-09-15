import React from 'react';
import { Wrench, Clock, Sparkles, Instagram, Youtube } from 'lucide-react';

export default function Maintenance() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Luzes de fundo de alta tecnologia */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-color-green-neon/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-lg w-full text-center relative z-10 space-y-6 bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">

                {/* Ícone Animado */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-color-green-neon/10 text-color-green-neon mb-2 animate-pulse">
                    <Wrench className="w-10 h-10" />
                </div>

                {/* Títulos */}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Estamos em <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-color-green-neon">
                        Manutenção
                    </span>
                </h1>

                <p className="text-gray-300 text-base md:text-lg">
                    Estamos preparando novidades incríveis para a plataforma do <strong className="text-white font-semibold">Inova IFPI</strong>. Volte em breve!
                </p>

                {/* Badge Informativo */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-color-green-neon" />
                    <span>Previsão de retorno: Em breve</span>
                </div>

                {/* Redes Sociais do Inova IFPI */}
                <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span>Acompanhe as atualizações em nossas redes:</span>
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                        <a
                            href="https://www.instagram.com/inova.ifpi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-color-green-neon/20 hover:border-color-green-neon/50 hover:text-color-green-neon text-gray-300 transition-all duration-300 group"
                            title="Instagram Inova IFPI"
                        >
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>

                        <a
                            href="https://www.youtube.com/@InovaIFPI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-500 text-gray-300 transition-all duration-300 group"
                            title="YouTube Inova IFPI"
                        >
                            <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}