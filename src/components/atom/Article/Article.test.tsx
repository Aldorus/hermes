import React from "react";
import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("Article", () => {
  const innerArticle = "Standard paragraph";
  test("Should render an article", () => {
    const {} = render(
      <Article className="Article-test">{innerArticle}</Article>
    );
    expect(screen.queryByRole("article")).toBeInTheDocument();
    expect(screen.queryByTestId("Article")).toBeInTheDocument();
    expect(screen.queryByText(innerArticle)).toBeInTheDocument();
  });
});
