import React from "react";
import "./_Contacts.scss";
import { BEMClassName } from "@react/bem";
import { Markdown, Section } from "@components/atom";
import { TypographyProvider } from "@providers";

type ContactsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};
export const Contacts: React.FC<ContactsProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Contacts, props.className);
  const { typography: contacts } = TypographyProvider.get("contacts");
  return (
    <Section
      data-test-id={Contacts.displayName}
      {...props}
      className={namespaces.blocksNames()}
    >
      <Markdown variant="light">{contacts?.content}</Markdown>
    </Section>
  );
};
Contacts.displayName = "Contacts";
