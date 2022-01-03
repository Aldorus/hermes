import React from "react";
import { render } from "@testing-library/react";
import { Link } from "@components/atom";
import { MemoryRouter } from "react-router-dom";

describe("Link", () => {
  const innerHeading = "Link to home";

  test('When using "to" props should render a react link', () => {
    const { container } = render(
      <Link className="Heading-test" to={"/home"}>
        {innerHeading}
      </Link>,
      { wrapper: MemoryRouter }
    );
    expect(container.querySelector(".Heading-test")).toBeTruthy();
    const link = container.querySelector('[data-test-id="Link"]');
    expect(link).toContainHTML(innerHeading);
    expect(link?.getAttribute("href")).toEqual("/home");
  });

  test('When using "href" props should render a link', () => {
    const { container } = render(
      <Link className="Heading-test" href={"/home"}>
        {innerHeading}
      </Link>
    );
    expect(container.querySelector(".Heading-test")).toBeTruthy();
    const link = container.querySelector('[data-test-id="Link"]');
    expect(link).toContainHTML(innerHeading);
    expect(link?.getAttribute("href")).toEqual("/home");
  });
});
