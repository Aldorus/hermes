import * as React from "react";
import "./_Link.scss";
import { BEMClassName } from "../../../commons/bem/bem";
import { NavLink, NavLinkProps } from "react-router-dom";

type ReactRouterLinkProps = NavLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type DefaultLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type LinkProps = (DefaultLinkProps | ReactRouterLinkProps) & {
  hoverEffect?: boolean;
};
export const Link: React.FC<LinkProps> = ({ hoverEffect = true, ...props }) => {
  const namespaces = BEMClassName(Link, props.className);
  return (props as ReactRouterLinkProps).to ? (
    <NavLink
      {...(props as ReactRouterLinkProps)}
      className={namespaces.blocksNames({ hoverEffect })}
    />
  ) : (
    <a {...(props as DefaultLinkProps)} className={namespaces.blocksNames()}>
      {props.children}
    </a>
  );
};
Link.displayName = "Link";
