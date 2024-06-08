
import React from "react";
import "./Filter.css";

function Filter({ movies, onGenreChange }) {
  const genres = [...new Set(movies.flatMap((movie) => movie.genre))];

  return (
    <div className="filter-div">
      <label htmlFor="genres">Choose a genre:</label>
      <select id="genres" name="genres" onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
