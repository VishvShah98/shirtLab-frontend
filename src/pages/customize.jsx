import CanvasModel from "../canvas";
import CustomOptions from "../components/customOptions";
import state from "../store";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useSnapshot } from "valtio";
export default function Customize() {
  state.targetPosition = [0, 0, 1.95];
  const snap = useSnapshot(state);
  return (
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            //backgroundColor: snap.color,
            backgroundColor:'darkblue',
            position: "absolute",
            right: "1%",
            zIndex:1,
            color:'white'
          }}
        >
          Go Back
        </Button>
      </Link>

      <CanvasModel />
      <Box
        sx={{position: "absolute", left: "1%", zIndex:1 }}
      >
        <CustomOptions />
      </Box>
    </Box>
  );
}
