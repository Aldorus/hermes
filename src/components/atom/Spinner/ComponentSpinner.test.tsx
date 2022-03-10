import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ApplicationSpinner,
  ComponentSpinner,
  Spinner,
} from "@components/atom";

describe("ComponentSpinner", () => {
  const innerArticle = <button>Standard paragraph</button>;

  test("Should render waiting state when loading true", () => {
    const { rerender } = render(
      <ComponentSpinner className="Spinner-test" loading={true}>
        {innerArticle}
      </ComponentSpinner>
    );
    expect(screen.queryByTestId("Spinner-loading")).toBeInTheDocument();
    expect(screen.queryByText("Standard paragraph")).not.toBeInTheDocument();

    rerender(
      <ComponentSpinner className="Spinner-test" loading={false}>
        {innerArticle}
      </ComponentSpinner>
    );
    expect(screen.queryByTestId("Spinner-loading")).not.toBeInTheDocument();
    expect(screen.queryByText("Standard paragraph")).toBeInTheDocument();
  });

  test("When there is a spinner in property", () => {
    const { rerender } = render(
      <ComponentSpinner
        className="Spinner-test"
        loading={true}
        spinner={<Spinner />}
      >
        {innerArticle}
      </ComponentSpinner>
    );
    expect(screen.queryByTestId("Spinner-loading")).toBeInTheDocument();

    rerender(
      <ComponentSpinner
        className="Spinner-test"
        loading={true}
        spinner={<ApplicationSpinner />}
      >
        {innerArticle}
      </ComponentSpinner>
    );
    expect(
      screen.queryByTestId("Spinner-application-loading")
    ).toBeInTheDocument();
  });
});
