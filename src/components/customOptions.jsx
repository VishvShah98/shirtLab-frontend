import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import state from "../store";
import { useSnapshot } from "valtio";
import { SketchPicker } from "react-color";
import FilePicker from "./filePicker";
import AiTextPrompt from "./aiTextPrompt";

export default function CustomOptions() {
  const snap = useSnapshot(state);

  const [colorPicker, setColorPicker] = React.useState(false);
  const [logoPicker, setLogoPicker] = React.useState(false);
  const [aiLogoPicker, setAiLogoPicker] = React.useState(false);
  const [texturePicker, setTexturePicker] = React.useState(false);

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical contained button group"
      variant="contained"
      size="secondary"
    >
      <Button
        sx={{ backgroundColor:"darkblue" }}
        onClick={() => {
          setColorPicker(!colorPicker);
          setLogoPicker(false);
          setAiLogoPicker(false);
          setTexturePicker(false);
          state.isFullTexture = false;
          state.isLogoTexture = true;
        }}
      >
        Change Color
      </Button>

      {colorPicker ? (
        <SketchPicker
          color={snap.color}
          disableAlpha
          onChange={(color) => (state.color = color.hex)}
        />
      ) : null}

      <Button
        sx={{ backgroundColor:"darkblue" }}
        onClick={() => {
          setColorPicker(false);
          setLogoPicker(!logoPicker);
          setAiLogoPicker(false);
          setTexturePicker(false);
          state.isFullTexture = false;
          state.isLogoTexture = true;
        }}
      >
        Change Logo
      </Button>

      {logoPicker ? <FilePicker /> : null}

      <Button
        sx={{ mb: 2, backgroundColor:"darkblue" }}
        onClick={() => {
          setColorPicker(false);
          setLogoPicker(false);
          setAiLogoPicker(!aiLogoPicker);
          setTexturePicker(false);
          state.isFullTexture = false;
          state.isLogoTexture = true;
        }}
      >
        Create AI Generated Logo
      </Button>
      {aiLogoPicker ? <AiTextPrompt /> : null}
      <Button
        sx={{ backgroundColor:"darkblue"}}
        onClick={() => {
          setTexturePicker(!texturePicker);
          setColorPicker(false);
          setLogoPicker(false);
          setAiLogoPicker(false);
          state.isFullTexture = true;
          state.isLogoTexture = false;
        }}
      >
        use logo as texture
      </Button>

      {/* {texturePicker ? <FilePicker /> : null} */}
    </ButtonGroup>
  );
}
