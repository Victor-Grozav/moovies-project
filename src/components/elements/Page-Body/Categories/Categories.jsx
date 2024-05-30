import React from "react";
import "./Categories.css";
import TitleControlPanel from "./ControlPanel/TitleControlPanel";
import ControlPanel from './ControlPanel/ControlPanel.jsx'
import ComingSoon from "./ComingSoon/ComingSoon.jsx";
import ComingSoonTitle from "./ComingSoon/ComingSoonTitle.jsx";
function Categories() {
  return (
    <div className="categories-div">
      <div>
        <TitleControlPanel />
        <ControlPanel/>
        <ComingSoonTitle/>
       <ComingSoon/>
       
      </div>
    </div>
  );
}
export default Categories;
