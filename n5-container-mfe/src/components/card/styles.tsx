import { styled } from "styled-components";
import { colorPalette } from "../../utils/palette";

export const StyleCard = styled.div`
  height: 20vh;
  width: 20vw;
  display: flex;
  overflow: hidden;
  background: ${colorPalette.backgroundButton};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  align-items: center;
  color: ${colorPalette.white};
  text-decoration: none;
`;

export const ImgButton = styled.img`
  width: 40%;
  height: 100%;
`;

export const TextTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const TextDescription = styled.h3`
  text-align: center;
  font-size: 0.8rem;
`;

export const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
