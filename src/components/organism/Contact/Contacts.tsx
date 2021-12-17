import React from "react";
import "./_Contacts.scss";
import { BEMClassName } from "../../../commons/bem/bem";
import { Section } from "../../atom/Section/Section";
import { Markdown } from "../../atom/Typography/Markdown";
import { TypographyProvider } from "../../../providers/Typography.provider";

type ContactsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Contacts: React.FC<ContactsProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Contacts, props.className);
  const { typography: contacts } = TypographyProvider.get("contacts");
  return (
    <Section {...props} className={namespaces.blocksNames()}>
      <Markdown variant="light">{contacts?.content || ""}</Markdown>
    </Section>
  );
};
Contacts.displayName = "Contacts";
