import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useSnapshot } from "valtio";
import state from "../store";
function IntroText() {
  const snap = useSnapshot(state);
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "25%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        width: "25%",
      }}
    >
      <Typography
        variant="h1"
        sx={{ mb: 2, fontWeight: "1000", color: "black" }}
      >
        SHIRT <br />
        LAB
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Create your unique and exclusive shirt with our brand-new 3D
        customization tool. <strong>Unleash your imagination</strong> and define
        your own style!
      </Typography>

      <Link to="/customize" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ backgroundColor: 'darkblue' }}>
          Start Customizing
        </Button>
      </Link>
    </Box>
  );
}

export default IntroText;
