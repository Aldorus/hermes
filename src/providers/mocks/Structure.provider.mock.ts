import { GetStructureQuery } from "@providers";
import { createStructureMock } from "../../models/mocks";

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
