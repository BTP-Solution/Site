import 'server-only';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    tr: () => import('./dictionaries/tr.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {

    if (!dictionaries[locale as Locale]) {
        return dictionaries['tr']();
    }
    return dictionaries[locale as Locale]();
};
