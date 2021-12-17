import React from "react";
import { TypographyProvider } from "../../../providers/Typography.provider";
import { BEMClassName } from "../../../commons/bem/bem";
import "./_Introduction.scss";
import { Markdown } from "../../atom/Typography/Markdown";

type IntroductionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Introduction: React.FC<IntroductionProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Introduction, props.className);
  const { typography: homepage } = TypographyProvider.get("homepage");
  return (
    <header {...props} className={namespaces.blocksNames()}>
      <Markdown children={homepage?.content || ""} variant={"light"} />
    </header>
  );
};

Introduction.displayName = "Introduction";
