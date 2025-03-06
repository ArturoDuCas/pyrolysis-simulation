import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Controls from "./Controls";
import Graph from "./Graph";
import { maxTemperature, maxTime, minTemperature, minTime } from "./utils";
import { DatasetType } from "@mui/x-charts/internals";
import { plastics } from "./plastics";
import { calculatePlasticPercentage, convertCelsiusToKelvin, convertMinutesToSeconds } from "./formulas";

interface Props { }

const SimulationPage: FC<Props> = ({ }) => {
  const [temperatureInCelsius, setTemperatureInCelsius] = useState<number>((minTemperature + maxTemperature) / 2);
  const [timeInMinutes, setTimeInMinutes] = useState<number>((minTime + maxTime) / 2);
  const [weight, setWeight] = useState<number>(10);
  const [dataset, setDataset] = useState<DatasetType>([]);

  useEffect(() => {
    updateData();
  }, [])


  const updateData = () => {
    const temperatureInKelvin = convertCelsiusToKelvin(temperatureInCelsius);
    const timeInSeconds = convertMinutesToSeconds(timeInMinutes);

    
    const newData = plastics.map((plastic) => {

      return {
        plasticType: plastic.name,
        biochar: calculatePlasticPercentage(plastic, temperatureInKelvin, timeInSeconds),
      }

    });

    setDataset(newData);
  }



  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    }}>
      <Box sx={{ width: "400px" }}>
        <Controls
          temperatureInCelsius={temperatureInCelsius}
          setTemperatureInCelsius={setTemperatureInCelsius}
          timeInMinutes={timeInMinutes}
          setTimeInMinutes={setTimeInMinutes}
          weight={weight}
          setWeight={setWeight}
          updateData={updateData}
        />
      </Box>
      <Graph
        dataset={dataset}
      />

    </Box>
  )
}

export default SimulationPage;