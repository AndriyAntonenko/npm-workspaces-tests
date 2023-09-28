import { isOdd } from "is-odd";

export const isEven = (value: number | string) => !isOdd(value);
