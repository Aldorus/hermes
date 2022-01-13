import React from "react";
import { render } from "@testing-library/react";
import { Text } from "@components/atom";

describe("Text", () => {
  const innerArticle = "Standard paragraph";
  const customClassName = "Text-test";
  const { container, rerender } = render(
    <Text className={customClassName}>{innerArticle}</Text>
  );

  test("Should render text component", () => {
    expect(container).toContainHTML(innerArticle);
    expect(container.querySelector('[data-test-id="Text"]')).toBeTruthy();
    expect(container.querySelector(`.${customClassName}`)).toBeTruthy();
  });

  test("When passing a variant prop should render the proper variant name", () => {
    rerender(<Text className="Custom-test" variant="light" />);
    expect(container.querySelector(".Custom-test--light")).toBeTruthy();
    expect(container.querySelector(".Custom-test--dark")).toBeFalsy();
    rerender(<Text className="Custom-test" variant="dark" />);
    expect(container.querySelector(".Custom-test--light")).toBeFalsy();
    expect(container.querySelector(".Custom-test--dark")).toBeTruthy();
  });
});
