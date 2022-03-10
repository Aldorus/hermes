import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from "@components/atom";

describe("Image", () => {
  const linkToImage = "/link/to/image";
  const altImage = "Alt image description";

  test("Should render an image", () => {
    const { container } = render(
      <Image className="Image-test" src={linkToImage} alt={altImage} />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("Image")).toBeInTheDocument();
    expect(screen.getByAltText(altImage)).toBeInTheDocument();
    expect(container.firstChild).toHaveAttribute("src", linkToImage);
    expect(container.firstChild).toHaveClass("Image-test");
  });
});
