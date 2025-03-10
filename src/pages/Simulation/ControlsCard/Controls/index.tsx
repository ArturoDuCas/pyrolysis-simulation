import { Box } from "@mui/material";
import { FC, useState } from "react";
import CustomSelect from "../../../../components/CustomSelect";
import { biomassNames, plasticNames } from "./utils";
import PercentageSlider from "./CustomSlider";
import TonsInput from "./TonsInput";

interface Props { }

const Controls: FC<Props> = ({ }) => {
  const [plasticType, setPlasticType] = useState<string>("LDPE");
  const [biomassName, setBiomassName] = useState<string>("Cáscaras de Arroz");

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}>
      <PercentageSlider />
      <TonsInput />
      <CustomSelect
        id="plastic-type"
        label="Tipo de Plástico"
        options={plasticNames}
        setValue={setPlasticType}
        value={plasticType}
      />
      <CustomSelect
        id="biomass-type"
        label="Tipo de Biomasa"
        options={biomassNames}
        setValue={setBiomassName}
        value={biomassName}
      />
    </Box>
  )

}

export default Controls;