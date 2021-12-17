import React from "react";
import { BEMClassName } from "../../../commons/bem/bem";
import {
  ProjectItem,
  ProjectProvider,
} from "../../../providers/Project.provider";
import { Section } from "../../atom/Section/Section";
import { Heading } from "../../atom/Heading/Heading";
import "./_Projects.scss";

type ProjectItemProps = {
  project: ProjectItem;
};
const ProjectItemList: React.FC<ProjectItemProps> = ({ project }) => {
  const namespaces = BEMClassName(ProjectItemList);
  return (
    <Heading
      level={1}
      variant={"light"}
      className={namespaces.elementNames("title")}
    >
      {project.name}
    </Heading>
  );
};
ProjectItemList.displayName = "ProjectItemList";

type ProjectsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};
export const Projects: React.FC<ProjectsProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Projects, props.className);
  const { projects } = ProjectProvider.list();
  return (
    <Section {...props} className={namespaces.blocksNames()}>
      <Heading level={2} variant="light">
        Projects
      </Heading>
      {projects?.map((project) => (
        <ProjectItemList project={project} key={project.name} />
      ))}
    </Section>
  );
};
Projects.displayName = "Projects";
