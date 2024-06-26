import React from "react";
import SearchBar from "./search-component/SearchBar";
import Logo from "./Logo-component/Logo";
import "./header.modules.css";

function Header({ onSearch }) {
  return (
    <header className="header-component">
      <SearchBar onSearch={onSearch} />
      <Logo />
    </header>
  );
}

export default Header;
