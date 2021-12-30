import React from "react";
import { TypographyProvider } from "@providers";
import { BEMClassName } from "@react/bem";
import { Markdown } from "@components/atom";
import "./_Introduction.scss";

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
