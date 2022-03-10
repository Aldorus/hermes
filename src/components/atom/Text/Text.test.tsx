import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "@components/atom";

describe("Text", () => {
  const innerArticle = "Standard paragraph";
  const customClassName = "Text-test";
  const { container, rerender } = render(
    <Text className={customClassName}>{innerArticle}</Text>
  );

  test("Should render text component", () => {
    expect(screen.getByText(innerArticle)).toBeInTheDocument();
    expect(screen.getByTestId("Text")).toBeInTheDocument();
    expect(container).toContainHTML(innerArticle);
    expect(container.firstChild).toHaveClass(customClassName);
  });

  test("When passing a variant prop should render the proper variant name", () => {
    rerender(<Text className="Custom-test" variant="light" />);
    expect(container.firstChild).toHaveClass("Custom-test--light");
    expect(container.firstChild).not.toHaveClass("Custom-test--dark");

    rerender(<Text className="Custom-test" variant="dark" />);
    expect(container.firstChild).not.toHaveClass("Custom-test--light");
    expect(container.firstChild).toHaveClass("Custom-test--dark");
  });
});
