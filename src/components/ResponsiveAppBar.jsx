import * as React from "react";

import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

function ResponsiveAppBar({ allAlbums }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={allAlbums}
      />
      <Button />
    </nav>
  );
}
export default ResponsiveAppBar;
