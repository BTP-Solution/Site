'use client';

type ClientLogosProps = {
    dict: any;
};

const CLIENTS = [
    'TechCorp',
    'GlobalFinans',
    'EcoSystems',
    'DataBridge',
    'CloudNova',
    'SmartOps',
    'InnoVenture',
    'PrimeLogic',
];

export default function ClientLogos({ dict }: ClientLogosProps) {
    const quadrupled = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#060d1a] to-[#0a1628] py-14 border-y border-white/[0.04]">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-[#060d1a] to-transparent z-[5]"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-[#0a1628] to-transparent z-[5]"></div>

            <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-600">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#3463ac]/40"></span>
                    {dict.clients.title}
                    <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#3463ac]/40"></span>
                </span>
            </div>

            <div
                className="animate-marquee-left flex gap-8 whitespace-nowrap"
                style={{ '--marquee-speed': '12s' } as React.CSSProperties}
            >
                {quadrupled.map((client, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center justify-center h-11 px-7 rounded-xl border border-white/[0.05] bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.06] hover:border-[#3463ac]/20 cursor-default shrink-0"
                    >
                        <span className="text-sm font-semibold text-slate-600 tracking-wide">{client}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
