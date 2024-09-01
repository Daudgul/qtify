import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "./Card";
import CardSwiper from "./Swiper";

function Albums({ title, data }) {
  const [show, setShow] = useState(false);
  const style = {
    fontSize: "20px",
    fontWeight: "600",
    lineHeght: "30px",
    textTransform: "capitalize",
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "10px",
        }}
      >
        <Typography sx={style}>{title}</Typography>
        <Button sx={style} onClick={() => setShow(!show)}>
          {show ? "Collapse" : "Show all"}
        </Button>
      </Box>
      {!show ? (
        <CardSwiper data={data} album />
      ) : (
        <Grid
          container
          //   spacing={"24px"}
          rowSpacing={"40px"} // Vertical gap between rows
          columnSpacing={7.4}
          justifyContent="flex-start" // Adjust alignment
          alignItems="center"
        >
          {data?.map((item, index) => (
            <Grid item key={index} xs="auto">
              <Card
                key={item.id}
                imgPath={item.image}
                name={item.title}
                chipName={`${item.follows} Follows`}
                album
                data={{ ...item }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Albums;
