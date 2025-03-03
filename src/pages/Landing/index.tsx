import { FC } from "react";
import { Box } from "@mui/material";
import MachineModel from "../../components/MachineModel";
import Buttons from "./Buttons";


interface Props { }

const LandingPage: FC<Props> = ({ }) => {

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <MachineModel />
      <Buttons />
    </Box>
  )
}

export default LandingPage;