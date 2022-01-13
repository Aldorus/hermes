import { Typography } from "src/models/graphql";
import { createSysMock } from ".";

export const createTypographyMock = (
  props: Partial<Typography> = {}
): Partial<Typography> => ({
  sys: createSysMock(),
  content: "Typography Content",
  ...props,
});
