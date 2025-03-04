import { Box, Button } from "@mui/material";
import { FC } from "react";
import { Recycling } from '@mui/icons-material';
import { useNavigate } from "react-router";

interface Props { }

const Header: FC<Props> = ({ }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      width: "100%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem",
      borderBottom: "1px solid #ccc",
    }}>
      <Button
        startIcon={<Recycling />}
        onClick={() => navigate("/")}
      >
        ARRE
      </Button>

    </Box>
  )
}

export default Header;