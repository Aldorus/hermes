import React from "react";
import "./_Image.scss";
import { BEMClassName } from "@react/bem";

export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {};
export const Image: React.FC<ImageProps> = ({ alt, ...props }) => {
  const namespace = BEMClassName(Image, props.className);
  return (
    <img
      data-testid={Image.displayName}
      alt={alt}
      {...props}
      className={namespace.blocksNames()}
    />
  );
};
Image.displayName = "Image";
