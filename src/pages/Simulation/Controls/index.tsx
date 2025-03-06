import { Dispatch, FC, SetStateAction } from "react";
import { Box } from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import { tempertureMarks, timeMarks } from "./utils";
import { maxTemperature, maxTime, minTemperature, minTime } from "../utils";

interface Props {
  temperatureInCelsius: number;
  setTemperatureInCelsius: Dispatch<SetStateAction<number>>;
  timeInMinutes: number;
  setTimeInMinutes: Dispatch<SetStateAction<number>>;
  weight: number;
  setWeight: Dispatch<SetStateAction<number>>;
  updateData: () => void;
}

const Controls: FC<Props> = ({ 
  temperatureInCelsius, 
  setTemperatureInCelsius, 
  timeInMinutes, 
  setTimeInMinutes, 
  weight, 
  setWeight,
  updateData,
}) => {


  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem 2rem",
    }}>
      <CustomSlider
        label="Temperatura (°C)"
        marks={tempertureMarks}
        max={maxTemperature}
        min={minTemperature}
        setValue={setTemperatureInCelsius}
        value={temperatureInCelsius}
        updateData={updateData}
      />
      <CustomSlider
        label="Peso Ingresado"
        setValue={setWeight}
        value={weight}
        updateData={updateData}
      />
      <CustomSlider
        label="Tiempo (min)"
        marks={timeMarks}
        setValue={setTimeInMinutes}
        value={timeInMinutes}
        min={minTime}
        max={maxTime}
        updateData={updateData}
      />
    </Box>
  )

}

export default Controls;