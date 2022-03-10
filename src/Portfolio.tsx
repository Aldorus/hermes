import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./_Portfolio.scss";
import { BEMClassName } from "@react/bem";
import { Homepage, Project } from "@components/pages";
import { Console } from "@components/organism";

type PortfolioProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const Portfolio: React.FC<PortfolioProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Portfolio, props.className);
  React.useEffect(() => {
    // console.log(test);
  }, []);
  return (
    <div className={namespaces.blocksNames()} {...props}>
      <Console />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/projects/:slug" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
Portfolio.displayName = "Portfolio";
export default Portfolio;
