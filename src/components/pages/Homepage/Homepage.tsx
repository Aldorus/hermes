import React from "react";
import "./_Homepage.scss";
import { Navigation } from "../../organism/Navigation/Navigation";
import { Introduction } from "../../organism/Introduction/Introduction";
import { Text } from "../../atom/Text/Text";
import { StructureProvider } from "../../../providers/Structure.provider";
import { BEMClassName } from "../../../commons/bem/bem";

type HomepageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Homepage: React.FC<HomepageProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Homepage);
  const { structure } = StructureProvider.get();

  return (
    <div className={namespaces.blocksNames()}>
      <Navigation
        className={namespaces.elementNames("aside", "aside-navigation")}
      />
      <Introduction id="introduction" />
      {structure?.map(({ component: Component, label }, index) => (
        <React.Fragment key={index}>
          <Text
            className={namespaces.elementNames("aside", "aside-content")}
            variant="light"
          >
            0{index + 1}.&nbsp;&lt;{label}/&gt;
          </Text>
          <Component
            id={label.toLowerCase()}
            className={namespaces.elementNames("main", "main-content")}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
Homepage.displayName = "Homepage";
