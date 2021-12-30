import { Project } from "src/models/graphql";

export const createProjectMock = (
  props: Partial<Project> = {}
): Partial<Project> => ({
  slug: "project-1",
  name: "Project 1",
  ...props,
});
