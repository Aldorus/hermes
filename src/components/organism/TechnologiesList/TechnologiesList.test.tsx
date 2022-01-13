import React from "react";
import { render } from "@testing-library/react";
import { TechnologiesList } from "@components/organism";
import { TechnologyItem } from "@providers";
import { createTechnologyMock } from "../../../models/mocks/Technology.mock";

describe("TechnologiesList", () => {
  const items: TechnologyItem[] = [
    createTechnologyMock(),
    createTechnologyMock(),
  ];
  const { container } = render(
    <TechnologiesList className="Custom-test" technologies={{ items }} />
  );

  test("Should render the structure with only project and not clients", () => {
    expect(container.querySelector(".Custom-test")).toBeTruthy();
    expect(
      container.querySelector("[data-test-id='TechnologiesList']")
    ).toBeTruthy();
  });
});
