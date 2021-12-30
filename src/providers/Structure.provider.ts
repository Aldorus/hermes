import React from "react";
import { About, Contacts, Clients, ProjectsList } from "@components/organism";
import {
  Structure,
  StructureCollection,
  StructureFilter,
  StructureOrder,
} from "../models/graphql";
import { gql, useQuery } from "@apollo/client";
import {
  RequestCollectionProvider,
  ResponseProvider,
  SystemId,
} from "./Response.provider";

type StructureItem = SystemId & Pick<Structure, "clients" | "projects">;
type GetStructureQueryType = {
  structureCollection: Pick<StructureCollection, "items"> & {
    items?: StructureItem[];
  };
};
export const GetStructureQuery = gql`
  query GetStructureQuery {
    structureCollection {
      items {
        sys {
          id
        }
        clients
        projects
      }
    }
  }
`;

type GridItem = {
  component: React.FC<React.HTMLAttributes<HTMLElement>>;
  label: string;
  title: string;
};
type GetStructureResponse = ResponseProvider & {
  structure?: GridItem[];
};
const GetStructure = (): GetStructureResponse => {
  const { data, loading, error } = useQuery<
    GetStructureQueryType,
    RequestCollectionProvider<StructureOrder, StructureFilter>
  >(GetStructureQuery);
  const gridDefinition: GridItem[] = [];
  gridDefinition.push({
    component: About,
    label: "About",
    title: "Information about myself",
  });
  if (data?.structureCollection?.items[0]?.clients) {
    gridDefinition.push({
      component: Clients,
      label: "Clients",
      title: "About my clients",
    });
  }
  if (data?.structureCollection?.items[0]?.projects) {
    gridDefinition.push({
      component: ProjectsList,
      label: "Projects",
      title: "About my project",
    });
  }
  gridDefinition.push({
    component: Contacts,
    label: "Contacts",
    title: "How to contact me",
  });

  return {
    structure: gridDefinition,
    loading,
    error,
  };
};

export const StructureProvider = {
  get: GetStructure,
};
