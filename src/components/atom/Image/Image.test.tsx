import React from "react";
import { render } from "@testing-library/react";
import { Image } from "@components/atom";

describe("Image", () => {
  const linkToImage = "/link/to/image";
  const altImage = "Alt image description";
  const { container } = render(
    <Image className="Image-test" src={linkToImage} alt={altImage} />
  );

  test("Should render an image", () => {
    expect(container).toContainHTML("img");
    const image = container.querySelector('[data-test-id="Image"]');
    expect(container.querySelector(".Image-test")).toBeTruthy();
    expect(image).toBeTruthy();
    expect(image?.getAttribute("src")).toEqual(linkToImage);
    expect(image?.getAttribute("alt")).toEqual(altImage);
  });
});
