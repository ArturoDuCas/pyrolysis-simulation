import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";

interface Props { }

const Buttons: FC<Props> = ({ }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
    }}>
      <Button
        variant="outlined"
        onClick={() => navigate("/details")}
      >
        Descubre más
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/simulation")}
      >
        Simulación
      </Button>
    </Box>
  )

}

export default Buttons;