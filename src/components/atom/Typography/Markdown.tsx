import React from "react";
import { BEMClassName } from "@react/bem";
import ReactMarkdown from "react-markdown";
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
      data-test-id={Markdown.displayName}
      linkTarget={"_blank"}
      rehypePlugins={[rehypeRaw]}
      className={namespace.blocksNames({ variant })}
      {...props}
    />
  );
};
Markdown.displayName = "Markdown";
