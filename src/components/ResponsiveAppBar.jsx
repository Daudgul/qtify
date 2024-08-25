import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logoImg from "../assets/logo.png";
import { Autocomplete, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const options = [
  "JavaScript",
  "React",
  "Material-UI",
  "Node.js",
  "CSS Flexbox",
  "GraphQL",
];

function ResponsiveAppBar() {
  const [value, setValue] = React.useState("");
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            // sx={{
            //   mr: 2,
            //   display: { xs: "none", md: "flex" },
            //   fontFamily: "monospace",
            //   fontWeight: 700,
            //   letterSpacing: ".3rem",
            //   color: "inherit",
            //   textDecoration: "none",
            // }}
          >
            <img src={logoImg} alt="App logo image" />
          </Typography>
          <Box>
            {" "}
            <Autocomplete
              freeSolo
              options={options}
              inputValue={value}
              onInputChange={(event, newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box borderLeft={"1px solid black"}>
                          <SearchIcon />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />{" "}
          </Box>
          <Box>
            <Button variant="contained" color="secondary">
              {" "}
              <span
                style={{
                  color: "#34c94b",
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
