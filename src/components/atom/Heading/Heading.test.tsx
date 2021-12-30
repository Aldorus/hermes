import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  const innerHeading = "Title";
  const titleLevels = [1, 2, 3, 4];

  test.each(titleLevels)("Should render %d level Heading", (titleLevel) => {
    const { container } = render(
      <Heading className="Heading-test" level={titleLevel}>
        {innerHeading}
      </Heading>
    );
    expect(container).toContainHTML(innerHeading);
    expect(container.querySelector(".Heading-test")).toBeTruthy();
    expect(container.querySelector(`h${titleLevel}`)).toBeTruthy();
  });
});
