import React from "react";
import { BEMClassName } from "../../../commons/bem/bem";
import { ClientItem, ClientProvider } from "../../../providers/Client.provider";
import { Section } from "../../atom/Section/Section";
import { Heading } from "../../atom/Heading/Heading";
import "./_Clients.scss";

type ClientItemProps = {
  client: ClientItem;
};
const ClientItemList: React.FC<ClientItemProps> = ({ client }) => {
  const namespaces = BEMClassName(ClientItemList);
  return (
    <Heading
      level={1}
      variant={"light"}
      className={namespaces.elementNames("title")}
    >
      {client.name}
    </Heading>
  );
};
ClientItemList.displayName = "ClientItemList";

type ClientsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};
export const Clients: React.FC<ClientsProps> = ({ ...props }) => {
  const namespaces = BEMClassName(Clients, props.className);
  const { clients } = ClientProvider.list();
  return (
    <Section {...props} className={namespaces.blocksNames()}>
      <Heading level={2} className="Heading__light">
        Clients
      </Heading>
      {clients?.map((client) => (
        <ClientItemList client={client} key={client.name} />
      ))}
    </Section>
  );
};
Clients.displayName = "Clients";
