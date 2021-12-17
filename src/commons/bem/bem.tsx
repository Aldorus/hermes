import React from "react";
import clx from "classnames";
import { exist, removeDuplicate } from "../array.utils";

export const BEMClassName = (
  component: React.ComponentType<any>,
  ...otherNameSpace: (string | undefined)[]
) => {
  const blocks = [component.displayName, ...otherNameSpace].filter(
    exist
  ) as string[];

  let modifiers: string[] = [];
  return {
    blocksNames: (
      modifiersName: Record<string, string | boolean> = {}
    ): string => {
      const modifierList = Object.keys(modifiersName)
        .map((modifierKey) =>
          typeof modifiersName[modifierKey] === "boolean"
            ? modifiersName[modifierKey]
              ? modifierKey
              : null
            : modifiersName[modifierKey]
        )
        .filter(exist);
      modifiers = removeDuplicate(blocks)
        .flatMap((block) => block.split(" "))
        .flatMap((block) =>
          modifierList.map((modifier) => `${block}__${modifier}`)
        );
      return clx(blocks, modifiers);
    },
    elementNames: (...elementNames: (string | undefined)[]): string => {
      const splitBlocks = blocks.flatMap((block) => block.split(" "));
      const elements = splitBlocks.flatMap((block) =>
        elementNames.map((elementName) => `${block}--${elementName}`)
      );
      return clx(elements);
    },
  };
};
