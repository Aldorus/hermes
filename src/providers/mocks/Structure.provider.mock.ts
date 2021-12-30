import { GetStructureQuery } from "@providers";
import { createStructureMock } from "./Structure.mock";

export const GetStructureProviderMock = () => ({
  request: {
    query: GetStructureQuery,
    variables: {},
  },
  result: {
    data: {
      structureCollection: {
        items: [createStructureMock({ clients: false, projects: true })],
      },
    },
  },
});
