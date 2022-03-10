import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Homepage } from "./Homepage";
import { MockedProvider } from "@apollo/client/testing";
import {
  GetStructureProviderMock,
  ListProjectProviderMock,
} from "@providers/mocks";
import { MemoryRouter } from "react-router-dom";

describe("Homepage", () => {
  const mocks = [GetStructureProviderMock(), ListProjectProviderMock()];

  test("Should render the structure with only project and not clients", async () => {
    const {} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Homepage className="Homepage-test" />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 10)));
    expect(screen.queryByTestId("Homepage")).toBeInTheDocument();
    expect(screen.queryByTestId("Client")).not.toBeInTheDocument();
    expect(screen.queryByTestId("ProjectsList")).toBeInTheDocument();
  });
});
