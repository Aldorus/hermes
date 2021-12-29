import React from "react";
import "./_Project.scss";
import { BEMClassName } from "../../../commons/bem/bem";
import { Heading } from "../../atom/Heading/Heading";
import { Markdown } from "../../atom/Typography/Markdown";
import { Image } from "../../atom/Image/Image";
import { Article } from "../../atom/Article/Article";
import { ProjectProvider } from "../../../providers/Project.provider";
import { Spinner } from "../../atom/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { TechnologiesList } from "../../organism/TechnologiesList/TechnologiesList";
import { Link } from "../../atom/Link/Link";
import { Navigation } from "../../organism/Navigation/Navigation";

type ProjectRouterProps = {
  slug: string;
};
type ProjectProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Project: React.FC<ProjectProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Project);
  const { slug } = useParams<ProjectRouterProps>();
  const { project, loading } = ProjectProvider.get(slug);
  return (
    <Spinner loading={loading}>
      <div className={namespaces.blocksNames()}>
        <Navigation className={namespaces.elementNames("navigation")} />
        <Article className={namespaces.elementNames("content")}>
          <Link to={`/#${project?.slug}`}>Go back</Link>
          <Heading
            level={4}
            variant={"light"}
            className={namespaces.elementNames("client")}
          >
            {project?.client?.name}
          </Heading>
          <Heading
            level={2}
            variant={"light"}
            className={namespaces.elementNames("title")}
          >
            {project?.name}
          </Heading>
          <TechnologiesList technologies={project?.technologies} />
          <Markdown variant={"light"}>{project?.excerpt || ""}</Markdown>
          <div>
            {project?.mockups?.items.map((mockup) => (
              <Image
                src={mockup.url || ""}
                title={mockup.title || ""}
                key={mockup.sys.id}
              />
            ))}
          </div>
          <Markdown variant={"light"}>{project?.body || ""}</Markdown>
        </Article>
      </div>
    </Spinner>
  );
};
Project.displayName = "Project";
