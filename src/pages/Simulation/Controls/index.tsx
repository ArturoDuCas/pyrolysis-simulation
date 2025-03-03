import { Box } from "@mui/material";
import { FC } from "react";
import CustomSlider from "../../../components/CustomSlider";
import { tempertureMarks } from "./utils";

interface Props { }

const Controls: FC<Props> = ({ }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem",
    }}>
      <CustomSlider
        label="Temperature"
        marks={tempertureMarks}
      />
      <CustomSlider
        label="Peso Ingresado"
        marks={[]}
      />
      <CustomSlider
        label="Tiempo"
        marks={[]}
      />
    </Box>
  )

}

export default Controls;