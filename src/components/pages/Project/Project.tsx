import React from "react";
import "./_Project.scss";
import { Heading, Markdown, Article, Spinner, Link } from "@components/atom";
import { ProjectProvider } from "@providers";
import { useParams } from "react-router-dom";
import { TechnologiesList } from "@components/organism";
import { BEMClassName } from "@react/bem";

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Spinner loading={loading} className={namespaces.blocksNames()}>
      <Link
        to={`/#${project?.slug}`}
        className={namespaces.elementNames("navigation")}
      >
        Go back
      </Link>
      <Article className={namespaces.elementNames("content")}>
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
        {/*<div>*/}
        {/*  {project?.mockups?.items.map((mockup) => (*/}
        {/*    <Image*/}
        {/*      src={mockup.url || ""}*/}
        {/*      title={mockup.title || ""}*/}
        {/*      key={mockup.sys.id}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <Markdown variant={"light"}>{project?.body}</Markdown>
      </Article>
    </Spinner>
  );
};
Project.displayName = "Project";
