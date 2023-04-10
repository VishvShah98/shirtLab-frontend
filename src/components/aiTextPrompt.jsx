import React from "react";
import { Box, TextField, Button } from "@mui/material";
import state from "../store";
import { useSnapshot } from "valtio";
export default function AiTextPrompt() {
  const [logoDescription, setLogoDescription] = React.useState("");
  const snap = useSnapshot(state);

  const handleGenerate = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: logoDescription,
        }),
      });

      const data = await response.json();
      if (data) {
        state.logoDecal = `data:image/png;base64,${data.photo}`;
        state.fullDecal = `data:image/png;base64,${data.photo}`;
      } else {
        console.error("Invalid response from server");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        m: 2,
        justifyContent: "space-around",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Describe your logo"
        multiline
        value={logoDescription}
        onChange={(event) => {
          setLogoDescription(event.target.value);
        }}
        sx={{
          width: 200,
        }}
        InputProps={{ sx: { height: 250 } }}
      />
      <Button sx={{ ml: 1 , backgroundColor:'darkblue'}} onClick={handleGenerate}>
        Generate
      </Button>
    </Box>
  );
}
