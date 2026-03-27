'use client';

import { createContext, useContext, useState, useCallback, useEffect, useTransition, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

type PageTransitionContextType = {
    navigateWithTransition: (href: string) => void;
    isTransitioning: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextType>({
    navigateWithTransition: () => {},
    isTransitioning: false,
});

export const usePageTransition = () => useContext(PageTransitionContext);

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isVisible, setIsVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [targetPath, setTargetPath] = useState<string | null>(null);
    const wasPendingRef = useRef(false);

    // Track when isPending becomes true (navigation actually started)
    useEffect(() => {
        if (isPending) {
            wasPendingRef.current = true;
        }
    }, [isPending]);

    const navigateWithTransition = useCallback((href: string) => {
        // Don't transition if already on the same page
        if (href === pathname) return;

        wasPendingRef.current = false;
        setIsVisible(true);
        setIsFadingOut(false);
        setTargetPath(href);

        // Small delay to let the overlay animate in, then navigate
        setTimeout(() => {
            startTransition(() => {
                router.push(href);
            });
        }, 300);
    }, [pathname, router, startTransition]);

    // When navigation completes (isPending goes from true→false and we have a target)
    useEffect(() => {
        if (!isPending && wasPendingRef.current && targetPath && isVisible) {
            // Navigation complete — fade out the overlay
            wasPendingRef.current = false;
            const timer = setTimeout(() => {
                setIsFadingOut(true);
                setTimeout(() => {
                    setIsVisible(false);
                    setIsFadingOut(false);
                    setTargetPath(null);
                }, 400);
            }, 200); // brief pause so the page is painted
            return () => clearTimeout(timer);
        }
    }, [isPending, targetPath, isVisible]);

    return (
        <PageTransitionContext.Provider value={{ navigateWithTransition, isTransitioning: isVisible }}>
            {children}

            {/* LOADING OVERLAY */}
            {isVisible && (
                <div
                    className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl ${
                        isFadingOut ? 'page-transition-out' : 'page-transition-in'
                    }`}
                >
                    {/* Logo */}
                    <div className="page-transition-logo mb-8">
                        <Image
                            src="/btp_logo-2.png"
                            alt="BTP Solution"
                            width={160}
                            height={41}
                            priority
                            className="h-10 w-auto object-contain drop-shadow-[0_0_20px_rgba(52,99,172,0.3)]"
                        />
                    </div>

                    {/* Progress bar */}
                    <div className="w-48 h-[2px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                            className={`h-full rounded-full bg-gradient-to-r from-[#3463ac] to-[#7e22ce] ${
                                isFadingOut ? 'page-progress-complete' : 'page-progress-loading'
                            }`}
                        />
                    </div>
                </div>
            )}
        </PageTransitionContext.Provider>
    );
}
