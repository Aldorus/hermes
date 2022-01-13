import {
  Typography,
  TypographyCollection,
  TypographyFilter,
  TypographyOrder,
} from "../models/graphql";
import { gql, useQuery } from "@apollo/client";
import {
  RequestCollectionProvider,
  ResponseProvider,
  SystemId,
} from "./Response.provider";

type TypographyItem = SystemId & Pick<Typography, "content">;
type GetTypographyQueryType = {
  typographyCollection: Pick<TypographyCollection, "items"> & {
    items?: TypographyItem[];
  };
};
export const GetTypographyQuery = gql`
  query GetTypographyQuery($where: TypographyFilter) {
    typographyCollection(where: $where) {
      items {
        sys {
          id
        }
        content
      }
    }
  }
`;

type GetTypographyResponse = ResponseProvider & {
  typography?: TypographyItem;
};
const GetTypography = (reference: string): GetTypographyResponse => {
  const { data, loading, error } = useQuery<
    GetTypographyQueryType,
    RequestCollectionProvider<TypographyOrder, TypographyFilter>
  >(GetTypographyQuery, {
    variables: {
      where: {
        reference,
      },
    },
  });
  return {
    typography: data?.typographyCollection?.items[0],
    loading,
    error,
  };
};

export const TypographyProvider = {
  get: GetTypography,
};
