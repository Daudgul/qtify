import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

function ResponsiveAppBar({ allAlbums }) {
  console.log(allAlbums, "dkfdkfndn");

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
          <Link to="/">
            <Logo />
          </Link>
          <Search
            placeholder="Search a song of your choice"
            searchData={allAlbums}
          />
          <Button />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
