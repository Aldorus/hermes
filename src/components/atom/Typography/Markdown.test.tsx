import React from "react";
import { render } from "@testing-library/react";
import { Markdown } from "@components/atom";

describe("Markdown", () => {
  const markdown = `
    ## Hello
    
    This is a markdown text
    
    #bold#
  `;

  const { container, rerender } = render(
    <Markdown className="Markdown-test">{markdown}</Markdown>
  );

  test("Should render the markdown text", () => {
    expect(container).toContainHTML("This is a markdown text");
  });

  test("Should render the text even if it's empty", () => {
    rerender(<Markdown />);
    expect(container).not.toContainHTML("This is a markdown text");
  });

  xit("When passing a variant prop should render the proper variant name", () => {
    rerender(
      <Markdown className="Markdown-test" variant="light">
        {markdown}
      </Markdown>
    );
    console.log(container.innerHTML);
    expect(container.querySelector(".Markdown-test--light")).toBeTruthy();
    expect(container.querySelector(".Markdown-test--dark")).toBeFalsy();
    rerender(
      <Markdown className="Markdown-test" variant="dark">
        {markdown}
      </Markdown>
    );
    expect(container.querySelector(".Markdown-test--light")).toBeFalsy();
    expect(container.querySelector(".Markdown-test--dark")).toBeTruthy();
  });

  xit("Should render the html instead of the markdown", () => {
    expect(container).not.toContainHTML("## Hello");
    expect(container).toContainHTML("<h2>Hello</h2>");
  });
});
