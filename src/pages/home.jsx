import { Box } from "@mui/material";
import IntroText from "../components/introText";
import CanvasModel from "../canvas";
import state from '../store';

const Home = () => {
  state.targetPosition= [-0.4, 0, 2];
  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <CanvasModel />
        <IntroText />
      </Box>
    </>
  );
};

export default Home;
