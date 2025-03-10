import { BIOACEITE_LABEL, BIOCHAR, BIOCHAR_LABEL, GAS_LABEL, GAS, BIOACEITE } from "../utils";

export function valueFormatter(value: number | null) {
  return `${value} ton/day`;
}


export const dataset = [
  {
    [BIOCHAR_LABEL]: BIOCHAR,
    [BIOACEITE_LABEL]: BIOACEITE,
    [GAS_LABEL]: GAS,
    key: "Productos Generados"
  }
]