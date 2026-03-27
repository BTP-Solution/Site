import ApdHero from '@/components/products/apd/ApdHero';
import ApdPainPoints from '@/components/products/apd/ApdPainPoints';
import ApdHowItWorks from '@/components/products/apd/ApdHowItWorks';
import ApdFeatureGrid from '@/components/products/apd/ApdFeatureGrid';
import ApdBenefits from '@/components/products/apd/ApdBenefits';
import ApdWhyUs from '@/components/products/apd/ApdWhyUs';
import ApdScenarios from '@/components/products/apd/ApdScenarios';
import ApdFAQ from '@/components/products/apd/ApdFAQ';
import ApdFinalCta from '@/components/products/apd/ApdFinalCta';

export default async function ApdPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <main className="w-full flex flex-col items-center overflow-hidden bg-[#060d1a]">
            {/* Background ambient lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#3463ac]/10 blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] rounded-full bg-[#0a1628] blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <ApdHero lang={lang} />
                <ApdPainPoints lang={lang} />
                <ApdHowItWorks lang={lang} />
                <ApdFeatureGrid lang={lang} />
                <ApdBenefits lang={lang} />
                <ApdWhyUs lang={lang} />
                <ApdScenarios lang={lang} />
                <ApdFAQ lang={lang} />
                <ApdFinalCta lang={lang} />
            </div>
        </main>
    );
}
