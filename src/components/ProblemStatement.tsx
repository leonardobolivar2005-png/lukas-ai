export default function ProblemStatement() {
    const leaks = [
        { name: "Cafés", icon: "☕", color: "text-[#6ee7b7]", borderColor: "border-[#6ee7b7]/30", bg: "bg-[#6ee7b7]/10" },
        { name: "Streaming", icon: "📺", color: "text-[#4cc9f0]", borderColor: "border-[#4cc9f0]/30", bg: "bg-[#4cc9f0]/10" },
        { name: "Domicilios", icon: "🍔", color: "text-[#ff7a59]", borderColor: "border-[#ff7a59]/30", bg: "bg-[#ff7a59]/10" },
        { name: "Compras Impulsivas", icon: "🛍️", color: "text-[#7c5cff]", borderColor: "border-[#7c5cff]/30", bg: "bg-[#7c5cff]/10" },
    ];

    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 mt-12 overflow-hidden">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                    <span className="text-white">Tu plata no desaparece… </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lukas-alert to-orange-400">
                        se fuga.
                    </span>
                </h2>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                    La mayoría de la gente no sabe en qué se le va la plata. Lukas detecta automáticamente esos gastos pequeños que, sumados, destruyen tu presupuesto.
                </p>
            </div>

            {/* Visual Metaphor: The Leaking Wallet */}
            <div className="relative max-w-4xl mx-auto h-[400px] md:h-[500px] flex flex-col items-center justify-start mt-10">

                {/* The Wallet Source */}
                <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 bg-black/50 border-2 border-white/10 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl pointer-events-none" />
                    <span className="text-6xl md:text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">👛</span>

                    {/* Subtle glow behind wallet */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 rounded-full blur-[30px] -z-10" />
                </div>

                {/* The Leaking SVG Particles & Paths */}
                <div className="absolute top-[80px] md:top-[120px] left-0 right-0 bottom-0 z-10 pointer-events-none overflow-visible">
                    <svg className="w-full h-full" overflow="visible" preserveAspectRatio="none">
                        {/* Defs for gradients */}
                        <defs>
                            <linearGradient id="leakGradient1" x1="50%" y1="0%" x2="10%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                                <stop offset="100%" stopColor="rgba(110,231,183,0.1)" />
                            </linearGradient>
                            <linearGradient id="leakGradient2" x1="50%" y1="0%" x2="30%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                                <stop offset="100%" stopColor="rgba(76,201,240,0.1)" />
                            </linearGradient>
                            <linearGradient id="leakGradient3" x1="50%" y1="0%" x2="70%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                                <stop offset="100%" stopColor="rgba(255,122,89,0.1)" />
                            </linearGradient>
                            <linearGradient id="leakGradient4" x1="50%" y1="0%" x2="90%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                                <stop offset="100%" stopColor="rgba(124,92,255,0.1)" />
                            </linearGradient>
                        </defs>

                        {/* Connecting paths (the "streams") */}
                        {/* Note: Using percentage-based d-paths is tricky in pure SVG without JS, but we can approximate responsive curves over a 1000x500 viewBox */}
                    </svg>

                    {/* CSS-based particle system (simpler for responsive design) */}
                    <div className="relative w-full h-full">
                        {/* Stream 1: Cafés (Left) */}
                        <div className="absolute top-0 left-1/2 w-0.5 h-[150px] md:h-[220px] bg-gradient-to-b from-white/30 to-transparent origin-top rotate-[45deg] md:rotate-[60deg] -translate-x-1" />
                        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#6ee7b7] animate-[leak-drop_2.5s_ease-in_infinite_0s] origin-top rotate-[45deg] md:rotate-[60deg] -translate-x-1.5" />

                        {/* Stream 2: Streaming (Mid Left) */}
                        <div className="absolute top-0 left-1/2 w-0.5 h-[180px] md:h-[260px] bg-gradient-to-b from-white/30 to-transparent origin-top rotate-[15deg] md:rotate-[20deg] -translate-x-0.5" />
                        <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#4cc9f0] animate-[leak-drop_3s_ease-in_infinite_1s] origin-top rotate-[15deg] md:rotate-[20deg] -translate-x-1" />

                        {/* Stream 3: Domicilios (Mid Right) */}
                        <div className="absolute top-0 left-1/2 w-0.5 h-[180px] md:h-[260px] bg-gradient-to-b from-white/30 to-transparent origin-top -rotate-[15deg] md:-rotate-[20deg] translate-x-0.5" />
                        <div className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ff7a59] animate-[leak-drop_2.2s_ease-in_infinite_0.5s] origin-top -rotate-[15deg] md:-rotate-[20deg] translate-x-1" />

                        {/* Stream 4: Compras (Right) */}
                        <div className="absolute top-0 left-1/2 w-0.5 h-[150px] md:h-[220px] bg-gradient-to-b from-white/30 to-transparent origin-top -rotate-[45deg] md:-rotate-[60deg] translate-x-1" />
                        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#7c5cff] animate-[leak-drop_3.5s_ease-in_infinite_1.5s] origin-top -rotate-[45deg] md:-rotate-[60deg] translate-x-1.5" />
                    </div>
                </div>

                {/* The Expense Categories (The sinks) */}
                <div className="absolute bottom-10 left-0 right-0 w-full flex justify-between items-end px-2 md:px-10 z-20">
                    {leaks.map((leak, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${leak.bg} border ${leak.borderColor} backdrop-blur-md flex items-center justify-center text-3xl md:text-4xl shadow-lg transition-transform hover:scale-110`}>
                                <span className="drop-shadow-lg">{leak.icon}</span>
                            </div>
                            <span className={`text-xs md:text-sm font-semibold tracking-wide ${leak.color} text-center`}>
                                {leak.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
