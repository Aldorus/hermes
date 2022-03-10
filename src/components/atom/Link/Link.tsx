import * as React from "react";
import { NavLinkProps } from "react-router-dom";
import { BEMClassName } from "@react/bem";
// @ts-ignore
import { HashLink as NavLink } from "react-router-hash-link";
import "./_Link.scss";

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
      smooth
      {...(props as ReactRouterLinkProps)}
      data-testid={Link.displayName}
      className={namespaces.blocksNames({ hoverEffect })}
    />
  ) : (
    <a
      {...(props as DefaultLinkProps)}
      className={namespaces.blocksNames()}
      data-testid={Link.displayName}
    >
      {props.children}
    </a>
  );
};
Link.displayName = "Link";
