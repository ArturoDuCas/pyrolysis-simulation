import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";

interface Props { }

const Buttons: FC<Props> = ({ }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "1rem",
    }}>
      <Button
        size="large"
        variant="contained"
        onClick={() => navigate("/simulation")}
      >
        Simulación
      </Button>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => navigate("/details")}
      >
        Descubre más
      </Button>
    </Box>
  )

}

export default Buttons;