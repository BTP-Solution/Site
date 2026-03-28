import { CheckCircle2 } from 'lucide-react';

type ServiceBenefitsProps = {
    sectionTitle: string;
    items: string[];
    accentColor?: string;
    variant?: 'checks' | 'border-left' | 'pills';
};

export default function ServiceBenefits({
    sectionTitle,
    items,
    accentColor = '#3463ac',
    variant = 'checks',
}: ServiceBenefitsProps) {

    if (variant === 'border-left') {
        return (
            <section className="w-full bg-[#060d1a] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-14">{sectionTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {items.map((item, i) => (
                            <div key={i} className="border-l-2 pl-5 py-3 transition-all duration-300 hover:pl-6" style={{ borderLeftColor: `${accentColor}40` }}>
                                <span className="text-sm font-medium text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (variant === 'pills') {
        return (
            <section className="w-full bg-[#0a1628]/40 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">{sectionTitle}</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {items.map((item, i) => (
                            <div key={i} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] bg-[#060d1a]/60 hover:border-white/[0.12] transition-all duration-300">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
                                <span className="text-sm text-slate-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-[#0a1628]/30 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-14">{sectionTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#060d1a]/40 border border-white/[0.05] rounded-xl p-5 hover:border-white/[0.1] transition-all duration-300">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: accentColor }} strokeWidth={2} />
                            <span className="text-sm font-medium text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
