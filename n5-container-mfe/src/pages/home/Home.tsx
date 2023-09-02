import { useTranslation } from "react-i18next";
import { PrincipalButton } from "../../components/principal-link";

import { ContainerButtons } from "./styles";
import { LanguageSelector } from "../../components/language-selector";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSelector />
      <ContainerButtons>
        <PrincipalButton
          href="rick-and-morty"
          text={t("seeCharacters")}
          imgSrc="https://flxt.tmsimg.com/assets/p10376284_b_v13_ba.jpg"
          alt="Rick and Morty"
        />
        <PrincipalButton
          href="harry-potter"
          text={t("seeCharacters")}
          imgSrc="https://assets.vogue.in/photos/5f23c04f1d33754d11eaf778/2:3/w_2560%2Cc_limit/harry-potter-philosophers-stone-portrait-8.jpg"
          alt="Harry Potter"
        />
      </ContainerButtons>
    </>
  );
};

export default Home;
