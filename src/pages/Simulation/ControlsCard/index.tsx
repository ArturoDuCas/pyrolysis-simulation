import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Controls from "./Controls";

interface Props { }

const ControlsCard: FC<Props> = ({ }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
      <Typography
        variant="h4"
        sx={{ fontSize: "1rem" }}
        fontWeight="bold"
      >
        Datos de Entrada
      </Typography>
      <Controls />
    </Box>
  )
}

export default ControlsCard;