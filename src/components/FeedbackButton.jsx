import { Box, Button } from "@mui/material";
import React from "react";

function FeedbackButton({ handleOpen }) {
  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ color: "#34c94b" }}
        onClick={handleOpen}
      >
        {" "}
        <span
          style={{
            // color: "#34c94b",
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {" "}
          Give feedback
        </span>
      </Button>
    </Box>
  );
}

export default FeedbackButton;
