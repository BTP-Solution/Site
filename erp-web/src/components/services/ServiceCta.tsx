import TransitionLink from '@/components/ui/TransitionLink';
import { ArrowRight, Sparkles } from 'lucide-react';

type ServiceCtaProps = {
    title: string;
    subtitle?: string;
    buttonText: string;
    buttonHref: string;
    features?: string[];
    accentColor?: string;
};

export default function ServiceCta({ title, subtitle, buttonText, buttonHref, features, accentColor = '#3463ac' }: ServiceCtaProps) {
    return (
        <section className="w-full bg-gradient-to-b from-[#060d1a] to-[#0a1628] py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[50%] rounded-full blur-[120px] pointer-events-none" style={{ background: `${accentColor}08` }} />
            <div className="absolute bottom-[-10%] left-[-5%] w-[25%] h-[40%] rounded-full blur-[100px] pointer-events-none bg-[#ff7700]/[0.04]" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-black/30 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 sm:p-14 shadow-2xl overflow-hidden relative">
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }} />

                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
                                <Sparkles className="h-3.5 w-3.5" style={{ color: accentColor }} />
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400">Hemen Başlayın</span>
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
                            {title}
                        </h2>

                        {subtitle && <p className="text-slate-400 mb-8 max-w-lg mx-auto">{subtitle}</p>}

                        {features && features.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className={`flex flex-wrap justify-center gap-4 ${!features ? 'mt-8' : ''}`}>
                            <TransitionLink
                                href={buttonHref}
                                className="cta-shimmer group inline-flex items-center gap-2.5 px-10 py-4 text-white rounded-xl font-semibold shadow-2xl hover:shadow-[0_8px_30px_rgba(52,99,172,0.3)] transition-shadow"
                            >
                                {buttonText}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </TransitionLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
