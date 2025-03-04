import { FC, ReactNode } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}>
        <Header />
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default Layout;