import { Plastic } from "./types";

export const GAS_CONSTANT = 8.314; // J/mol·K

export function calculatePlasticPercentage(
  plastic: Plastic,
  temperature: number,  // kelvin
  time: number          // seconds
): number {

  const exponent = - plastic.preexponentialFactor
    * Math.exp(- plastic.activationEnergy / (GAS_CONSTANT * temperature))
    * time;

  const fraction = 1 - Math.exp(exponent);

  return plastic.performance * fraction * 100;
}


export const convertCelsiusToKelvin = (celsius: number) => {
  return celsius + 273.15;
}

export const convertMinutesToSeconds = (minutes: number) => {
  return minutes * 60;
}