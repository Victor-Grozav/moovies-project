import React from "react";
import "./ComingSoon.css";

function ComingSoon({ movies }) {
  const comingSoonMovies = movies.slice(24, 26);

  return (
    <div className="coming-soon-div">
      {comingSoonMovies.map((movie, index) => (
        <div key={index} className="coming-movies">
          <img className="coming-img" src={movie.image} alt={movie.title} />
          <div className="coming-description">
            <p className="movie-name"><a href="#">{movie.title} {movie.year}</a></p>
            <p className="movie-description">{movie.description || 'No description available.'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComingSoon;