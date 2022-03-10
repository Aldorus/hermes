import React from "react";
import { BEMClassName } from "@react/bem";
import { ClientItem, ClientProvider } from "@providers";
import { Section, Heading } from "@components/atom";
import "./_Clients.scss";

type ClientItemProps = {
  client: ClientItem;
};
const ClientItemList: React.FC<ClientItemProps> = ({ client }) => {
  const namespaces = BEMClassName(ClientItemList);
  return (
    <Heading
      data-testid={ClientItemList.displayName}
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
    <Section
      data-testid={Clients.displayName}
      {...props}
      className={namespaces.blocksNames()}
    >
      {clients?.map((client) => (
        <ClientItemList client={client} key={client.name} />
      ))}
    </Section>
  );
};
Clients.displayName = "Clients";
