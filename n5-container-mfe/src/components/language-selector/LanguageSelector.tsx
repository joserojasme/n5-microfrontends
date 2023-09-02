import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
