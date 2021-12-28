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
} from "./Response.provider";
import { About } from "../components/organism/About/About";
import { Contacts } from "../components/organism/Contact/Contacts";
import { Clients } from "../components/organism/Clients/Clients";
import { Projects } from "../components/organism/Projects/Projects";
import React from "react";

type StructureItem = Pick<Structure, "clients" | "projects">;
type GetStructureQueryType = {
  structureCollection: Pick<StructureCollection, "items"> & {
    items?: StructureItem[];
  };
};
const GetStructureQuery = gql`
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
    title: "Information about myself",
  });
  if (data?.structureCollection?.items[0]?.clients) {
    gridDefinition.push({
      component: Clients,
      title: "About my clients",
    });
  }
  if (data?.structureCollection?.items[0]?.projects) {
    gridDefinition.push({
      component: Projects,
      title: "About my project",
    });
  }
  gridDefinition.push({
    component: Contacts,
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
