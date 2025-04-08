import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useDispatch } from "react-redux";
import { setVolume } from "../../redux/slices/playerReducer";

export default function ContinuousSlider() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0.7);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setVolume(newValue));
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          size="small"
        />
        <VolumeUp />
      </Stack>
      {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </Box>
  );
}
