import { toBigNumber } from "shared";

export const isOdd = (value: string | number): boolean => {
  return toBigNumber(value).mod(2).eq(1);
};
