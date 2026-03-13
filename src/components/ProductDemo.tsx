export default function ProductDemo() {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                    <span className="text-white">Cero formularios. </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lukas-primary to-[#4cc9f0]">
                        Solo habla con Lukas.
                    </span>
                </h2>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                    Olvídate de clasificar gastos a mano. Ingresa tus movimientos como lo harías en un chat de WhatsApp con un amigo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Method 1: Chat Input */}
                <div className="relative rounded-3xl bg-[#0f172a] border border-white/10 p-6 flex flex-col items-center overflow-hidden group hover:border-lukas-primary/50 transition-colors duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-lukas-primary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h3 className="text-xl font-bold text-white mb-2 z-10 flex items-center gap-2">
                        <span>💬</span> Chat Directo
                    </h3>
                    <p className="text-white/50 text-sm text-center mb-8 z-10">Texto natural e instantáneo</p>

                    <div className="w-full mt-auto relative z-10 flex flex-col gap-3">
                        <div className="self-end bg-lukas-primary text-white text-sm py-2 px-4 rounded-2xl rounded-tr-none shadow-lg transform translate-y-4 opacity-0 animate-[fade-in-up_0.5s_ease-out_1s_forwards]">
                            Lukas, gasté 15 lucas en empanadas
                        </div>
                        <div className="self-start bg-white/10 border border-white/5 text-white/90 text-sm py-2 px-4 rounded-2xl rounded-tl-none shadow-lg transform translate-y-4 opacity-0 animate-[fade-in-up_0.5s_ease-out_2s_forwards]">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-lukas-success animate-pulse" />
                                Anotado. Categoría: Comida rápida.
                            </span>
                        </div>

                        <div className="relative mt-2">
                            <input
                                type="text"
                                placeholder="Escribe un mensaje..."
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-xs text-white/50 focus:outline-none pointer-events-none"
                                readOnly
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-lukas-primary/80 flex items-center justify-center">
                                <span className="text-white text-[10px]">↑</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Method 2: Audio/Voice Input */}
                <div className="relative rounded-3xl bg-[#0f172a] border border-white/10 p-6 flex flex-col items-center overflow-hidden group hover:border-[#4cc9f0]/50 transition-colors duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-[#4cc9f0]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h3 className="text-xl font-bold text-white mb-2 z-10 flex items-center gap-2">
                        <span>🎙️</span> Nota de Voz
                    </h3>
                    <p className="text-white/50 text-sm text-center mb-8 z-10">Procesamiento de audio a texto</p>

                    <div className="w-full mt-auto relative z-10 flex flex-col gap-4">

                        {/* Audio Message Bubble */}
                        <div className="self-end bg-[#4cc9f0]/20 border border-[#4cc9f0]/30 py-3 px-4 rounded-3xl rounded-tr-none flex items-center gap-3 min-w-[200px] shadow-[0_0_15px_rgba(76,201,240,0.15)]">
                            <button className="w-8 h-8 rounded-full bg-[#4cc9f0] flex items-center justify-center text-black pl-1 shrink-0">
                                ▶
                            </button>
                            {/* Fake Audio Waveform */}
                            <div className="flex items-center gap-1 h-4 flex-1">
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-[#4cc9f0] rounded-full animate-pulse"
                                        style={{
                                            height: `${Math.max(20, Math.random() * 100)}%`,
                                            animationDelay: `${i * 0.1}s`,
                                            animationDuration: '0.8s'
                                        }}
                                    />
                                ))}
                            </div>
                            <span className="text-[#4cc9f0] text-[10px] font-bold">0:04</span>
                        </div>

                        <div className="self-start bg-white/10 border border-white/5 text-white/90 text-sm py-2 px-4 rounded-2xl rounded-tl-none shadow-lg transform translate-y-4 opacity-0 animate-[fade-in-up_0.5s_ease-out_2s_forwards] flex flex-col gap-1">
                            <span className="text-xs text-white/40 italic">"Pagué el recibo de la luz por 85 mil..."</span>
                            <span className="flex items-center gap-2">
                                <span className="text-lukas-success text-xs">✓</span>
                                Servicios: $85.000 COP
                            </span>
                        </div>

                    </div>
                </div>

                {/* Method 3: Screenshot/OCR Input */}
                <div className="relative rounded-3xl bg-[#0f172a] border border-white/10 p-6 flex flex-col items-center overflow-hidden group hover:border-[#6ee7b7]/50 transition-colors duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-[#6ee7b7]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h3 className="text-xl font-bold text-white mb-2 z-10 flex items-center gap-2">
                        <span>📸</span> Pantallazos
                    </h3>
                    <p className="text-white/50 text-sm text-center mb-6 z-10">Lectura OCR de Nequi/Daviplata</p>

                    <div className="w-full mt-auto relative z-10 flex flex-col items-center">

                        {/* Fake Receipt/Screenshot Scanning Animation */}
                        <div className="relative w-48 h-40 bg-black/60 border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-4">

                            {/* Receipt Content */}
                            <div className="w-full space-y-2 opacity-60">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-16 h-4 bg-white/20 rounded" />
                                    <div className="w-8 h-8 rounded-full bg-[#E5007E]/30" /> {/* Nequi pinkish */}
                                </div>
                                <div className="w-full h-8 bg-white/10 rounded flex items-center justify-center">
                                    <span className="text-white font-mono text-xs">$ 45.000</span>
                                </div>
                                <div className="w-3/4 h-2 bg-white/10 rounded" />
                                <div className="w-1/2 h-2 bg-white/10 rounded" />
                            </div>

                            {/* Scanning Laser */}
                            <div className="absolute left-0 right-0 h-1 bg-[#6ee7b7] shadow-[0_0_15px_#6ee7b7] animate-[scan_2s_ease-in-out_infinite_alternate] z-20" style={{ top: '10%' }} />

                            {/* Overlay Flash on scan complete */}
                            <div className="absolute inset-0 bg-[#6ee7b7]/20 animate-[pulse_2s_infinite] z-10 pointer-events-none mix-blend-overlay" />
                        </div>

                        {/* Extracted Data Tags */}
                        <div className="w-full flex flex-wrap gap-2 mt-4 justify-center">
                            <span className="text-[10px] font-mono bg-[#6ee7b7]/20 text-[#6ee7b7] border border-[#6ee7b7]/30 px-2 py-1 rounded">
                                Monto: $45.000
                            </span>
                            <span className="text-[10px] font-mono bg-white/10 text-white/80 border border-white/20 px-2 py-1 rounded">
                                Merch: Netflix
                            </span>
                            <span className="text-[10px] font-mono bg-lukas-primary/20 text-lukas-primary border border-lukas-primary/30 px-2 py-1 rounded">
                                Cat: Streaming
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
