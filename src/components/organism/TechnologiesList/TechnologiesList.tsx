import React from "react";
import "./_TechnologiesList.scss";
import { Markdown } from "@components/atom";
import { ProjectItem } from "@providers";
import { BEMClassName } from "@react/bem";

type TechnologiesListProps = React.HTMLAttributes<HTMLDivElement> & {
  technologies: ProjectItem["technologies"];
};
export const TechnologiesList: React.FC<TechnologiesListProps> = ({
  technologies,
  ...props
}) => {
  const namespace = BEMClassName(TechnologiesList, props.className);
  return (
    <div
      data-test-id={TechnologiesList.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {technologies?.items.map((techno) => (
        <Markdown
          variant={"light"}
          key={techno.sys.id}
          children={techno.name}
          className={namespace.elementNames("technology")}
        />
      ))}
    </div>
  );
};

TechnologiesList.displayName = "TechnologiesList";
