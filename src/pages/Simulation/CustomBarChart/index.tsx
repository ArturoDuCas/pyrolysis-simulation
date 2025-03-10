import { FC } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from "./utils";
import { BIOACEITE_COLOR, BIOACEITE_LABEL, BIOCHAR_COLOR, BIOCHAR_LABEL, GAS_COLOR, GAS_LABEL } from "../utils";

interface Props { }

const CustomBarChart: FC<Props> = ({ }) => {

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'key' }]}
      series={[
        { dataKey: BIOCHAR_LABEL, label: BIOCHAR_LABEL, valueFormatter, color: BIOCHAR_COLOR },
        { dataKey: BIOACEITE_LABEL, label: BIOACEITE_LABEL, valueFormatter, color: BIOACEITE_COLOR },
        { dataKey: GAS_LABEL, label: GAS_LABEL, valueFormatter, color: GAS_COLOR },
      ]}
      height={290}
      margin={{ top: 45, bottom: 0, left: 0, right: 0 }}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "top", horizontal: "right" }
        },
      }}
    />
  )
}

export default CustomBarChart;