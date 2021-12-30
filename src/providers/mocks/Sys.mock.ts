import { Sys } from "src/models/graphql";

export const createSysMock = (props: Partial<Sys> = {}): Sys => ({
  id: "21345",
  __typename: "Sys",
  environmentId: "1",
  spaceId: "0",
  ...props,
});
