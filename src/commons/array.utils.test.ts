import { exist, notEmpty, removeDuplicate } from "./array.utils";

describe("Array.utils", () => {
  test("exist", () => {
    expect(exist(null)).toBeFalsy();
    expect(exist(undefined)).toBeFalsy();
    expect(exist([])).toBeTruthy();
    expect(exist({})).toBeTruthy();
  });

  test("notEmpty", () => {
    expect(notEmpty(null)).toBeFalsy();
    expect(notEmpty(undefined)).toBeFalsy();
    expect(notEmpty([])).toBeFalsy();
    expect(notEmpty({})).toBeTruthy();
  });

  test("removeDuplicate", () => {
    expect(removeDuplicate([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicate([1, 2, 3, 4, 3, 2, 3])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicate([null, null, null])).toEqual([null]);
  });
});
