import React from "react";
import { render } from "@testing-library/react";
import { Spinner } from "@components/atom";

describe("Spinner", () => {
  const innerArticle = "Standard paragraph";
  const { container, rerender } = render(
    <Spinner className="Spinner-test" loading={true}>
      {innerArticle}
    </Spinner>
  );

  test("Should render waiting state when loading true", () => {
    expect(
      container.querySelector('[data-test-id="Spinner-loading"]')
    ).toBeTruthy();
    expect(container).not.toContainHTML(innerArticle);
  });

  test("Should render the children component when loading false", () => {
    rerender(
      <Spinner className="Spinner-test" loading={false}>
        {innerArticle}
      </Spinner>
    );
    expect(
      container.querySelector('[data-test-id="Spinner-loading"]')
    ).toBeFalsy();
    expect(container).toContainHTML(innerArticle);
  });
});
