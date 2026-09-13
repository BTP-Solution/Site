import { NextResponse, type NextRequest } from 'next/server';
import { locales } from '@/lib/i18n/locale';

import { detectLocale } from '@/lib/i18n/detect-locale';

// Retain Edge middleware while OpenNext does not support the Node proxy runtime.
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname.includes('.') || /^\/(api|_next)(\/|$)/.test(pathname)) return;
    if (locales.some(locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) return;
    const url = request.nextUrl.clone();
    const locale = detectLocale(request.headers.get('accept-language'));
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
}
export const config = { matcher: ['/((?!api/|_next/static|_next/image|favicon.ico).*)'] };
