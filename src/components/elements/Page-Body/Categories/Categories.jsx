import React from "react";
import "./Categories.css";
import TitleControlPanel from "./ControlPanel/TitleControlPanel";
import ControlPanel from './ControlPanel/ControlPanel.jsx'
import ComingSoon from "./ComingSoon/ComingSoon.jsx";
import ComingSoonTitle from "./ComingSoon/ComingSoonTitle.jsx";
function Categories({movies}) {
  return (
    <div className="categories-div">
      <div>
        <TitleControlPanel movies={movies} />
        <ControlPanel movies={movies}/>
        <ComingSoonTitle movies={movies}/>
       <ComingSoon movies={movies}/>
       
      </div>
    </div>
  );
}
export default Categories;
