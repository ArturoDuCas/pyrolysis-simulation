import { Box, Grid2 as Grid, Skeleton, Typography } from "@mui/material";
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
      <Grid size={6}>
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
          <Skeleton
            variant="rectangular"
            height="75%"
          />
        </Box>
      </Grid>
      <Grid size={6}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          height: "100%",
        }}>
          <Skeleton
            variant="rectangular"
            height="40%"
          />
          <Skeleton
            variant="rectangular"
            height="15%"
          />
          <Skeleton
            variant="rectangular"
            height="15%"
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default DetailsPage;