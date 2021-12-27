import React from "react";
import "./_Heading.scss";
import { BEMClassName } from "../../../commons/bem/bem";

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: number;
  variant?: "dark" | "light";
};
export const Heading: React.FC<HeadingProps> = ({
  level,
  variant = "dark",
  ...props
}) => {
  const HeadingLevel = `h${level}`;
  const namespace = BEMClassName(Heading, props.className);
  return (
    <HeadingLevel
      {...props}
      // @ts-ignore
      className={`${namespace.blocksNames({ variant, level: HeadingLevel })}`}
    />
  );
};
Heading.displayName = "Heading";
