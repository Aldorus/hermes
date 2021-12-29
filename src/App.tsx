import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./_App.scss";
import { BEMClassName } from "./commons/bem/bem";
import { Homepage } from "./components/pages/Homepage/Homepage";
import { Project } from "./components/pages/Project/Project";

type AppProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const App: React.FC<AppProps> = ({ ...props }) => {
  const namespaces = BEMClassName(App, props.className);
  return (
    <div className={namespaces.blocksNames()} {...props}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/projects/:projectId" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
App.displayName = "App";
export default App;
