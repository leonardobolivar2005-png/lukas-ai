import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            {/* Deep Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#120c2c] to-[#0a0618] pointer-events-none z-[-2]" />

            {/* Animated Network Background */}
            <div className="absolute inset-0 z-[-1] opacity-40 overflow-hidden pointer-events-none">
                {/* Glow behind center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lukas-primary/20 rounded-full blur-[120px]" />

                {/* SVG Network Lines and Nodes */}
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Vertical and horizontal grid paths */}
                    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                        <path d="M100,0 L100,2000 M300,0 L300,2000 M500,0 L500,2000 M700,0 L700,2000 M900,0 L900,2000 M1100,0 L1100,2000 M1300,0 L1300,2000" />
                        <path d="M0,200 L2000,200 M0,400 L2000,400 M0,600 L2000,600 M0,800 L2000,800 M0,1000 L2000,1000" />
                        {/* Diagonal connections */}
                        <path d="M300,400 L500,600 M700,200 L900,400 M100,800 L300,1000" />
                    </g>

                    {/* Pulsing Nodes */}
                    <circle cx="300" cy="400" r="3" fill="#7c5cff" className="animate-pulse" />
                    <circle cx="500" cy="600" r="4" fill="#6ee7b7" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <circle cx="700" cy="200" r="3" fill="#ff7a59" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <circle cx="900" cy="400" r="5" fill="#4cc9f0" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

                    {/* Flowing Data Particles using CSS animations (SVG rects moving along paths) */}
                    {/* A simple CSS animation approach for data flow: fading and translating across lines */}
                    <rect x="298" y="0" width="4" height="20" fill="#7c5cff" className="animate-[data-flow-y_3s_linear_infinite]" />
                    <rect x="498" y="200" width="4" height="20" fill="#6ee7b7" className="animate-[data-flow-y_4s_linear_infinite_1s]" />
                    <rect x="0" y="398" width="20" height="4" fill="#4cc9f0" className="animate-[data-flow-x_5s_linear_infinite]" />
                    <rect x="200" y="598" width="20" height="4" fill="#ff7a59" className="animate-[data-flow-x_3.5s_linear_infinite_0.5s]" />
                </svg>
            </div>

            {/* Content Area */}
            <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    <span className="block text-white mb-2">Lukas AI encuentra por dónde</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7c5cff] to-[#4cc9f0]">
                        se está fugando tu plata.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Habla con Lukas, mándale un pantallazo de Nequi o dile cuánto gastaste. Él detecta tus gastos hormiga y te ayuda a mejorar tu FinScore.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 rounded-xl bg-lukas-primary hover:bg-[#6b4de6] text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(124,92,255,0.4)] hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] hover:-translate-y-1">
                        Probar Lukas
                    </button>
                    <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
                        Ver cómo funciona
                    </button>
                </div>
            </div>

            {/* Hero Visual: Floating Mockup and UI Elements */}
            <div className="relative w-full max-w-lg mx-auto h-[500px] mt-10 perspective-1000">

                {/* Soft glow behind the phone mockup */}
                <div className="absolute inset-0 bg-gradient-to-tr from-lukas-primary/30 to-lukas-success/30 rounded-3xl blur-[80px]" />

                {/* Phone Mockup Placeholder */}
                {/* Tilted slightly, floating animation */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[580px] rounded-[40px] border-4 border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl animate-[float_6s_ease-in-out_infinite] transform rotate-y-[-10deg] rotate-x-[5deg] overflow-hidden flex flex-col">
                    {/* Top notch */}
                    <div className="w-[100px] h-[25px] bg-black rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

                    {/* App UI Header */}
                    <div className="h-16 border-b border-white/10 flex items-end pb-3 px-6 bg-gradient-to-b from-lukas-deep to-transparent">
                        <span className="text-white font-semibold text-lg">Lukas AI</span>
                    </div>

                    {/* App UI Body */}
                    <div className="flex-1 p-5 flex flex-col gap-4">
                        <div className="self-end bg-white/10 border border-white/5 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-white max-w-[80%]">
                            Gasté $15.000 en unas empanadas
                        </div>

                        <div className="self-start bg-gradient-to-br from-lukas-primary/20 to-lukas-primary/5 border border-lukas-primary/30 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-white/90 max-w-[90%] shadow-[0_0_15px_rgba(124,92,255,0.2)]">
                            Análisis completo. Ten cuidado, llevas $85.000 en comida por fuera esta semana.
                        </div>

                        {/* Chart placeholder */}
                        <div className="w-full h-32 rounded-xl border border-white/10 bg-white/5 mt-auto flex items-end justify-between p-3 gap-2">
                            <div className="w-full bg-lukas-primary/40 rounded-t shrink-0 h-[40%]" />
                            <div className="w-full bg-lukas-primary/60 rounded-t shrink-0 h-[70%]" />
                            <div className="w-full bg-lukas-alert/80 rounded-t shrink-0 h-[90%] shadow-[0_0_10px_rgba(255,122,89,0.5)]" />
                            <div className="w-full bg-lukas-primary/50 rounded-t shrink-0 h-[50%]" />
                        </div>
                    </div>
                </div>

                {/* Floating UI Element 1: Gasto Detectado */}
                <div className="absolute top-[15%] -left-[10%] sm:-left-[20%] bg-black/60 border border-lukas-alert/50 backdrop-blur-xl rounded-xl p-3 shadow-2xl animate-[float_5s_ease-in-out_infinite_0.5s]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-lukas-alert/20 flex items-center justify-center text-lukas-alert">
                            💸
                        </div>
                        <div>
                            <p className="text-white text-xs font-semibold">Gasto detectado</p>
                            <p className="text-lukas-alert text-sm font-bold">$15.000 en empanadas</p>
                        </div>
                    </div>
                </div>

                {/* Floating UI Element 2: Cluster alerta */}
                <div className="absolute top-[45%] -right-[5%] sm:-right-[15%] bg-black/60 border border-orange-500/50 backdrop-blur-xl rounded-xl p-3 shadow-2xl animate-[float_7s_ease-in-out_infinite_1s]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                            ⚠️
                        </div>
                        <div>
                            <p className="text-white text-xs font-semibold">Cluster alerta</p>
                            <p className="text-orange-400 text-sm font-bold">Gasto hormiga</p>
                        </div>
                    </div>
                </div>

                {/* Floating UI Element 3: FinScore */}
                <div className="absolute bottom-[20%] -left-[5%] sm:-left-[15%] bg-black/60 border border-lukas-success/50 backdrop-blur-xl rounded-xl p-3 shadow-2xl animate-[float_6s_ease-in-out_infinite_1.5s]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-lukas-success/20 flex items-center justify-center text-lukas-success">
                            🏆
                        </div>
                        <div>
                            <p className="text-white text-xs font-semibold">FinScore</p>
                            <p className="text-lukas-success text-sm font-bold">+25 pts</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Optional fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-lukas-deep to-transparent pointer-events-none" />
        </section>
    );
}
