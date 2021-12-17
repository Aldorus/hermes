import React from "react";
import "./_Text.scss";
import { BEMClassName } from "../../../commons/bem/bem";

type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  variant?: "light" | "dark";
};
export const Text: React.FC<TextProps> = ({ variant = "dark", ...props }) => {
  const namespace = BEMClassName(Text, props.className);
  return (
    <p {...props} className={namespace.blocksNames({ variant })}>
      {props.children}
    </p>
  );
};
Text.displayName = "Text";
