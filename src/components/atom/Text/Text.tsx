import React from "react";
import { BEMClassName } from "@react/bem";
import { Variant } from "@types";
import "./_Text.scss";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & Variant;
export const Text: React.FC<TextProps> = ({ variant = "dark", ...props }) => {
  const namespace = BEMClassName(Text, props.className);
  return (
    <p
      data-testid={Text.displayName}
      {...props}
      className={namespace.blocksNames({ variant })}
    >
      {props.children}
    </p>
  );
};
Text.displayName = "Text";
