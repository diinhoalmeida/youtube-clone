import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./input.css";
import VideoDetail from "./components/VideoDetail/videoDetail";
import Home from "./pages/Home/home";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#0A264A" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
