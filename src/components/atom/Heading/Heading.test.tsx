import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";
import { Text } from "@components/atom";

describe("Heading", () => {
  const innerHeading = "Title";
  const titleLevels = [1, 2, 3, 4];

  test.each(titleLevels)("Should render h%d level Heading", (titleLevel) => {
    const { container } = render(
      <Heading className="Heading-test" level={titleLevel}>
        {innerHeading}
      </Heading>
    );
    expect(container).toContainHTML(innerHeading);
    expect(container.querySelector(".Heading-test")).toBeTruthy();
    expect(container.querySelector(`h${titleLevel}`)).toBeTruthy();
  });

  test.each(titleLevels)(
    "When passing a variant prop to h%d should render the proper variant name",
    (titleLevel) => {
      const { container, rerender } = render(
        <Heading className="Custom-test" level={titleLevel} variant={"light"} />
      );
      expect(container.querySelector(".Custom-test--light")).toBeTruthy();
      expect(container.querySelector(".Custom-test--dark")).toBeFalsy();
      rerender(
        <Heading level={titleLevel} className="Custom-test" variant="dark" />
      );
      expect(container.querySelector(".Custom-test--light")).toBeFalsy();
      expect(container.querySelector(".Custom-test--dark")).toBeTruthy();
    }
  );
});
