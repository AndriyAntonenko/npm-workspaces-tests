import logger from "pino";

export const isEven = (value: string | number): boolean => {
  const result = Number(value) % 2 === 0;
  logger().info(`isEven(${value}) => ${result}`);
  return result;
};
