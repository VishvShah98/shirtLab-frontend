import Home from "./pages/home";
import Customize from "./pages/customize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
