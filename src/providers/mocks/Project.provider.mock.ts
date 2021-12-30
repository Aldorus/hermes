import { GetProjectQuery } from "@providers";
import { createProjectMock } from "./Project.mock";
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
      projectCollection: {
        items: [createProjectMock()],
      },
    },
  },
});
