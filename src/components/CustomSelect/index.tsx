import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";


interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: string[]
  id: string;
  label: string;
}

const CustomSelect: FC<Props> = ({
  value,
  setValue,
  options,
  id,
  label
}) => {

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };


  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={`${id}-select`}
        value={value}
        label={label}
        onChange={handleChange}
        disabled
        size="small"
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )

}

export default CustomSelect;