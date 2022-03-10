import React from "react";
import { render } from "@testing-library/react";
import Portfolio from "./Portfolio";
import { MockedProvider } from "@apollo/client/testing";

describe("Portfolio", () => {
  const mocks = [];
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Portfolio className="Custom-test" />
    </MockedProvider>
  );

  test("Should render the structure with only project and not clients", () => {
    expect(container.querySelector(".Custom-test")).toBeTruthy();
  });
});
