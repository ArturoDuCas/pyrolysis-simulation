import { Box, Slider, Typography } from "@mui/material";
import { Mark } from "@mui/material/Slider/useSlider.types";
import { FC } from "react";

interface Props {
  label: string;
  marks: Mark[];
}

const CustomSlider: FC<Props> = ({ label, marks }) => {
  return (
    <Box>
      <Typography gutterBottom>
        {label}
      </Typography>
      <Slider
        defaultValue={20}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  )
}

export default CustomSlider;