// src/theme.js
import { createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B", // Primary color
    },
    secondary: {
      main: "#121212", // Secondary color
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif", // Set Poppins as the default font
  },
});

export default theme;
