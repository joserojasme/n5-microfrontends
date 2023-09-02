import React from "react";
import { render } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import en from "../../i18n/lang/en.json";
import es from "../../i18n/lang/es.json";

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

describe("LanguageSelector", () => {
  it("renders the select element with the correct options", () => {
    const { getByLabelText } = render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );
    const select = getByLabelText("Select Language:");
    expect(select).toHaveTextContent("English");
    expect(select).toHaveTextContent("Español");
  });
});
