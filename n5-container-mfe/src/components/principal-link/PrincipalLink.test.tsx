import React from "react";
import { render } from "@testing-library/react";
import PrincipalLink from "./PrincipalLink";

describe("PrincipalLink", () => {
  it("renders the link with the correct text and image", () => {
    const { getByRole, getByAltText } = render(
      <PrincipalLink
        text="Click me"
        imgSrc="https://example.com/image.png"
        href="#"
        alt="Example image"
      />
    );
    const link = getByRole("link");
    const image = getByAltText("Example image");
    expect(link).toHaveTextContent("Click me");
    expect(image).toHaveAttribute("src", "https://example.com/image.png");
  });

  it("renders the link with the correct href attribute", () => {
    const { getByRole } = render(
      <PrincipalLink
        text="Click me"
        imgSrc="https://example.com/image.png"
        href="#"
        alt="Example image"
      />
    );
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "#");
  });
});
