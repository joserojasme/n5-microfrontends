import {
  StyleCard,
  ImgButton,
  TextTitle,
  TextDescription,
  TextContainer,
} from "./styles";

interface ICard {
  imgSrc: string;
  title: string;
  description: string;
}
const Card = ({ title, imgSrc, description }: ICard) => {
  return (
    <StyleCard>
      <ImgButton src={imgSrc} />
      <TextContainer>
        <TextTitle> {title}</TextTitle>
        <TextDescription> {description}</TextDescription>
      </TextContainer>
    </StyleCard>
  );
};

export default Card;
