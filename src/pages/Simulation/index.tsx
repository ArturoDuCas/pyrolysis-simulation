import { FC } from "react";
import { Grid2 as Grid } from "@mui/material";
import CustomBarChart from "./CustomBarChart";
import CustomPieChart from "./CustomPieChart";
import ControlsCard from "./ControlsCard";


interface Props { }

const SimulationPage: FC<Props> = ({ }) => {

  return (
    <Grid container  sx={{overflowY: "auto"}}>
      <Grid sx={{ padding: "1rem" }} size={{ xs: 12, md: 2 }}>
        <ControlsCard />
      </Grid>
      <Grid sx={{ padding: "1rem" }} size={{ xs: 12, md: 5 }}>
        <CustomBarChart />
      </Grid>
      <Grid sx={{ padding: "1rem" }} size={{ xs: 12, md: 5 }}>
        <CustomPieChart />
      </Grid>
    </ Grid>
  )
}

export default SimulationPage;