import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  const props = {
    imgSrc: "https://example.com/image.png",
    title: "Example Title",
    description: "Example Description",
  };

  it("renders the card with the correct image source", () => {
    const { getByRole } = render(<Card {...props} />);
    const img = getByRole("img");
    expect(img).toHaveAttribute("src", props.imgSrc);
  });

  it("renders the card with the correct title", () => {
    const { getByText } = render(<Card {...props} />);
    const title = getByText(props.title);
    expect(title).toBeInTheDocument();
  });

  it("renders the card with the correct description", () => {
    const { getByText } = render(<Card {...props} />);
    const description = getByText(props.description);
    expect(description).toBeInTheDocument();
  });
});
