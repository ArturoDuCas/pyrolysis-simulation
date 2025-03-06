import { Plastic } from "./types";

export const PET: Plastic = {
  name: 'PET',
  activationEnergy: 200,
  preexponentialFactor: 1e10,
  performance: 0.4,
}

export const HDPE: Plastic = {
  name: 'HDPE',
  activationEnergy: 210,
  preexponentialFactor: 1e10,
  performance: 0.7,
}

export const LDPE: Plastic = {
  name: 'LDPE',
  activationEnergy: 190,
  preexponentialFactor: 5e9,
  performance: 0.725,
}

export const  PP: Plastic = {
  name: 'PP',
  activationEnergy: 210,
  preexponentialFactor: 8e9,
  performance: 0.8,
}

export const plastics = [PET, HDPE, LDPE, PP];