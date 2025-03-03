import { Box, Slider, Typography } from "@mui/material";
import { Mark } from "@mui/material/Slider/useSlider.types";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  label: string;
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
  marks?: Mark[];
  max?: number;
  min?: number;
}

const CustomSlider: FC<Props> = ({
  label,
  marks,
  max,
  min,
  setValue, 
  value, 
}) => {
  return (
    <Box>
      <Typography gutterBottom>
        {label}
      </Typography>
      <Slider
        marks={marks}
        max={max}
        min={min}
        onChange={(_, value) => setValue(value as number)}
        step={10}
        value={value}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}

export default CustomSlider;