import { ArrowRight } from 'lucide-react';

type ServiceStepsProps = {
    sectionTitle: string;
    subtitle?: string;
    steps: { title: string; description?: string }[];
    accentColor?: string;
    variant?: 'timeline' | 'horizontal' | 'cards';
};

export default function ServiceSteps({
    sectionTitle,
    subtitle,
    steps,
    accentColor = '#3463ac',
    variant = 'timeline',
}: ServiceStepsProps) {

    if (variant === 'horizontal') {
        return (
            <section className="w-full bg-[#060d1a] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent z-0 hidden lg:block" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{sectionTitle}</h2>
                        {subtitle && <p className="text-slate-400">{subtitle}</p>}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2 items-center">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="group flex-1 relative flex flex-col items-center text-center">
                                    <div className="absolute -top-8 text-[80px] font-black tracking-tighter select-none z-0" style={{ color: `${accentColor}06` }}>{String(i + 1).padStart(2, '0')}</div>
                                    <div className="relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110" style={{ borderColor: `${accentColor}30`, background: `${accentColor}10` }}>
                                        <span className="text-sm font-bold" style={{ color: accentColor }}>{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                                    {step.description && <p className="text-xs text-slate-500 mt-2 max-w-[160px]">{step.description}</p>}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block" style={{ color: `${accentColor}25` }}>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (variant === 'cards') {
        return (
            <section className="w-full bg-[#060d1a] py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{sectionTitle}</h2>
                    {subtitle && <p className="text-slate-400 text-center mb-14">{subtitle}</p>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((step, i) => (
                            <div key={i} className="group bg-[#0a1628]/60 border border-white/[0.05] rounded-2xl p-6 hover:border-white/[0.1] transition-all duration-300 text-center">
                                <div className="text-3xl font-black mb-3" style={{ color: `${accentColor}30` }}>{String(i + 1).padStart(2, '0')}</div>
                                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                                {step.description && <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>}
                                <div className="w-8 h-[2px] mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: accentColor }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    /* Default: left-aligned timeline */
    return (
        <section className="w-full bg-[#060d1a] py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{sectionTitle}</h2>
                {subtitle && <p className="text-slate-400 text-center mb-14">{subtitle}</p>}
                {!subtitle && <div className="mb-14" />}

                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block" style={{ background: `linear-gradient(to bottom, ${accentColor}30, transparent)` }} />

                    <div className="space-y-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative flex items-start gap-6 group">
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0 rounded-full border-2 transition-all duration-300 group-hover:shadow-lg" style={{ borderColor: `${accentColor}30`, background: '#060d1a' }}>
                                    <span className="text-sm font-bold" style={{ color: accentColor }}>{String(i + 1).padStart(2, '0')}</span>
                                </div>
                                <div className="flex-1 pt-2.5">
                                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">{step.title}</h3>
                                    {step.description && <p className="text-sm text-slate-500 mt-1">{step.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
