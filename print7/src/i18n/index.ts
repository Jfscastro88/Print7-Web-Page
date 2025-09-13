import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import pt from "./locales/pt/common.json";
import it from "./locales/it/common.json";

const savedLang = localStorage.getItem("lang");
const fallbackLng = "pt";

i18n
    .use(initReactI18next)
    .init({
    resources: {
        en: { common: en },
        pt: { common: pt },
        it: { common: it },
    },
    lng: savedLang || fallbackLng,
    fallbackLng,
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
    escapeValue: false,
    },
});

export default i18n;