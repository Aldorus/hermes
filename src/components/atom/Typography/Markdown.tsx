import { BEMClassName } from "../../../commons/bem/bem";
import ReactMarkdown from "react-markdown";
import React from "react";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import "./_Markdown.scss";

type MarkdownProps = ReactMarkdownOptions & {
  variant?: "light" | "dark";
};
export const Markdown: React.FC<MarkdownProps> = ({
  variant = "dark",
  ...props
}) => {
  const namespace = BEMClassName(Markdown, props.className);
  return (
    <ReactMarkdown {...props} className={namespace.blocksNames({ variant })} />
  );
};
Markdown.displayName = "Markdown";
