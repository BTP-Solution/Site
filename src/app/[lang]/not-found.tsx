'use client';
import { usePathname } from 'next/navigation';
import TransitionLink from '@/components/ui/TransitionLink';

export default function NotFound() {
    const en = usePathname().split('/')[1] === 'en';
    return (
        <section className="min-h-[70vh] flex items-center justify-center bg-[#060d1a] px-4">
            <div className="text-center max-w-lg">
                <div className="text-8xl font-black text-transparent bg-clip-text mb-6"
                    style={{ backgroundImage: 'linear-gradient(135deg, #3463ac, #7e6fcf)' }}>
                    404
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {en ? 'Page Not Found' : 'Sayfa Bulunamadı'}
                </h1>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    {en ? 'The page you are looking for does not exist or has moved.' : 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'}
                </p>
                <TransitionLink
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white shadow-lg transition-all hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #3463ac, #7e6fcf)' }}
                >
                    {en ? 'Back to Home' : 'Ana Sayfaya Dön'}
                </TransitionLink>
            </div>
        </section>
    );
}
