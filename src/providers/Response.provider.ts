import { ApolloError } from "@apollo/client";

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
