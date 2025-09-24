import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";
import itCommon from "./locales/it/common.json";

import enPrivacy from "./locales/en/privacy.json";
import ptPrivacy from "./locales/pt/privacy.json";
import itPrivacy from "./locales/it/privacy.json";

const savedLang = localStorage.getItem("lang");
const fallbackLng = "pt";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, privacy: enPrivacy },
    pt: { common: ptCommon, privacy: ptPrivacy },
    it: { common: itCommon, privacy: itPrivacy },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["common", "privacy"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
