import React from "react";
import { BEMClassName } from "@react/bem";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import "./_Markdown.scss";
import { Variant } from "@types";
import { Maybe } from "src/models/graphql";

type MarkdownProps = Omit<ReactMarkdownOptions, "children"> &
  Variant & {
    children?: (string & React.ReactNode) | Maybe<string> | undefined;
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
    >
      {props.children || ""}
    </ReactMarkdown>
  );
};
Markdown.displayName = "Markdown";
