'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { usePageTransition } from '@/components/layout/PageTransition';
import { withLocale } from '@/lib/i18n/locale';

export default function TransitionLink({ href, onClick, children, ...rest }: ComponentProps<typeof Link>) {
    const pathname = usePathname();
    const { navigateWithTransition } = usePageTransition();
    const lang = pathname.split('/')[1];
    const localizedHref = typeof href === 'string'
        ? withLocale(href, lang)
        : { ...href, pathname: href.pathname ? withLocale(href.pathname, lang) : href.pathname };
    return <Link {...rest} href={localizedHref} onClick={event => {
        onClick?.(event);
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const anchor = event.currentTarget;
        if ((anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return;
        const destination = new URL(anchor.href);
        if (destination.origin !== window.location.origin || destination.hash) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || rest.replace || rest.scroll === false) return;
        const target = destination.pathname + destination.search;
        if (target === window.location.pathname + window.location.search) return;
        event.preventDefault();
        navigateWithTransition(target);
    }}>{children}</Link>;
}
