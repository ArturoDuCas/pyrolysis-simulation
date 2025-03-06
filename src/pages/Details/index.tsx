import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Props { }

const DetailsPage: FC<Props> = ({ }) => {

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "100%",
        padding: "1rem",
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          height: "100%",
        }}>
          <Typography variant="h4">
            Diagrama del Proceso
          </Typography>
          <img
            src="/images/diagram.jpg"
            alt="Diagrama"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          height: "100%",
        }}>
          <img
            src="/images/table.jpg"
            alt="Cover"
            style={{ height: "300px", maxHeight: "40%", objectFit: "contain" }}
          />
          <img
            src="/images/f1.jpg"
            alt="Formula 1"
            style={{ height: "15%", maxHeight: "15%", objectFit: "contain" }}
          />
          <img
            src="/images/f2.jpg"
            alt="Formula 2"
            style={{ height: "15%", maxHeight: "15%", objectFit: "contain" }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default DetailsPage;