type ServiceIntroProps = {
    paragraphs: string[];
    accentColor?: string;
};

export default function ServiceIntro({ paragraphs, accentColor = '#3463ac' }: ServiceIntroProps) {
    return (
        <section className="w-full bg-[#060d1a] py-20 px-4 sm:px-6 lg:px-8 relative">
            
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <div className="max-w-3xl mx-auto space-y-5">
                {paragraphs.map((p, i) => (
                    <p key={i} className="text-base text-slate-400 leading-relaxed">
                        {p}
                    </p>
                ))}
            </div>
        </section>
    );
}
