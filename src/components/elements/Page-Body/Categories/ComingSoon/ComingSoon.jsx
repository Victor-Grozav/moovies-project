import React from "react";
import "./ComingSoon.css";
function ComingSoon() {
  return (
    <div className="coming-soon-div">
       
      <div className="coming-movies1">
        <img src="https://kinogo.biz/uploads/mini/minitrailer/5/a87e816ba7774ef23f7e6d35dad11b.webp" alt="" />
        <div className="coming-description1">
        <p>Deadpool and Wolverine 2024</p>
        <p>The continuation of the story about a fearless, but terribly talkative superhero, accustomed to fighting bad guys. Being an eccentric person, Deadpool regularly gets into crazy...</p>
        </div>
      </div>
      <div  className="coming-movies2">
        <img src="https://kinogo.biz/uploads/mini/minitrailer/0/feb58d25751326df3039a32d94b356.webp" alt="" />
        <div className="coming-description2">
        <p>Raven 2024</p>
        <p>Just yesterday, Eric Draven was a promising musician who was admired by everyone around him. It seemed that the guy had a great future ahead of him, and one day he would definitely gain worldwide...</p>
        </div>
      </div>
    </div>
  );
}
export default ComingSoon;
