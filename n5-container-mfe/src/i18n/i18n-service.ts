import i18next from "i18next";
import en from "./lang/en.json";
import es from "./lang/es.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

export default i18next;
