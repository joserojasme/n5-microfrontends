import { styled } from "styled-components";
import { colorPalette } from "../../utils/palette";

export const Button = styled.a`
  height: 20vh;
  width: 20vw;
  display: flex;
  overflow: hidden;
  background: ${colorPalette.backgroundButton};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: pointer;
  align-items: center;
  color: ${colorPalette.white};
  text-decoration: none;
`;

export const ImgButton = styled.img`
  width: 50%;
  height: 100%;
`;

export const TextButton = styled.div`
  width: 50%;
  text-align: center;
`;
