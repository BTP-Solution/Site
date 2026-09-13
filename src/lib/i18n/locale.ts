
export const locales = ['tr', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'tr';

export function isLocale(value: string): value is Locale {
    return locales.some(locale => locale === value);
}

export function withLocale(href: string, lang: string): string {
    if (!href.startsWith('/') || href.startsWith('//')) return href;
    const pathname = href.split(/[?#]/)[0];
    if (locales.some(locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) return href;
    if (/\.[^/]+$/.test(pathname) || /^\/(api|_next)(\/|$)/.test(pathname)) return href;
    const locale = isLocale(lang) ? lang : defaultLocale;
    return `/${locale}${href === '/' ? '' : href.startsWith('/?') || href.startsWith('/#') ? href.slice(1) : href}`;
}
