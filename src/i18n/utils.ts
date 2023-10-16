import { ui, defaultLang, languages } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    // const langUi = (lang == undefined) ? defaultLang : lang
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        // return ui[lang][key] || ui[defaultLang][key];
        return (lang == undefined) ? ui[defaultLang][key] : ui[lang][key]
    };
}