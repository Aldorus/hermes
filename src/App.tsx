import React from "react";
import "./_App.scss";
import { Introduction } from "./components/organism/Introduction/Introduction";
import { Navigation } from "./components/organism/Navigation/Navigation";
import { Text } from "./components/atom/Text/Text";
import { BEMClassName } from "./commons/bem/bem";
import { StructureProvider } from "./providers/Structure.provider";

const App: React.FC = () => {
  const namespaces = BEMClassName(App);
  const { structure } = StructureProvider.get();
  return (
    <div className={namespaces.blocksNames()}>
      <Navigation className={namespaces.elementNames("aside")} />
      <Introduction id="introduction" />
      {structure?.map(({ component: Component }, index) => (
        <React.Fragment key={index}>
          <Text className={namespaces.elementNames("aside")} variant="light">
            0{index + 1}.&nbsp;&lt;{Component.displayName}/&gt;
          </Text>
          <Component
            id={Component.displayName?.toLowerCase()}
            className={namespaces.elementNames("main")}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
App.displayName = "App";
export default App;
