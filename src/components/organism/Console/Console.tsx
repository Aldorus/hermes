import React from "react";
import { TypographyProvider } from "@providers";

type ConsoleProps = {};
export const Console: React.FC<ConsoleProps> = ({ ...props }) => {
  const { typography: consoleMessage, loading } =
    TypographyProvider.get("console");
  React.useEffect(() => {
    if (!loading && consoleMessage && consoleMessage.content) {
      const consoleMessageFormatted: string[] = consoleMessage.content
        ?.replaceAll("'", "")
        .split(", ");
      console.log(...consoleMessageFormatted);
    }
  }, [loading, consoleMessage]);
  return null;
};
