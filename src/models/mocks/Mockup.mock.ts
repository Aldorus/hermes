import { Mockup } from "../graphql";
import { createSysMock } from "src/models/mocks/Sys.mock";

export const createMockupMock = (props: Partial<Mockup>): Partial<Mockup> => ({
  sys: createSysMock(),
  title: "Mockup1",
  media: {
    sys: createSysMock(),
    __typename: "Asset",
    contentfulMetadata: {
      __typename: "ContentfulMetadata",
      tags: [],
    },

    url: "https://test.mock.com",
  },
  ...props,
});
