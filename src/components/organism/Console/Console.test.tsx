import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GetTypographyProviderMock } from "@providers/mocks";
import { Console } from "@components/organism";

describe("Console", () => {
  const part1 = "Content to display from the test part 1";
  const part2 = "Content to display from the test part 2";
  const contentToDisplay = `'${part1}', '${part2}'`;

  const mocks = [GetTypographyProviderMock("console", contentToDisplay)];
  const log = jest.spyOn(console, "log");

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Console />
    </MockedProvider>
  );
  beforeEach(async () => {
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  });

  test("Should render nothing but should log the content in the console", () => {
    expect(container).toBeEmptyDOMElement();
    expect(log).toHaveBeenCalledWith(part1, part2);
  });
});
