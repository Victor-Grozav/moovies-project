import React from "react";
import "./ControlPanel.css";

function ControlPanel({ movies }) {
 
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];

  return (
    <div className="links-div">
      <div className="first-column">
        {genres.slice(0, Math.ceil(genres.length / 2)).map((genre, index) => (
          <a key={index} href="#"><p>{genre}</p></a>
        ))}
      </div>
      <div className="second-column">
        {genres.slice(Math.ceil(genres.length / 2)).map((genre, index) => (
          <a key={index} href="#"><p>{genre}</p></a>
        ))}
      </div>
    </div>
  );
}

export default ControlPanel;
