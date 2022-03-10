import { GetProjectQuery } from "@providers";
import { createProjectMock } from "../../models/mocks";
import { ProjectOrder } from "../../models/graphql";

export const ListProjectProviderMock = () => ({
  request: {
    query: GetProjectQuery,
    variables: {
      order: [ProjectOrder.WeightAsc],
    },
  },
  result: {
    data: {
      structure: {
        projectListCollection: {
          items: [createProjectMock()],
        },
      },
    },
  },
});
