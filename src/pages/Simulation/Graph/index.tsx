import { FC } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from "./utils";

interface Props { }

const Graph: FC<Props> = ({ }) => {

  return (
    <BarChart
      dataset={dataset}
      series={[
        { dataKey: 'biochar', label: 'Biochar', valueFormatter },
        { dataKey: 'bioAceite', label: 'Bio-aceite', valueFormatter },
        { dataKey: 'gas', label: 'Gas de síntesis', valueFormatter },
      ]}
      height={290}
      xAxis={[{ dataKey: "plasticType", scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

  )
}

export default Graph;