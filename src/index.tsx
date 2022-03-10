import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "reset-css/reset.css";
import "./tokens/_colors.scss";
import "./tokens/_spacing.scss";
import "./tokens/_typography.scss";
import "./index.scss";
import Portfolio from "./Portfolio";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  defaultDataIdFromObject,
} from "@apollo/client";
import { Entry } from "./models/graphql";

Sentry.init({
  dsn: "https://39876dc8469241e9ae3ab146089a6170@o49673.ingest.sentry.io/106289",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

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
      <Portfolio />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
