import React from "react";
import "./ControlPanel.css";

function ControlPanel() {
  return (
    <div className="links-div">
      <div className="first-column">
        <a href="#"><p>All films</p></a>
        <a href="#"><p>Biographie</p></a>
        <a href="#"><p>Action</p></a>
        <a href="#"><p>Western</p></a>
        <a href="#"><p>Military</p></a>
        <a href="#"><p>Detectives</p></a>
        <a href="#"><p>For Kids</p></a>
        <a href="#"><p>Documentary</p></a>
        <a href="#"><p>Dramas</p></a>
        <a href="#"><p>Historical</p></a>
        <a href="#"><p>Comedy</p></a>
        <a href="#"><p>Crime</p></a>
      </div>
      <div className="second-column">
        <a href="#"><p>Melodrama</p></a>
        <a href="#"><p>Cartoons</p></a>
        <a href="#"><p>Musicals</p></a>
        <a href="#"><p>Adventure</p></a>
        <a href="#"><p>Family</p></a>
        <a href="#"><p>Sports</p></a>
        <a href="#"><p>Thrillers</p></a>
        <a href="#"><p>Documentary</p></a>
        <a href="#"><p>Horror</p></a>
        <a href="#"><p>Fantastic</p></a>
        <a href="#"><p>Fantasy</p></a>
      </div>
    </div>
  );
}

export default ControlPanel;
