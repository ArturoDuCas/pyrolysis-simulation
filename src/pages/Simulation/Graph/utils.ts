import { GraphData } from "./types";

export function valueFormatter(value: number | null) {
  return `${value}mm`;
}

export const dataset = [
  {
    biochar: 59,
    bioAceite: 57,
    gas: 86,
    plasticType: 'PET',
  },
  {
    biochar: 50,
    bioAceite: 52,
    gas: 78,
    plasticType: 'HDPE',
  },
  {
    biochar: 47,
    bioAceite: 53,
    gas: 106,
    plasticType: 'LDPE',
  },
  {
    biochar: 54,
    bioAceite: 56,
    gas: 92,
    plasticType: 'PP',
  },
]