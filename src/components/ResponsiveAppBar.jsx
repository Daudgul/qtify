import * as React from "react";

import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import { Button } from "@mui/material";
import CustomModal from "./CustomModal";

function ResponsiveAppBar({ allAlbums }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a song of your choice"
          searchData={allAlbums}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            color: "#34c94b",
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: "18px",
          }}
          onClick={handleOpen}
        >
          Give Feedback
        </Button>
      </nav>
      <CustomModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}
export default ResponsiveAppBar;
