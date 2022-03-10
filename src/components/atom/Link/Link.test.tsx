import React from "react";
import { render, screen } from "@testing-library/react";
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
    expect(container.firstChild).toHaveClass("Heading-test");
    expect(container.firstChild).toHaveAttribute("href", "/home");
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.queryByText(innerHeading)).toBeInTheDocument();
  });

  test('When using "href" props should render a link', () => {
    const { container } = render(
      <Link className="Heading-test" href={"/home"}>
        {innerHeading}
      </Link>
    );
    expect(container.firstChild).toHaveClass("Heading-test");
    expect(container.firstChild).toHaveAttribute("href", "/home");
    expect(container.firstChild).toHaveClass("Heading-test");
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
