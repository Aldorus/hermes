import React from "react";
import "./_TechnologiesList.scss";
import { Markdown } from "../../atom/Typography/Markdown";
import { ProjectItem } from "../../../providers/Project.provider";
import { BEMClassName } from "../../../commons/bem/bem";

type TechnologiesListProps = React.HTMLAttributes<HTMLDivElement> & {
  technologies: ProjectItem["technologies"];
};
export const TechnologiesList: React.FC<TechnologiesListProps> = ({
  technologies,
  ...props
}) => {
  const namespace = BEMClassName(TechnologiesList, props.className);
  return (
    <div {...props} className={namespace.blocksNames()}>
      {technologies?.items.map((techno) => (
        <Markdown
          variant={"light"}
          key={techno.sys.id}
          className={namespace.elementNames("technology")}
        >
          {techno.name || ""}
        </Markdown>
      ))}
    </div>
  );
};

TechnologiesList.displayName = "TechnologiesList";
