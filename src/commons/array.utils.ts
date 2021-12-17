export const exist = (object: unknown) =>
  object !== null && object !== undefined;
export const notEmpty = (object: any) =>
  object !== null && object !== undefined && object.length !== 0;
// @ts-ignore
export const removeDuplicate = (array: Type[] = []): Type[] => [
  // @ts-ignore
  ...new Set(array),
];
