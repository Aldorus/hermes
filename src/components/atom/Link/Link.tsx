import * as React from "react";
import "./_Link.scss";
import { BEMClassName } from "../../../commons/bem/bem";

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  const namespaces = BEMClassName(Link, props.className);
  return (
    <a {...props} className={namespaces.blocksNames()}>
      {children}
    </a>
  );
};
Link.displayName = "Link";
