import React from "react";
import "./_Article.scss";
import { BEMClassName } from "../../../commons/bem/bem";

export type ArticleProps = React.HTMLAttributes<HTMLElement> & {};
export const Article: React.FC<ArticleProps> = ({ ...props }) => {
  const namespace = BEMClassName(Article, props.className);
  return (
    <article {...props} className={namespace.blocksNames()}>
      {props.children}
    </article>
  );
};
Article.displayName = "Article";
