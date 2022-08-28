import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar, Feeds, Channels, Search, VideoDetails} from "./components"

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: "#fff",width: "100vw", height:"100vh"}}>
      <NavBar />
      <Routes>
        <Route path="/" exact elements={<Feeds />} />
        <Route path="/video/:id" element={<VideoDetails/>} />
        <Route path="/channel/:id" element={<Channels />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
    </BrowserRouter>
  );
};

export default App;
