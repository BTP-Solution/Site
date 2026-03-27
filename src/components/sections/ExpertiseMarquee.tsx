'use client';

type ExpertiseMarqueeProps = {
    dict: any;
};

/* ── Top Row: SAP Functional Modules ── */
const MODULE_ROW = [
    { icon: '◆', name: 'SD' },
    { icon: '▲', name: 'MM' },
    { icon: '●', name: 'FI' },
    { icon: '■', name: 'CO' },
    { icon: '◆', name: 'PP' },
    { icon: '▲', name: 'QM' },
    { icon: '●', name: 'WM' },
    { icon: '■', name: 'PM' },
    { icon: '◆', name: 'HR / HCM' },
    { icon: '▲', name: 'PS' },
    { icon: '●', name: 'IM' },
    { icon: '■', name: 'CS' },
];

/* ── Bottom Row: Technology & Cloud Platforms ── */
const TECH_ROW = [
    { icon: '●', name: 'SAP S/4HANA' },
    { icon: '◆', name: 'SAP BTP' },
    { icon: '▲', name: 'SAP Fiori' },
    { icon: '■', name: 'ABAP' },
    { icon: '●', name: 'RAP' },
    { icon: '◆', name: 'CAP' },
    { icon: '▲', name: 'Public Cloud' },
    { icon: '■', name: 'Private Cloud' },
    { icon: '●', name: 'Cloud Foundry' },
    { icon: '◆', name: 'SAP Integration Suite' },
    { icon: '▲', name: 'SAP Analytics Cloud' },
    { icon: '■', name: 'SAP Build' },
    { icon: '●', name: 'BTP Cockpit' },
    { icon: '◆', name: 'AI / ML' },
];

function MarqueeRow({ items, reverse = false, label }: { items: typeof MODULE_ROW; reverse?: boolean; label: string }) {
    const tripled = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden">
            {/* Row label */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600/40 [writing-mode:vertical-lr] rotate-180">{label}</span>
            </div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060d1a] to-transparent z-[3]"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060d1a] to-transparent z-[3]"></div>
            <div className={`flex gap-4 whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {tripled.map((item, i) => (
                    <div
                        key={`${item.name}-${i}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2.5 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#3463ac]/25 hover:scale-105 cursor-default group"
                    >
                        <span className="text-[10px] text-[#3463ac]/50 group-hover:text-[#3463ac] transition-colors">{item.icon}</span>
                        <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ExpertiseMarquee({ dict }: ExpertiseMarqueeProps) {
    return (
        <section className="relative bg-[#060d1a] py-10 border-y border-white/[0.04] overflow-hidden">
            <div className="space-y-4">
                <MarqueeRow items={MODULE_ROW} label="MODÜLLER" />
                <MarqueeRow items={TECH_ROW} reverse label="TEKNOLOJİ" />
            </div>
        </section>
    );
}
