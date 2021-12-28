import React from "react";
import { BEMClassName } from "../../../commons/bem/bem";
import {
  ProjectItem,
  ProjectProvider,
} from "../../../providers/Project.provider";
import { Section } from "../../atom/Section/Section";
import { Heading } from "../../atom/Heading/Heading";
import "./_Projects.scss";
import { Markdown } from "../../atom/Typography/Markdown";
import { Article, ArticleProps } from "../../atom/Article/Article";

type ProjectItemProps = ArticleProps & {
  project: ProjectItem;
};
const ProjectItemList: React.FC<ProjectItemProps> = ({ project, ...props }) => {
  const namespaces = BEMClassName(ProjectItemList);
  return (
    <Article className={namespaces.blocksNames()} {...props}>
      <Heading
        level={2}
        variant={"light"}
        className={namespaces.elementNames("title")}
      >
        {project.name}
      </Heading>
      <div className={namespaces.elementNames("technologies")}>
        {project.technologies?.items.map((techno, index) => (
          <Markdown
            variant={"light"}
            key={index}
            className={namespaces.elementNames("technology")}
          >
            {techno.name || ""}
          </Markdown>
        ))}
      </div>
      <Markdown variant={"light"}>{project.excerpt || ""}</Markdown>
      <Markdown variant={"light"}>{project.body || ""}</Markdown>
    </Article>
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
      {projects?.map((project) => (
        <ProjectItemList project={project} key={project.name} />
      ))}
    </Section>
  );
};
Projects.displayName = "Projects";
