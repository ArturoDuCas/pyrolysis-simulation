import { BIOACEITE, BIOCHAR, GAS } from "../utils";

export const calculatePercentage = (value: number) => {
  return (value / (BIOCHAR + BIOACEITE + GAS)) * 100;
}

export const valueFormatter = (item: { value: number }) => `${item.value.toFixed(2)}%`;
