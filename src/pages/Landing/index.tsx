import { FC } from "react";
import { Box } from "@mui/material";
import MachineModel from "../../components/MachineModel";
import Buttons from "./Buttons";


interface Props { }

const LandingPage: FC<Props> = ({ }) => {

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}>
      <MachineModel />
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "80%",
        transform: "translate(-50%, -50%)",
        zIndex: 1
      }}>
        <Buttons />
      </Box>
    </Box>
  )
}

export default LandingPage;