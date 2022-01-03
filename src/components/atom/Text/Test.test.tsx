import React from "react";
import { render } from "@testing-library/react";
import { Text } from "@components/atom";

describe("Text", () => {
  const innerArticle = "Standard paragraph";
  const { container } = render(
    <Text className="Text-test">{innerArticle}</Text>
  );

  test("Should render text component", () => {
    expect(container).toContainHTML(innerArticle);
    expect(container.querySelector('[data-test-id="Text"]')).toBeTruthy();
    expect(container.querySelector(".Text-test")).toBeTruthy();
  });
});
