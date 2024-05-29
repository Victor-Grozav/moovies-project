import React from "react";
import SearchBar from "./search-component/SearchBar";
import Logo from "./Logo-component/Logo";
import "./header.modules.css";

function Header() {
  return (
    <header className="header-component">
      <SearchBar />
      <Logo />
    </header>
  );
}
export default Header;
