'use client';

import TransitionLink from '@/components/ui/TransitionLink';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

type Breadcrumb = {
    label: string;
    href?: string;
};

type StatItem = {
    value: string;
    label: string;
};

type ServiceHeroProps = {
    breadcrumbs: Breadcrumb[];
    title: string;
    highlightedWord?: string;
    subtitle?: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    accentColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    icon?: LucideIcon;
    stats?: StatItem[];
    variant?: 'default' | 'split' | 'centered';
};

export default function ServiceHero({
    breadcrumbs,
    title,
    highlightedWord,
    subtitle,
    description,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
    accentColor = '#3463ac',
    gradientFrom = '#3463ac',
    gradientTo = '#7e6fcf',
    icon: HeroIcon,
    stats,
    variant = 'default',
}: ServiceHeroProps) {
    const renderTitle = () => {
        if (!highlightedWord) return <>{title}</>;
        const parts = title.split(highlightedWord);
        return (
            <>
                {parts[0]}
                <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                >
                    {highlightedWord}
                </span>
                {parts[1] || ''}
            </>
        );
    };

    const BreadcrumbNav = () => (
        <nav className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase mb-8">
            {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3 w-3 text-slate-700" />}
                    {crumb.href ? (
                        <TransitionLink href={crumb.href} className="text-slate-600 hover:text-slate-400 transition-colors">{crumb.label}</TransitionLink>
                    ) : (
                        <span className="font-medium" style={{ color: `${accentColor}cc` }}>{crumb.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );

    const CtaButtons = ({ centered = false }: { centered?: boolean }) => (
        <div className={`flex flex-wrap items-center gap-4 ${centered ? 'justify-center' : ''}`}>
            <TransitionLink
                href={ctaHref}
                className="cta-shimmer group inline-flex items-center gap-2.5 px-8 py-4 text-white rounded-xl font-semibold text-sm shadow-2xl hover:shadow-[0_8px_30px_rgba(52,99,172,0.3)] transition-shadow"
            >
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </TransitionLink>
            {secondaryCtaText && secondaryCtaHref && (
                <TransitionLink
                    href={secondaryCtaHref}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm border border-white/[0.08] text-slate-300 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all"
                >
                    {secondaryCtaText}
                </TransitionLink>
            )}
        </div>
    );

    const StatsRow = ({ centered = false }: { centered?: boolean }) => {
        if (!stats?.length) return null;
        return (
            <div className={`flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/[0.06] ${centered ? 'justify-center' : ''}`}>
                {stats.map((s, i) => (
                    <div key={i} className="text-center">
                        <div className="text-3xl font-black text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>
                            {s.value}
                        </div>
                        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500 mt-1">{s.label}</div>
                    </div>
                ))}
            </div>
        );
    };

    /* ─── Abstract Visual ─── */
    const OrbitalVisual = () => (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Ambient glow behind the visual */}
            <div className="absolute inset-[10%] rounded-full blur-[80px]" style={{ background: `${accentColor}08` }} />

            {/* Concentric rings */}
            <div className="absolute w-[88%] h-[88%] rounded-full border border-white/[0.03]" />
            <div className="absolute w-[66%] h-[66%] rounded-full border border-white/[0.05]" />
            <div className="absolute w-[44%] h-[44%] rounded-full border-2 border-dashed animate-spin-slow" style={{ borderColor: `${gradientFrom}25` }} />
            <div className="absolute w-[22%] h-[22%] rounded-full" style={{ background: `linear-gradient(135deg, ${gradientFrom}10, ${gradientTo}05)` }} />

            {/* Center icon */}
            {HeroIcon && (
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm" style={{ background: `${gradientFrom}12` }}>
                    <HeroIcon className="h-9 w-9" style={{ color: accentColor }} strokeWidth={1.5} />
                </div>
            )}

            {/* Orbiting dots with glow */}
            <div className="absolute w-[66%] h-[66%] animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: accentColor, boxShadow: `0 0 16px ${accentColor}80, 0 0 32px ${accentColor}30` }} />
            </div>
            <div className="absolute w-[88%] h-[88%] animate-spin-slow-reverse">
                <div className="absolute bottom-0 right-[15%] w-2.5 h-2.5 rounded-full" style={{ background: `${gradientTo}80`, boxShadow: `0 0 12px ${gradientTo}60` }} />
            </div>
        </div>
    );

    /* ─── Retro grid background ─── */
    const RetroGrid = () => (
        <div className="absolute bottom-0 left-0 right-0 h-[40%] overflow-hidden pointer-events-none" style={{ perspective: '400px' }}>
            <div
                className="absolute inset-0 animate-retro-grid"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(55deg)',
                    backgroundImage: `
                        linear-gradient(to right, ${accentColor}06 1px, transparent 0),
                        linear-gradient(to bottom, ${accentColor}06 1px, transparent 0)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />
            {/* Fade-out overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060d1a] via-[#060d1a]/60 to-transparent" />
        </div>
    );

    /* ═══ VARIANT: CENTERED ═══ */
    if (variant === 'centered') {
        return (
            <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#060d1a]">
                {/* Ambient orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] rounded-full blur-[120px] animate-orb-1" style={{ background: `${gradientFrom}10` }} />
                    <div className="absolute top-[30%] right-[10%] w-[25%] h-[35%] rounded-full blur-[120px] animate-orb-2" style={{ background: `${gradientTo}08` }} />
                </div>
                <RetroGrid />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                    <BreadcrumbNav />

                    {/* Badge */}
                    <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8 mx-auto" style={{ borderColor: `${accentColor}30`, background: `${accentColor}08` }}>
                        {HeroIcon && <HeroIcon className="h-3.5 w-3.5" style={{ color: accentColor }} strokeWidth={2} />}
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: `${accentColor}cc` }}>SAP Danışmanlık</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6">
                        {renderTitle()}
                    </h1>

                    {subtitle && (
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accentColor}40)` }} />
                            <span className="text-sm font-medium tracking-wide" style={{ color: accentColor }}>{subtitle}</span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${accentColor}40)` }} />
                        </div>
                    )}

                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                        {description}
                    </p>

                    <CtaButtons centered />
                    <StatsRow centered />
                </div>
            </section>
        );
    }

    /* ═══ VARIANT: DEFAULT / SPLIT ═══ */
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#060d1a]">
            {/* Ambient orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-5%] left-[-8%] w-[35%] h-[40%] rounded-full blur-[120px] animate-orb-1" style={{ background: `${gradientFrom}0d` }} />
                <div className="absolute top-[25%] right-[-5%] w-[28%] h-[45%] rounded-full blur-[120px] animate-orb-2" style={{ background: `${gradientTo}08` }} />
                <div className="absolute bottom-[-10%] left-[25%] w-[30%] h-[25%] rounded-full blur-[100px] animate-orb-3 bg-[#ff7700]/[0.03]" />
            </div>
            <RetroGrid />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <BreadcrumbNav />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-3 flex flex-col items-start gap-5">
                        {/* Badge */}
                        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border" style={{ borderColor: `${accentColor}30`, background: `${accentColor}08` }}>
                            <span className="flex w-2 h-2 rounded-full animate-pulse" style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }} />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: `${accentColor}cc` }}>SAP Danışmanlık</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
                            {renderTitle()}
                        </h1>

                        {subtitle && (
                            <div className="flex items-center gap-3">
                                <div className="h-px w-10" style={{ background: `${accentColor}40` }} />
                                <span className="text-sm font-medium tracking-wide" style={{ color: accentColor }}>{subtitle}</span>
                            </div>
                        )}

                        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
                            {description}
                        </p>

                        <div className="pt-2">
                            <CtaButtons />
                        </div>

                        <StatsRow />
                    </div>

                    {/* Right visual */}
                    <div className="lg:col-span-2 hidden lg:block">
                        <OrbitalVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}
