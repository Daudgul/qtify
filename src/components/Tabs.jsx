import React, { useState } from "react";
import Card from "./Card";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import CardSwiper from "./Swiper";

function AllTabs({ songs = [] }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <TabContent songs={songs} />;
      case 1:
        return (
          <TabContent
            songs={songs.filter((item) => item.genre.key === "rock")}
          />
        );
      case 2:
        return (
          <TabContent
            songs={songs.filter((item) => item.genre.key === "pop")}
          />
        );
      case 3:
        return (
          <TabContent
            songs={songs.filter((item) => item.genre.key === "jazz")}
          />
        );
      case 4:
        return (
          <TabContent
            songs={songs.filter((item) => item.genre.key === "blues")}
          />
        );
      default:
        return <TabContent songs={songs} />;
    }
  };
  const styleTab = {
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#ffff",
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          mb: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            lineHeght: "30px",
            textTransform: "capitalize",
          }}
        >
          songs
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="music genre tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" style={styleTab} />
          <Tab label="Rock" style={styleTab} />
          <Tab label="Pop" style={styleTab} />
          <Tab label="Jazz" style={styleTab} />
          <Tab label="Blues" style={styleTab} />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>{renderTabContent()}</Box>
    </Container>
  );
}

export default AllTabs;

function TabContent({ songs = [] }) {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={"40px"}>
      <CardSwiper data={songs} />
    </Box>
  );
}
