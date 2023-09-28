import BigNumber from "bignumber.js";

export const toBigNumber = (value: string | number | BigNumber): BigNumber => {
  if (BigNumber.isBigNumber(value)) {
    return value;
  }
  return new BigNumber(value);
};
