import { Structure } from "src/models/graphql";
import { createSysMock } from "./Sys.mock";

export const createStructureMock = (
  props: Partial<Structure> = {}
): Partial<Structure> => ({
  sys: createSysMock(),
  clients: true,
  projects: false,
  ...props,
});
