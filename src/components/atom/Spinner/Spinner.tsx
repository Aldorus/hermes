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
      data-test-id={Spinner.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {loading ? <span data-test-id="Spinner-loading">Wait</span> : children}
    </div>
  );
};
Spinner.displayName = "Spinner";
