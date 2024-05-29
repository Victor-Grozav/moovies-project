import React from "react";
import Home from "./home-component/Home.jsx";
import Categories from "./caterories-component/Categories.jsx";
import './SecondHeader.css'

function SecondHeader() {
  return (
    <div className="over-view">
      <Home/>
      <Categories/>
    </div>
  );
}
export default SecondHeader;
