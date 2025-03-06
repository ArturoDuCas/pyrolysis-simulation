import { maxTemperature, maxTime, minTemperature, minTime } from "../utils";

export const tempertureMarks = [
  {
    value: minTemperature,
    label: `${minTemperature}°C`,
  },
  {
    value: maxTemperature,
    label: `${maxTemperature}°C`,
  }
];

export const timeMarks = [
  {
    value: minTime,
    label: `${minTime}min`,
  },
  {
    value: maxTime,
    label: `${maxTime}min`,
  }
];