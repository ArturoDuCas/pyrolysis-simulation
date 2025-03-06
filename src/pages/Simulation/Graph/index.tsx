import { FC } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { valueFormatter } from "./utils";
import { DatasetType } from "@mui/x-charts/internals";

interface Props {
  dataset: DatasetType;
}

const Graph: FC<Props> = ({
  dataset
}) => {

  return (
    <BarChart
      dataset={dataset}
      series={[
        { dataKey: 'biochar', label: 'Biochar', valueFormatter, color: '#988b92' },
        { dataKey: 'bioAceite', label: 'Bio-aceite', valueFormatter, color: "#3a4b64" },
        { dataKey: 'gas', label: 'Gas', valueFormatter, color: '#6d331f' },
      ]}
      height={290}
      xAxis={[{ dataKey: "plasticType", scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

  )
}

export default Graph;