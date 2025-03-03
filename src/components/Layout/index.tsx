import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <Box sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      {children}
    </Box>
  )
}

export default Layout;