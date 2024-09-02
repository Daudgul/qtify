import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Box } from "@mui/material";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AlbumsSongs from "./components/AlbumsSongs";
import Img from "./assets/songs-poster.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<AlbumsSongs />} />
      </Routes>
      <footer>
        <hr
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "gray",
            border: "none",
            boxShadow:
              "0 -4px 6px rgba(128, 128, 128, 0.8), 0 4px 6px rgba(128, 128, 128, 0.8)",
          }}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ py: "30px", backgroundColor: "black" }}
        >
          <img
            src={Img}
            alt="Song Poster"
            style={{ width: "77px", height: "82px", borderRadius: "10px" }}
          />
          <Box width={"160px"} mx={"12px"} lineHeight={"8px"}>
            <h4>Song name</h4>
            <p style={{ fontSize: "12px" }}>Album name</p>
          </Box>
          <AudioPlayer
            // autoPlay
            src="http://example.com/audio.mp3"
            style={{
              backgroundColor: "black", // Set background color to black
              color: "white", // Set text color to white
              padding: "20px",
            }}
            className="custom-audio-player"
            showLoopControl={false} // Remove loop button
            showVolumeControl={false} // Remove volume button
            layout="stacked-reverse"
            // other props here
          />
        </Box>
      </footer>
    </>
  );
}

export default App;

{
  /* <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router> */
}
