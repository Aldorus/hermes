import { GetTypographyQuery } from "@providers";
import { createTypographyMock } from "../../models/mocks";

export const GetTypographyProviderMock = (
  reference: string,
  content: string = ""
) => ({
  request: {
    query: GetTypographyQuery,
    variables: { where: { reference } },
  },
  result: {
    data: {
      typographyCollection: {
        items: [createTypographyMock({ content })],
      },
    },
  },
});
