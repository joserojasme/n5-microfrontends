import { Home } from "./pages";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import en from "./i18n/lang/en.json";
import es from "./i18n/lang/es.json";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});
const Root = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  );
};

export default Root;
