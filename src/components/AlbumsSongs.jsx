import { Box, Button, Container, IconButton, Pagination } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Img from "../assets/songs-poster.png";
import Shuffle from "../assets/shuffle.png";
import Add from "../assets/add.png";

const itemsPerPage = 10;

function AlbumsSongs() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigation = useNavigate();
  const { albumData } = location.state || {};
  console.log(albumData, "albumData");
  const pStyle = {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = albumData.songs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: "34px" }}>
        <IconButton
          aria-label="back"
          sx={{ border: "1px solid #fff" }}
          onClick={() => navigation(-1)}
          // size="large"
        >
          <ArrowBackIcon fontSize="inherit" sx={{ color: "#ffff" }} />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", lg: "start" },
            alignItems: { xs: "center", lg: "start" },
            gap: "60px",
            my: "26px",
          }}
        >
          <img
            src={albumData.image}
            alt="Album banner"
            style={{
              width: "288px",
              height: "329px",
              borderRadius: "20px",
            }}
          />
          <Box
            // maxWidth={"60%"}
            sx={{
              maxWidth: { xs: "100%", lg: "60%" },
            }}
            fontSize={"20px"}
            fontWeight={"400"}
            textTransform={"math-auto"}
          >
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "64px",
              }}
            >
              {albumData.title}
            </h1>
            <p>{albumData.description}</p>
            <p>
              <span>{albumData.songs.length} Songs</span>
              <span style={{ fontSize: "45px", lineHeight: "8px" }}> . </span>
              <span>3 hr 45 min </span>{" "}
              <span style={{ fontSize: "45px", lineHeight: "8px" }}> . </span>
              <span>{albumData.follows} Follows</span>
            </p>
            <Box>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  mr: "20px",
                  borderRadius: "12px",
                  color: "white",
                  padding: "10px 26px",
                }}
              >
                <img
                  src={Shuffle}
                  style={{
                    width: "26px",
                    height: "26px",
                    marginRight: "10px",
                  }}
                  alt="Shuffle Icon"
                />
                Shuffle
              </Button>
              <Button
                sx={{
                  border: "1px solid green",
                  textTransform: "capitalize",
                  borderRadius: "12px",
                  padding: "10px 30px",
                }}
              >
                <img
                  src={Add}
                  style={{ width: "33px", height: "26px", marginRight: "10px" }}
                  alt="Add album icon"
                />
                Add to library
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <Pagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // Default page numbers color
            },
            "& .Mui-selected": {
              color: "white", // Selected page number color
              backgroundColor: "#34c94b", // Optional: set the background color of the selected page number
            },
          }}
          count={Math.ceil(albumData.songs.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "20%" }}>
            <p style={pStyle}>Title</p>
          </div>
          <p style={pStyle}>Artist</p>
          <p style={pStyle}>Duration</p>
        </Box>
        {paginatedData.map((item) => (
          <AlbumCard
            key={item.id}
            img={item.image}
            name={item.title}
            singer={item.artists[0]}
            time={item.durationInMs}
          />
        ))}
      </Box>
    </Container>
  );
}

export default AlbumsSongs;

function AlbumCard({ img, name, singer, time }) {
  const pStyle = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "21px",
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "14px",
        marginBottom: "14px",
        borderBottom: "1px solid #fff",
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={"14px"} width={"20%"}>
        <img
          src={img}
          alt="Song Poster"
          style={{ width: "59px", height: "64px", borderRadius: "4px" }}
        />
        <p style={pStyle}>{name}</p>
      </Box>
      <p style={pStyle}>{singer}</p>
      <p style={pStyle}>{time}</p>
    </Box>
  );
}
