import { FC, useMemo } from "react";
import { PieChart } from "@mui/x-charts";
import { BIOACEITE, BIOACEITE_COLOR, BIOACEITE_LABEL, BIOCHAR, BIOCHAR_COLOR, BIOCHAR_LABEL, GAS, GAS_COLOR, GAS_LABEL } from "../utils";
import { calculatePercentage } from "./utils";
import { valueFormatter } from "./utils";

interface Props { }

const CustomPieChart: FC<Props> = ({ }) => {
  const biocharPercentage = useMemo(() => calculatePercentage(BIOCHAR), []);
  const bioaceitePercentage = useMemo(() => calculatePercentage(BIOACEITE), []);
  const gasPercentage = useMemo(() => calculatePercentage(GAS), []);


  return (
    <PieChart
      margin={{ top: 0, bottom: 0, left: 0, right: 180 }}
      series={[
        {
          data: [
            { id: 0, value: biocharPercentage, label: BIOCHAR_LABEL, color: BIOCHAR_COLOR },
            { id: 1, value: bioaceitePercentage, label: BIOACEITE_LABEL, color: BIOACEITE_COLOR },
            { id: 2, value: gasPercentage, label: GAS_LABEL, color: GAS_COLOR },
          ],
          highlightScope: { fade: 'global', highlight: 'item' },

          valueFormatter: valueFormatter,
        },
      ]}
      slotProps={{
        legend: {
          direction: "column",
          position: { vertical: "middle", horizontal: "right" }
        },
      }}
    />
  )
}

export default CustomPieChart;