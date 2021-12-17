import {
  Client,
  ClientCollection,
  ClientFilter,
  ClientOrder,
} from "../models/graphql";
import { gql, useQuery } from "@apollo/client";
import {
  RequestCollectionProvider,
  ResponseProvider,
} from "./Response.provider";

export type ClientItem = Pick<Client, "name">;
type GetClientQueryType = {
  clientCollection: Pick<ClientCollection, "items"> & {
    items?: ClientItem[];
  };
};
const GetClientQuery = gql`
  query GetClientQuery($where: ClientFilter) {
    clientCollection(where: $where) {
      items {
        name
        technologiesCollection {
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

type GetClientResponse = ResponseProvider & {
  client?: Client;
};
const GetClients = (name: string): GetClientResponse => {
  const { data, loading, error } = useQuery<
    GetClientQueryType,
    RequestCollectionProvider<ClientOrder, ClientFilter>
  >(GetClientQuery, {
    variables: {
      where: {
        name,
      },
    },
  });
  return {
    client: data?.clientCollection?.items[0],
    loading,
    error,
  };
};

type ListClientsResponse = ResponseProvider & {
  clients?: ClientItem[];
};
const ListClient = (): ListClientsResponse => {
  const { data, loading, error } = useQuery<GetClientQueryType>(GetClientQuery);
  return {
    clients: data?.clientCollection?.items,
    loading,
    error,
  };
};
export const ClientProvider = {
  get: GetClients,
  list: ListClient,
};
