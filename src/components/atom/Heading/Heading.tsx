import React from "react";
import "./_Heading.scss";
import { BEMClassName } from "@react/bem";
import { Variant } from "@types";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  Variant & {
    level: number;
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
      data-testid={Heading.displayName}
      {...props}
      // @ts-ignore
      className={`${namespace.blocksNames({ variant, level: HeadingLevel })}`}
    />
  );
};
Heading.displayName = "Heading";
