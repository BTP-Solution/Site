import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
export function detectLocale(acceptLanguage: string | null): 'tr' | 'en' {
    try {
        const languages = new Negotiator({ headers: { 'accept-language': acceptLanguage ?? '' } }).languages().filter(language => {
            try { return language !== '*' && Intl.getCanonicalLocales(language).length > 0; } catch { return false; }
        });
        return match(languages, ['tr', 'en'], 'tr') as 'tr' | 'en';
    } catch { return 'tr'; }
}
