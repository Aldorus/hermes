import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";

describe("App", () => {
  const mocks = [];
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App className="Custom-test" />
    </MockedProvider>
  );

  test("Should render the structure with only project and not clients", () => {
    expect(container.querySelector(".Custom-test")).toBeTruthy();
  });
});
