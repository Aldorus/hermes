import React from "react";
import { BEMClassName } from "@react/bem";
import "./_Spinner.scss";

export const Spinner: React.FC = () => {
  const namespace = BEMClassName(Spinner);
  return (
    <span className={namespace.blocksNames()} data-testid="Spinner-loading">
      Wait
    </span>
  );
};
Spinner.displayName = "Spinner";

type ApplicationSpinnerProps = React.HTMLAttributes<HTMLDivElement>;
export const ApplicationSpinner: React.FC<ApplicationSpinnerProps> = ({
  ...props
}) => {
  const namespace = BEMClassName(ApplicationSpinner);
  return (
    <div
      data-testid="Spinner-application-loading"
      {...props}
      className={namespace.blocksNames()}
    />
  );
};
ApplicationSpinner.displayName = "ApplicationSpinner";

type ComponentSpinnerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  loading: boolean;
  spinner?: React.ReactElement<ApplicationSpinnerProps> | React.ReactElement;
};
export const ComponentSpinner: React.FC<ComponentSpinnerProps> = ({
  loading,
  children,
  spinner = <Spinner />,
  ...props
}) => {
  const namespace = BEMClassName(ComponentSpinner, props.className);
  return (
    <div
      data-testid={ComponentSpinner.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {loading ? spinner : children}
    </div>
  );
};

ComponentSpinner.displayName = "ComponentSpinner";
