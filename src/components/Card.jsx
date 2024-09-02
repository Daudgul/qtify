import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Card({
  imgPath = "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  name = "Trending songs",
  chipName = "100 Follows",
  album = false,
  data,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (album) {
      navigate("/album", { state: { albumData: data } });
    }
  };
  return (
    <Box
      width={"159px"}
      height={"232px"}
      overflow={"hidden"}
      sx={{ cursor: album ? "pointer" : "text" }}
      onClick={handleClick}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          height: "205px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "159px", height: "170px", objectFit: "cover" }}
          src={imgPath}
          alt="Album poster"
        />
        <Box sx={{ backgroundColor: "#ffff", height: "35px", padding: "5px" }}>
          <Chip
            sx={{
              borderRadius: "10px",
              height: "23px",
              width: "71px",
              "& .MuiChip-label": {
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "15",
                padding: "0",
              },
            }}
            color="secondary"
            label={chipName}
          />
        </Box>
      </Box>
      <Typography
        variant="p"
        component={"h2"}
        fontSize={"14px"}
        fontWeight={"400"}
        lineHeight={"21px"}
        paddingTop={"5px"}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default Card;
