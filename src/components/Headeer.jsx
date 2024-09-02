import React from "react";
import headphoneImg from "../assets/headphone.png";
import { Box, Typography } from "@mui/material";

function Headeer() {
  const h1Style = {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "45px",
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      py={3}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={h1Style}>
          100 Thousand Songs, ad-free
        </Typography>
        <Typography variant="h4" component="h1" sx={h1Style}>
          Over thousands podcast episodes
        </Typography>
      </Box>
      <img
        style={{ width: "212px", height: "212px" }}
        src={headphoneImg}
        alt="Headphone logo image"
      />
    </Box>
  );
}

export default Headeer;
