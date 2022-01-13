import { Project } from "src/models/graphql";
import { createSysMock } from "./Sys.mock";

export const createProjectMock = (
  props: Partial<Project> = {}
): Partial<Project> => ({
  sys: createSysMock(),
  slug: "project-1",
  name: "Project 1",
  excerpt: "Excerpt Project 1",
  body: "Body project 1",
  ...props,
});
