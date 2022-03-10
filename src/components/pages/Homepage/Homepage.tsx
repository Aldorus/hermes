import React from "react";
import "./_Homepage.scss";
import { Introduction, Navigation } from "@components/organism";
import { ApplicationSpinner, ComponentSpinner, Text } from "@components/atom";
import { StructureProvider } from "@providers";
import { BEMClassName } from "@react/bem";

type HomepageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Homepage: React.FC<HomepageProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Homepage);
  const { structure, loading } = StructureProvider.get();

  return (
    <ComponentSpinner loading={loading} spinner={<ApplicationSpinner />}>
      <div
        data-testid={Homepage.displayName}
        className={namespaces.blocksNames({ loading })}
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
    </ComponentSpinner>
  );
};
Homepage.displayName = "Homepage";
