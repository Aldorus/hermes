import React from "react";
import "./_Homepage.scss";
import { Introduction, Navigation } from "@components/organism";
import { Text } from "@components/atom";
import { StructureProvider } from "@providers";
import { BEMClassName } from "@react/bem";

type HomepageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Homepage: React.FC<HomepageProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Homepage);
  const { structure } = StructureProvider.get();

  return (
    <div
      data-test-id={Homepage.displayName}
      className={namespaces.blocksNames()}
      {...props}
    >
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
