import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  const innerHeading = "Title";
  const titleLevels = [1, 2, 3, 4];

  test.each(titleLevels)("Should render h%d level Heading", (titleLevel) => {
    const {} = render(
      <Heading className="Heading-test" level={titleLevel}>
        {innerHeading}
      </Heading>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.queryByText(innerHeading)).toBeInTheDocument();
  });

  test.each(titleLevels)(
    "When passing a variant prop to h%d should render the proper variant name",
    (titleLevel) => {
      const { container, rerender } = render(
        <Heading className="Custom-test" level={titleLevel} variant={"light"} />
      );
      expect(container.firstChild).toHaveClass("Custom-test--light");
      expect(container.firstChild).not.toHaveClass("Custom-test--dark");
      rerender(
        <Heading level={titleLevel} className="Custom-test" variant="dark" />
      );
      expect(container.firstChild).not.toHaveClass("Custom-test--light");
      expect(container.firstChild).toHaveClass("Custom-test--dark");
    }
  );
});
