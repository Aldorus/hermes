import { BEMClassName } from "../../../commons/bem/bem";
import ReactMarkdown from "react-markdown";
import React from "react";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
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
    <ReactMarkdown
      linkTarget={"_blank"}
      rehypePlugins={[rehypeRaw]}
      className={namespace.blocksNames({ variant })}
      {...props}
    />
  );
};
Markdown.displayName = "Markdown";
