import { useState } from "react";
import Search from "../Search/Search";
import NumResults from "../NumResults/NumResults";
import Logo from "../Logo/Logo";

/* eslint-disable react/prop-types */
function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

export default Navbar;
