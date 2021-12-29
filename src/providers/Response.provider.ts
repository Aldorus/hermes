import { ApolloError } from "@apollo/client";
import { Entry, Sys } from "../models/graphql";

export type ResponseProvider = {
  loading: boolean;
  error: ApolloError | undefined;
};
export type RequestCollectionProvider<OrderType, FilterType> = {
  limit?: number;
  locale?: String;
  order?: [OrderType];
  preview?: boolean;
  skip?: boolean;
  where?: FilterType;
};

export type SystemId = Pick<Entry, "sys"> & {
  sys: Pick<Sys, "id">;
};
