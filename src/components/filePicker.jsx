import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { Box } from "@mui/material";
export default function FilePicker() {
  const snap = useSnapshot(state);
  return (
    <Box sx={{display:'flex', justifyItems:'center', height:'50px', alignItems:'center'}}>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            state.logoDecal = event.target.result;
            state.fullDecal = event.target.result;
          };
          reader.readAsDataURL(file);
        }}
      />
    </Box>
  );
}
