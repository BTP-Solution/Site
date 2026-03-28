'use client';

import { useState } from 'react';
import { Monitor, FileText, Truck, Settings, ChevronRight } from 'lucide-react';

type TechOrbitProps = {
    dict: any;
};

const CATEGORIES = [
    {
        id: 'consulting',
        icon: Monitor,
        title: 'SAP Danışmanlık',
        accent: '#3463ac',
        items: [
            'SAP Lisans & Bakım',
            'Teknoloji Danışmanlığı',
            'Uygulama Danışmanlığı',
            'Dış Kaynak Kullanımı',
            'HANA Donanım & Bulut',
            'ECC Upgrade',
            'Roll-Out & Lokalizasyon',
        ],
    },
    {
        id: 'edonusum',
        icon: FileText,
        title: 'E-Dönüşüm',
        accent: '#22d3ee',
        items: [
            'e-Fatura',
            'e-İrsaliye',
            'e-Arşiv',
            'e-Defter',
            'e-Bordro',
            'e-İmza Portalı',
            'e-Mutabakat',
            'e-SGK',
            'e-Reçete',
            'e-Müstahsil',
            'e-Gider Pusulası',
            'Dijital Arşivleme',
        ],
    },
    {
        id: 'supplychain',
        icon: Truck,
        title: 'Dijital Tedarik Zinciri',
        accent: '#34d399',
        items: [
            'Planlama',
            'Üretim',
            'Lojistik',
            'Tedarikçi Yönetimi',
            'Entegrasyon Çözümleri',
            'Enflasyon Muhasebesi',
        ],
    },
    {
        id: 'tech',
        icon: Settings,
        title: 'Teknoloji & Cloud',
        accent: '#a78bfa',
        items: [
            'S/4HANA',
            'SAP BTP',
            'ABAP & RAP & CAP',
            'SAP Fiori',
            'Public Cloud',
            'Private Cloud',
            'AI / ML',
            'Integration Suite',
        ],
    },
];

export default function TechOrbit({ dict }: TechOrbitProps) {
    const [active, setActive] = useState('consulting');

    return (
        <section className="relative bg-[#050b15] py-16 sm:py-24 overflow-hidden">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,_rgba(52,99,172,0.04)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                        Hizmet & Yetkinlik
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        Kapsamlı <span className="bg-gradient-to-r from-[#3463ac] to-[#7c5fcf] bg-clip-text text-transparent">Çözüm Portföyü</span>
                    </h2>
                </div>

                <div className="mx-auto max-w-5xl">
                    
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
                        {CATEGORIES.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = active === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActive(cat.id)}
                                    className={`group flex items-center gap-2 rounded-2xl border px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                                            ? 'border-white/15 bg-white/[0.06] text-white shadow-[0_0_30px_rgba(52,99,172,0.12)]'
                                            : 'border-white/[0.06] bg-white/[0.02] text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                                        }`}
                                >
                                    <Icon className="h-4 w-4 transition-colors duration-300" style={{ color: isActive ? cat.accent : undefined }} strokeWidth={1.5} />
                                    <span>{cat.title}</span>
                                    {isActive && <ChevronRight className="h-3 w-3 text-white/30" />}
                                </button>
                            );
                        })}
                    </div>

                    {CATEGORIES.map((cat) => {
                        if (cat.id !== active) return null;
                        return (
                            <div key={cat.id} className="animate-fade-in">
                                <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
                                    
                                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[80px] opacity-30 pointer-events-none"
                                        style={{ background: cat.accent }}></div>

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/[0.06]"
                                            style={{ background: `${cat.accent}15` }}>
                                            <cat.icon className="h-5 w-5" style={{ color: cat.accent }} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                                            <span className="text-[11px] text-white/30 uppercase tracking-wider">{cat.items.length} Çözüm</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {cat.items.map((item, i) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:bg-white/[0.06] hover:text-white/90 hover:border-white/[0.12] cursor-default"
                                                style={{
                                                    animationDelay: `${i * 40}ms`,
                                                }}
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${cat.accent}60` }}></span>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
