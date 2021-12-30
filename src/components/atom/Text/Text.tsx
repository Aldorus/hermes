import React from "react";
import { BEMClassName } from "@react/bem";
import "./_Text.scss";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "light" | "dark";
};
export const Text: React.FC<TextProps> = ({ variant = "dark", ...props }) => {
  const namespace = BEMClassName(Text, props.className);
  return (
    <p
      {...props}
      className={namespace.blocksNames({ variant })}
      data-test-id={Text.displayName}
    >
      {props.children}
    </p>
  );
};
Text.displayName = "Text";
