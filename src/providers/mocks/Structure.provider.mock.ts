import { GetStructureQuery } from "@providers";
import { createStructureMock } from "../../models/mocks";

export const GetStructureProviderMock = () => ({
  request: {
    query: GetStructureQuery,
    variables: {},
  },
  result: {
    data: {
      structure: createStructureMock({ clients: false, projects: true }),
    },
  },
});
