'use client';

import Link from 'next/link';
import { usePageTransition } from '@/components/layout/PageTransition';
import { usePathname } from 'next/navigation';
import { type ComponentProps, useCallback } from 'react';

type TransitionLinkProps = ComponentProps<typeof Link>;

export default function TransitionLink({ href, onClick, children, ...rest }: TransitionLinkProps) {
    const { navigateWithTransition } = usePageTransition();
    const pathname = usePathname();

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            const hrefString = typeof href === 'string' ? href : href.pathname || '';

            // Let hash-only links and same-page hash links work normally
            if (hrefString.startsWith('#') || (hrefString.includes('#') && hrefString.split('#')[0] === pathname)) {
                onClick?.(e);
                return;
            }

            // Same page: scroll to top instead of navigating
            if (hrefString === pathname) {
                e.preventDefault();
                onClick?.(e);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            e.preventDefault();
            onClick?.(e);
            navigateWithTransition(hrefString);
        },
        [href, pathname, onClick, navigateWithTransition]
    );

    return (
        <Link href={href} onClick={handleClick} {...rest}>
            {children}
        </Link>
    );
}
