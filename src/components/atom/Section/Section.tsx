import React from "react";
import "./_Section.scss";
import { BEMClassName } from "../../../commons/bem/bem";

type SectionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Section: React.FC<SectionProps> = ({ ...props }) => {
  const namespace = BEMClassName(Section, props.className);
  return (
    <section {...props} className={namespace.blocksNames()}>
      <div className={namespace.elementNames("inner")}>{props.children}</div>
    </section>
  );
};
Section.displayName = "Section";
