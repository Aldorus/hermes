import React from "react";
import { BEMClassName } from "./bem";

describe("BEMClassName", () => {
  const TestComponent = () => <></>;
  TestComponent.displayName = "TestComponent";

  describe("blocksNames", () => {
    test("Should return the blockName when there is only the component name", () => {
      const namespace = BEMClassName(TestComponent);
      expect(namespace.blocksNames()).toEqual("TestComponent");
      expect(namespace.elementNames("item")).toEqual("TestComponent__item");
    });

    test("Should return the blockName and the classname when there is className overcharge", () => {
      const namespace = BEMClassName(
        TestComponent,
        "ParentClassName ParentClassName2"
      );
      expect(namespace.blocksNames()).toEqual(
        "TestComponent ParentClassName ParentClassName2"
      );
      expect(namespace.elementNames("item")).toEqual(
        "TestComponent__item ParentClassName__item ParentClassName2__item"
      );
    });
  });

  describe("Support the modifier on blockName", () => {
    test("Should append the modifier value when it a string", () => {
      const namespace = BEMClassName(
        TestComponent,
        "ParentClassName ParentClassName2"
      );
      expect(
        namespace.blocksNames({
          modifierName: "modifier",
        })
      ).toEqual(
        "TestComponent ParentClassName ParentClassName2 TestComponent--modifier ParentClassName--modifier ParentClassName2--modifier"
      );
    });

    test("Should append the modifier key when it a boolean to true", () => {
      const namespace = BEMClassName(TestComponent, "ParentClassName");
      expect(
        namespace.blocksNames({
          modifierName: true,
        })
      ).toEqual(
        "TestComponent ParentClassName TestComponent--modifierName ParentClassName--modifierName"
      );

      expect(
        namespace.blocksNames({
          modifierName: false,
        })
      ).toEqual("TestComponent ParentClassName");
    });

    test("The modifier should be propagated to the elements", () => {
      const namespace = BEMClassName(TestComponent, "ParentClassName");
      namespace.blocksNames({ size: "small" });
      expect(namespace.elementNames("item", "text")).toEqual(
        "TestComponent__item TestComponent__text ParentClassName__item ParentClassName__text"
      );
    });
  });
});
