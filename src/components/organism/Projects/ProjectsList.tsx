import React from "react";
import { BEMClassName } from "../../../commons/bem/bem";
import {
  ProjectItem,
  ProjectProvider,
} from "../../../providers/Project.provider";
import { Section } from "../../atom/Section/Section";
import { Heading } from "../../atom/Heading/Heading";
import "./_ProjectsList.scss";
import { Markdown } from "../../atom/Typography/Markdown";
import { Article, ArticleProps } from "../../atom/Article/Article";
import { Link } from "../../atom/Link/Link";
import { TechnologiesList } from "../TechnologiesList/TechnologiesList";

type ProjectsListItemProps = ArticleProps & {
  project: ProjectItem;
};
const ProjectsListItem: React.FC<ProjectsListItemProps> = ({
  project,
  ...props
}) => {
  const namespaces = BEMClassName(ProjectsListItem);
  return (
    <Article className={namespaces.blocksNames()} {...props}>
      <Heading
        level={4}
        variant={"light"}
        className={namespaces.elementNames("client")}
      >
        {project.client?.name}
      </Heading>
      <Heading
        level={2}
        variant={"light"}
        className={namespaces.elementNames("title")}
      >
        {project.name}
      </Heading>
      <TechnologiesList
        className={namespaces.elementNames("technologies")}
        technologies={project?.technologies}
      />
      <Markdown variant={"light"}>{project.excerpt || ""}</Markdown>
      {project.body && (
        <Link
          title={`Discover ${project.client?.name} ${project.name}`}
          to={`projects/${project.slug}`}
          className={namespaces.elementNames("cta")}
        >
          Discover
        </Link>
      )}
    </Article>
  );
};
ProjectsListItem.displayName = "ProjectsListItem";

type ProjectsListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};
export const ProjectsList: React.FC<ProjectsListProps> = ({ ...props }) => {
  const namespaces = BEMClassName(ProjectsList, props.className);
  const { projects } = ProjectProvider.list();
  return (
    <Section {...props} className={namespaces.blocksNames()}>
      {projects?.map((project) => (
        <ProjectsListItem project={project} key={project.name} />
      ))}
    </Section>
  );
};
ProjectsList.displayName = "ProjectsList";
