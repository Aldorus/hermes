import React from "react";
import ReactDOM from "react-dom";
import "reset-css/reset.css";
import "./tokens/_colors.scss";
import "./tokens/_spacing.scss";
import "./tokens/_typography.scss";
import "./index.scss";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  defaultDataIdFromObject,
} from "@apollo/client";
import { Entry } from "./models/graphql";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/39f5y6g7sdnk/environments/master?access_token=aReZWDKWzrg85vaf5sTCJEDpGcY6QsYo7O51l8TNj74",
  cache: new InMemoryCache({
    dataIdFromObject: (entry) => {
      if ((entry as Entry).sys?.id) {
        return `${entry.__typename}:${(entry as Entry).sys.id}`;
      }
      return defaultDataIdFromObject(entry);
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
