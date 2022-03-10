import { Project } from "src/models/graphql";
import { createSysMock } from "./Sys.mock";
import { createMockupMock } from "./Mockup.mock";
import { createTechnologyMock } from "./Technology.mock";

export const createProjectMock = (
  props: Partial<Project> = {}
): Partial<Project> & { mockups: any } => ({
  sys: createSysMock(),
  slug: "project-1",
  name: "Project 1",
  excerpt: "Excerpt Project 1",
  body: "Body project 1",
  mockups: {
    items: [createMockupMock(), createMockupMock()],
  },
  // @ts-ignore
  client: {
    name: "toto",
  },
  technologies: {
    items: [createTechnologyMock(), createTechnologyMock()],
  },
  ...props,
});
