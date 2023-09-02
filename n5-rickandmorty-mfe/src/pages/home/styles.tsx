import { styled } from "styled-components";
import { colorPalette } from "@n5/n5-container-mfe";

export const ContainerButtons = styled.div`
  background: ${colorPalette.textSecondary};
  border-radius: 8px;
  margin: 0 auto;
  height: 100%;
  width: 80vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
