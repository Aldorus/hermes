import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { Homepage } from "./Homepage";
import { MockedProvider } from "@apollo/client/testing";
import {
  GetStructureProviderMock,
  ListProjectProviderMock,
} from "@providers/mocks";
import { MemoryRouter } from "react-router-dom";

describe("Homepage", () => {
  const mocks = [GetStructureProviderMock(), ListProjectProviderMock()];

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Homepage className="Homepage-test" />
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );
  beforeEach(async () => {
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  });

  test("Should render the structure with only project and not clients", () => {
    expect(container.querySelector(".Homepage-test")).toBeTruthy();
    expect(container.querySelector("[data-test-id='Clients']")).toBeFalsy();
    expect(
      container.querySelector("[data-test-id='ProjectsList']")
    ).toBeTruthy();
    console.log(
      container.querySelector("[data-test-id='ProjectsList']")?.innerHTML
    );
  });
});
