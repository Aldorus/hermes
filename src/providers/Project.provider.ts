import {
  Project,
  ProjectCollection,
  ProjectFilter,
  ProjectOrder,
  Technology,
} from "../models/graphql";
import { gql, useQuery } from "@apollo/client";
import {
  RequestCollectionProvider,
  ResponseProvider,
} from "./Response.provider";

export type TechnologyItem = Pick<Technology, "name">;
export type ProjectItem = Pick<Project, "name" | "body" | "excerpt"> & {
  technologies?: { items: TechnologyItem[] };
};
type GetProjectQueryType = {
  projectCollection: Pick<ProjectCollection, "items"> & {
    items?: ProjectItem[];
  };
};
const GetProjectQuery = gql`
  query GetProjectQuery($where: ProjectFilter) {
    projectCollection(where: $where) {
      items {
        name
        excerpt
        body
        technologies: technologiesCollection {
          items {
            ... on Technology {
              name
            }
          }
        }
      }
    }
  }
`;

type GetProjectResponse = ResponseProvider & {
  project?: Project;
};
const GetProject = (name: string): GetProjectResponse => {
  const { data, loading, error } = useQuery<
    GetProjectQueryType,
    RequestCollectionProvider<ProjectOrder, ProjectFilter>
  >(GetProjectQuery, {
    variables: {
      where: {
        name,
      },
    },
  });
  return {
    project: data?.projectCollection?.items[0],
    loading,
    error,
  };
};

type ListProjectsResponse = ResponseProvider & {
  projects?: ProjectItem[];
};
const ListProject = (): ListProjectsResponse => {
  const { data, loading, error } =
    useQuery<GetProjectQueryType>(GetProjectQuery);
  return {
    projects: data?.projectCollection?.items,
    loading,
    error,
  };
};
export const ProjectProvider = {
  get: GetProject,
  list: ListProject,
};
