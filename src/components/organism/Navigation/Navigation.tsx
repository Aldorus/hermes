import React from "react";
import "./_Navigation.scss";
import { Link } from "@components/atom";
import { StructureProvider } from "@providers";
import { BEMClassName } from "@react/bem";

type NavigationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Navigation: React.FC<NavigationProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Navigation, props.className);
  const { structure } = StructureProvider.get();
  return (
    <nav {...props} className={namespaces.blocksNames()}>
      {structure?.map((def, index) => (
        <Link
          key={index}
          to={`/#${def.label.toLowerCase()}`}
          title={def.title}
          tabIndex={index}
          hoverEffect={false}
          className={namespaces.elementNames("item")}
        >
          <span className={namespaces.elementNames('item-label')}>0{index + 1}.&nbsp;&lt;{def.label}/&gt;</span>
        </Link>
      ))}
    </nav>
  );
};
Navigation.displayName = "Navigation";
