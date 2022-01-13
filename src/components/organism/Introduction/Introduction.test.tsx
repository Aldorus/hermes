import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GetTypographyProviderMock } from "@providers/mocks";
import { Introduction } from "@components/organism";

describe("Introduction", () => {
  const contentToDisplay = "Content to display from the test";
  const mocks = [GetTypographyProviderMock("homepage", contentToDisplay)];
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Introduction className="Custom-test" />
    </MockedProvider>
  );
  beforeEach(async () => {
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  });

  test("Should render the typography passed from the Mock provider", () => {
    expect(container.querySelector(".Custom-test")).toBeTruthy();
    expect(container.querySelector(".Custom-test")).toContainHTML(
      contentToDisplay
    );
  });
});
