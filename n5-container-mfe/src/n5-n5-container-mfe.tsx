import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { Card } from "./components/card";
import { useGetCharacters as useGetCharactersRickAndMorty } from "./network/queries/useRickAndMortyCharacters";
import { useGetCharacters as useGetCharactersHarryPotter } from "./network/queries/useHarryPotterCharacters";
import { colorPalette } from "./utils/palette";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export {
  Card,
  useGetCharactersRickAndMorty,
  colorPalette,
  useGetCharactersHarryPotter,
};
