import { FC, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

interface Props { }

const TonsInput: FC<Props> = ({ }) => {
  const [value, _] = useState<string>("12");

  return (
    <TextField
      label="Peso Ingresado"
      value={value}
      slotProps={{
        input: {
          endAdornment: <InputAdornment position="end">tons</InputAdornment>,
        },
      }}
      disabled
      size="small"
    />
  )
}

export default TonsInput;
