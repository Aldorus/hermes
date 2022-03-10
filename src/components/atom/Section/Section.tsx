import React from "react";
import "./_Section.scss";
import { BEMClassName } from "@react/bem";

type SectionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Section: React.FC<SectionProps> = ({ ...props }) => {
  const namespace = BEMClassName(Section, props.className);
  return (
    <section
      data-testid={Section.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {props.children}
    </section>
  );
};
Section.displayName = "Section";
