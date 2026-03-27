import TransitionLink from '@/components/ui/TransitionLink';
import { ArrowRight, Sparkles } from 'lucide-react';

type CtaSectionProps = {
    dict: any;
    lang: string;
};

export default function CtaSection({ dict, lang }: CtaSectionProps) {
    return (
        <section className="relative py-24 sm:py-32 bg-[#0a1628]">
            <div className="container relative mx-auto px-4 sm:px-8 z-10">
                {/* Massive Glass Card */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0c1829] via-[#122040] to-[#1a0b2e] border border-white/10 shadow-[0_0_80px_-20px_rgba(52,99,172,0.3)] px-6 py-20 sm:p-24 group hover:shadow-[0_0_100px_-20px_rgba(126,34,206,0.3)] transition-shadow duration-700 w-full">

                    {/* Floating orbs securely inside card */}
                    <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(52,99,172,0.25)_0%,_transparent_70%)] pointer-events-none animate-orb-1 group-hover:scale-125 transition-transform duration-1000"></div>
                    <div className="absolute bottom-[0%] right-[10%] w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(126,34,206,0.2)_0%,_transparent_70%)] pointer-events-none animate-orb-2 group-hover:scale-125 transition-transform duration-1000"></div>

                    {/* Dot pattern */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                    }}></div>

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                            {dict.cta.title}
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                            {dict.cta.subtitle}
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <TransitionLink
                                href={`/${lang}/contact`}
                                className="cta-shimmer group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(52,99,172,0.4)] focus-visible:outline-none"
                            >
                                <span className="relative z-10 flex items-center gap-2.5">
                                    <Sparkles className="h-4 w-4 text-purple-200" />
                                    {dict.cta.primaryCta}
                                </span>
                            </TransitionLink>
                            <TransitionLink
                                href={`/${lang}/services`}
                                className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-10 text-base font-semibold text-slate-300 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white focus-visible:outline-none"
                            >
                                {dict.cta.secondaryCta}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </TransitionLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
