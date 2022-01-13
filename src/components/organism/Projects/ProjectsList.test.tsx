import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ProjectsList } from "@components/organism";
import { MockedProvider } from "@apollo/client/testing";
import { ListProjectProviderMock } from "@providers/mocks";

describe("ProjectList", () => {
  const mocks = [ListProjectProviderMock()];
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProjectsList className="Custom-test" />
    </MockedProvider>
  );
  beforeEach(async () => {
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  });

  test("Should render the project list", () => {
    expect(container.querySelector(".Custom-test")).toBeTruthy();
    console.log(container.innerHTML);
  });
});
