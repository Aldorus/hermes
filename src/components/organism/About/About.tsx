import React from "react";
import { TypographyProvider } from "../../../providers/Typography.provider";
import { BEMClassName } from "../../../commons/bem/bem";
import "./_About.scss";
import { Markdown } from "../../atom/Typography/Markdown";
import { Section } from "../../atom/Section/Section";

type AboutProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const About: React.FC<AboutProps> = ({ ...props }) => {
  const { typography: about } = TypographyProvider.get("about");
  const namespaces = BEMClassName(About, props.className);
  return (
    <Section {...props} className={namespaces.blocksNames()}>
      <Markdown children={about?.content || ""} variant={"light"} />
    </Section>
  );
};

About.displayName = "About";
