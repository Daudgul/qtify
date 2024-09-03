import { Box, CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

import Card from "./Card";

import axios from "axios";
import Albums from "./Albums";
import AllTabs from "./Tabs";
import Headeer from "./Headeer";
import Footer from "./Footer";
import Search from "./Search/Search";
function Home({ setAllAlbums }) {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const [topResponse, newResponse, allResponse] = await Promise.all([
        axios.get("https://qtify-backend-labs.crio.do/albums/top"),
        axios.get("https://qtify-backend-labs.crio.do/albums/new"),
        axios.get("https://qtify-backend-labs.crio.do/songs"),
      ]);

      // Update state with both responses
      setTopAlbums(topResponse.data);
      setNewAlbums(newResponse.data);
      setAllAlbums([...topResponse.data, ...newResponse.data]);
      setAllSongs(allResponse.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums(); // Fetch albums when component mounts
  }, []);

  if (loading) {
    return (
      <Box
        height={"60vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <main>
      <Headeer data={topAlbums} />
      {/* <Search placeholder="Search a song of your choice" searchData={topAlbums} /> */}
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Albums title="Top Albums" data={topAlbums} />
        <Albums title="New Albums" data={newAlbums} />
        <hr style={{ width: "100%", border: "0.5px solid #34C94B" }} />
        <AllTabs songs={allSongs} />
        <hr style={{ width: "100%", border: "0.5px solid #34C94B" }} />
      </Box>
      <Footer />
    </main>
  );
}

export default Home;
