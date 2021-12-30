import React from "react";
import { render } from "@testing-library/react";
import { Article } from "./Article";

describe("Article", () => {
  const innerArticle = "Standard paragraph";
  const { container } = render(
    <Article className="Article-test">{innerArticle}</Article>
  );

  test("Should render an article", () => {
    expect(container).toContainHTML(innerArticle);
    expect(container.querySelector(".Article-test")).toBeTruthy();
  });
});
