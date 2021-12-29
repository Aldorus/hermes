import {
  Asset,
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
  SystemId,
} from "./Response.provider";

export type AssetItem = SystemId & Pick<Asset, "url" | "title">;
export type TechnologyItem = SystemId & Pick<Technology, "name">;
export type ProjectItem = SystemId &
  Pick<Project, "name" | "slug" | "body" | "excerpt" | "client"> & {
    technologies?: { items: TechnologyItem[] };
    mockups?: { items: AssetItem[] };
  };
type GetProjectQueryType = {
  projectCollection: Pick<ProjectCollection, "items"> & {
    items?: ProjectItem[];
  };
};
const GetProjectQuery = gql`
  query GetProjectQuery($where: ProjectFilter, $order: [ProjectOrder]) {
    projectCollection(where: $where, order: $order) {
      items {
        sys {
          id
        }
        name
        slug
        excerpt
        body
        mockups: mockupsCollection(limit: 20) {
          items {
            sys {
              id
            }
            url
            title
          }
        }
        client {
          name
        }
        technologies: technologiesCollection(limit: 20) {
          items {
            ... on Technology {
              name
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`;

type GetProjectResponse = ResponseProvider & {
  project?: ProjectItem;
};
const GetProject = (slug?: string): GetProjectResponse => {
  const { data, loading, error } = useQuery<
    GetProjectQueryType,
    RequestCollectionProvider<ProjectOrder, ProjectFilter>
  >(GetProjectQuery, {
    variables: {
      where: {
        slug,
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
  const { data, loading, error } = useQuery<
    GetProjectQueryType,
    RequestCollectionProvider<ProjectOrder, ProjectFilter>
  >(GetProjectQuery, {
    variables: {
      order: [ProjectOrder.WeightAsc],
    },
  });
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
