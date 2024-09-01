import { Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function AlbumsSongs() {
  const location = useLocation();
  const { albumData } = location.state || {};
  console.log(albumData, "albumData");
  return <Container maxWidth="xl">AlbumsSongs</Container>;
}

export default AlbumsSongs;
