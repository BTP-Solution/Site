import iconMap from '@/lib/iconMap';
import TransitionLink from '@/components/ui/TransitionLink';

type CardItem = {
    iconName: string;
    title: string;
    description: string;
    tag?: string;          // optional "Çözer:" tag like APD page
    href?: string;         // optional link
    linkText?: string;     // optional link text
};

type ServiceCardsProps = {
    sectionTitle: string;
    subtitle?: string;
    cards: CardItem[];
    accentColor?: string;
    variant?: 'grid' | 'featured' | 'compact';
};

export default function ServiceCards({
    sectionTitle,
    subtitle,
    cards,
    accentColor = '#3463ac',
    variant = 'grid',
}: ServiceCardsProps) {

    const SectionHeader = () => (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accentColor}30)` }} />
                <div className="w-2 h-2 rounded-full" style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}60` }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${accentColor}30)` }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{sectionTitle}</h2>
            {subtitle && <p className="text-slate-400 text-base">{subtitle}</p>}
        </div>
    );

    if (variant === 'featured') {
        const [first, ...rest] = cards;
        const FirstIcon = first.iconName ? iconMap[first.iconName] : null;
        return (
            <section className="w-full bg-[#0a1628]/50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                <div className="max-w-7xl mx-auto relative">
                    <SectionHeader />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        
                        <div className="lg:col-span-2 group relative bg-gradient-to-br from-[#060d1a] to-[#0a1628] border border-white/[0.06] rounded-2xl p-8 lg:p-10 hover:border-white/[0.15] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                            
                            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ background: `${accentColor}15` }} />

                            <div>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/[0.08] transition-transform duration-300 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}08)` }}>
                                    {FirstIcon && <FirstIcon className="h-7 w-7" style={{ color: accentColor }} strokeWidth={1.5} />}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{first.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{first.description}</p>
                            </div>

                            {first.tag && (
                                <div className="mt-6 pt-4 border-t border-white/[0.05]">
                                    <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                                        <span className="mr-2" style={{ color: accentColor }}>✦</span>
                                        {first.tag}
                                    </p>
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {rest.map((card, i) => {
                                const Icon = card.iconName ? iconMap[card.iconName] : null;
                                return (
                                    <div key={i} className="group relative bg-[#060d1a] border border-white/[0.05] rounded-xl p-5 hover:border-white/[0.12] transition-all duration-300 overflow-hidden">
                                        <div className="flex items-start gap-3.5">
                                            <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors" style={{ background: `${accentColor}10` }}>
                                                {Icon && <Icon className="h-4.5 w-4.5" style={{ color: accentColor }} strokeWidth={1.8} />}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-sm font-semibold text-slate-200 mb-1.5">{card.title}</h3>
                                                <p className="text-xs text-slate-500 leading-relaxed">{card.description}</p>
                                            </div>
                                        </div>
                                        {card.tag && (
                                            <div className="mt-3 pt-3 border-t border-white/[0.04]">
                                                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                                                    <span style={{ color: `${accentColor}99` }}>✦</span> {card.tag}
                                                </span>
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)` }} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (variant === 'compact') {
        return (
            <section className="w-full bg-[#0a1628]/30 py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-8" style={{ background: `${accentColor}30` }} />
                        <h2 className="text-xl md:text-2xl font-bold text-white text-center">{sectionTitle}</h2>
                        <div className="h-px w-8" style={{ background: `${accentColor}30` }} />
                    </div>
                    {subtitle && <p className="text-slate-500 text-center text-sm mb-10">{subtitle}</p>}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {cards.map((card, i) => {
                            const Icon = card.iconName ? iconMap[card.iconName] : null;
                            return (
                                <div key={i} className="group flex flex-col items-center text-center bg-[#060d1a]/60 border border-white/[0.04] rounded-xl p-5 hover:border-white/[0.1] hover:bg-[#060d1a]/80 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ background: `${accentColor}10` }}>
                                        {Icon && <Icon className="h-5 w-5" style={{ color: accentColor }} strokeWidth={1.8} />}
                                    </div>
                                    <span className="text-xs font-medium text-slate-300">{card.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-[#0a1628]/50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-0 hidden lg:block" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, i) => {
                        const Icon = card.iconName ? iconMap[card.iconName] : null;
                        return (
                            <div
                                key={i}
                                className="group relative bg-[#060d1a] border border-white/[0.05] rounded-2xl p-6 transition-all duration-300 hover:border-white/[0.12] overflow-hidden"
                            >
                                
                                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `${accentColor}15` }} />

                                {card.href ? (
                                    <TransitionLink href={card.href} className="absolute inset-0 z-20" aria-label={card.title} />
                                ) : null}

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: `${accentColor}12` }}>
                                            {Icon && <Icon className="w-5 h-5" style={{ color: accentColor }} strokeWidth={1.8} />}
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-100">{card.title}</h3>
                                    </div>
                                    <p className="flex-grow text-sm text-slate-400 leading-relaxed mb-4">{card.description}</p>

                                    <div className="mt-auto">
                                        {card.tag && (
                                            <div className="pt-4 border-t border-white/[0.05]">
                                                <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                                                    <span className="mr-2" style={{ color: `${accentColor}` }}>✦</span>
                                                    {card.tag}
                                                </p>
                                            </div>
                                        )}
                                        {card.href && card.linkText && (
                                            <div className="pt-4 mt-4 border-t border-white/[0.05] flex justify-end">
                                                <span className="text-sm font-medium transition-colors group-hover:underline" style={{ color: accentColor }}>
                                                    {card.linkText} &rarr;
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
