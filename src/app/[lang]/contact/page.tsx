import ContactForm from '@/components/ContactForm';
import { generateSeoMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return generateSeoMetadata({ lang, path: '/contact', title: lang === 'en' ? 'Contact | BTP Solution' : 'İletişim | BTP Solution', description: lang === 'en' ? 'Contact our team for SAP consulting, digital transformation and an APD demo.' : 'SAP danışmanlığı, dijital dönüşüm ve APD demosu için ekibimizle iletişime geçin.' });
}
export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const en = lang === 'en';
    return <section className="bg-[#060d1a] px-4 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
            <div>
                <p className="mb-4 font-medium text-blue-300">BTP Solution</p>
                <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">{en ? 'Let’s discuss your project' : 'Projenizi birlikte konuşalım'}</h1>
                <p className="mb-8 text-lg leading-relaxed text-slate-300">{en ? 'Tell us about your SAP, integration or automation needs. You can also request an APD demo.' : 'SAP, entegrasyon veya otomasyon ihtiyaçlarınızı paylaşın. APD ürünümüz için demo da talep edebilirsiniz.'}</p>
                <address className="space-y-4 not-italic text-blue-300">
                    <p><a href="mailto:info@btpsolution.com">info@btpsolution.com</a></p>
                    <p><a href="tel:+905547251187">+90 554 725 11 87</a></p>
                </address>
            </div>
            <ContactForm lang={lang} />
        </div>
    </section>;
}
