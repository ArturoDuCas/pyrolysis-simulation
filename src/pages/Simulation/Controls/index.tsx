import { FC, useState } from "react";
import { Box } from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import { maxTemperature, minTemperature, tempertureMarks } from "./utils";

interface Props { }

const Controls: FC<Props> = ({ }) => {
  const [temperatureInCelsius, setTemperatureInCelsius] = useState<number>(minTemperature);
  const [weight, setWeight] = useState<number>(10);
  const [time, setTime] = useState<number>(10);

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
      />
      <CustomSlider
        label="Peso Ingresado"
        setValue={setWeight}
        value={weight}
      />
      <CustomSlider
        label="Tiempo"
        setValue={setTime}
        value={time}
      />
    </Box>
  )

}

export default Controls;