import React from "react";
import "./_Article.scss";
import { BEMClassName } from "@react/bem";

export type ArticleProps = React.HTMLAttributes<HTMLElement> & {};
export const Article: React.FC<ArticleProps> = ({ ...props }) => {
  const namespace = BEMClassName(Article, props.className);
  return (
    <article
      data-testid={Article.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {props.children}
    </article>
  );
};
Article.displayName = "Article";
