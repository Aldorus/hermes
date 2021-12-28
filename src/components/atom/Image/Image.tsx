import React from "react";
import "./_Image.scss";
import { BEMClassName } from "../../../commons/bem/bem";

export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {};
export const Image: React.FC<ImageProps> = ({ alt, ...props }) => {
  const namespace = BEMClassName(Image, props.className);
  return <img {...props} className={namespace.blocksNames()} alt={alt} />;
};
Image.displayName = "Image";
