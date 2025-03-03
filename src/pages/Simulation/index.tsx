import { Box } from "@mui/material";
import { FC } from "react";
import Controls from "./Controls";
import Graph from "./Graph";

interface Props { }

const SimulationPage: FC<Props> = ({ }) => {

  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    }}>
      <Box sx={{ width: "400px" }}>
        <Controls />
      </Box>
      <Graph />

    </Box>
  )
}

export default SimulationPage;