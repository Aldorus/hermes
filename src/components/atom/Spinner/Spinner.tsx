import React from "react";
import { BEMClassName } from "@react/bem";

type SpinnerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { loading: boolean };
export const Spinner: React.FC<SpinnerProps> = ({
  loading,
  children,
  ...props
}) => {
  const namespace = BEMClassName(Spinner, props.className);
  return (
    <div
      {...props}
      className={namespace.blocksNames()}
      data-test-id={Spinner.displayName}
    >
      {loading ? "Wait" : children}
    </div>
  );
};
Spinner.displayName = "Spinner";
