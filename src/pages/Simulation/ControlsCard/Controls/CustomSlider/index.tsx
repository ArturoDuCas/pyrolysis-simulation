import { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';

const PercentageSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: "100%", margin: 'auto' }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
          Plástico
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
          Biomasa
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
          {value}%
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="percentage-slider"
          min={0}
          max={100}
          valueLabelDisplay="auto"
          disabled
        />
        <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
          {100 - value}%
        </Typography>
      </Box>
    </Box>
  );
};

export default PercentageSlider;
