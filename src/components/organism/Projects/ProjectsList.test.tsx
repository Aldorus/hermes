import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ProjectsList } from "@components/organism";
import { MockedProvider } from "@apollo/client/testing";
import { ListProjectProviderMock } from "@providers/mocks";

describe("ProjectList", () => {
  const mocks = [ListProjectProviderMock()];

  xit("Should render the project list", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProjectsList className="Custom-test" />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 10)));
    console.log(container.innerHTML);
    expect(screen.getByTestId("ProjectsList")).toBeInTheDocument();
  });
});
