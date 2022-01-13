import { TechnologyItem } from "@providers";
import { createSysMock } from "./Sys.mock";

export const createTechnologyMock = (
  props: Partial<TechnologyItem> = {}
): TechnologyItem => ({
  sys: createSysMock(),
  name: "TechnologyName",
  ...props,
});
