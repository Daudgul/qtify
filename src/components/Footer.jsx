import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Footer() {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        py={3}
        gap={3}
      >
        <Typography
          variant="h2"
          fontSize={"50px"}
          fontWeight={"600"}
          lineHeight={"75px"}
          component={"h1"}
          py={1}
        >
          FAQs
        </Typography>
        <Accordion
          defaultExpanded
          sx={{
            border: "1px solid white",
            overflow: "hidden",
            width: "1145px",
          }}
          style={{ borderRadius: "10px" }}
        >
          <AccordionSummary
            sx={{
              backgroundColor: "#121212",
              color: "#ffff",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "500",
              px: 4,
              py: "10px",
            }}
            expandIcon={
              <ExpandMoreIcon style={{ fontSize: "40px", color: "34C94B" }} />
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Is QTify free to use?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "#121212",
              fontSize: "18px",
              lineHeight: "27px",
              fontWeight: "500",
              px: 4,
              py: "20px",
            }}
          >
            Yes! It is 100% free, and has 0% ads!
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "1px solid white",
            overflow: "hidden",
            width: "1145px",
          }}
          style={{ borderRadius: "10px" }}
        >
          <AccordionSummary
            sx={{
              backgroundColor: "#121212",
              color: "#ffff",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "500",
              px: 4,
              py: "10px",
            }}
            expandIcon={
              <ExpandMoreIcon style={{ fontSize: "40px", color: "34C94B" }} />
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Can I download and listen to songs offline?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "#121212",
              fontSize: "18px",
              lineHeight: "27px",
              fontWeight: "500",
              px: 4,
              py: "20px",
            }}
          >
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Footer;
