import { Button, ImgButton, TextButton } from "./styles";

interface IPrincipalLink {
  text: string;
  imgSrc: string;
  href: string;
  alt: string;
}
const PrincipalLink = ({ text, imgSrc, href, alt }: IPrincipalLink) => {
  return (
    <Button href={href}>
      <ImgButton src={imgSrc} alt={alt} />
      <TextButton> {text}</TextButton>
    </Button>
  );
};

export default PrincipalLink;
