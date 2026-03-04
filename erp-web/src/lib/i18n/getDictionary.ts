import 'server-only';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    tr: () => import('./dictionaries/tr.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
    // Gracefully fallback to Turkish (default) if dictionary not found
    if (!dictionaries[locale]) {
        return dictionaries['tr']();
    }
    return dictionaries[locale]();
};
