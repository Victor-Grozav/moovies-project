import React from "react";
import "./Filter.css";

function Filter({ movies }) {
   
    const genres = [...new Set(movies.flatMap(movie => movie.genre))];
  
    return (
      <div>
        <p>Filter</p>
        <label htmlFor="genres">Choose a genre:</label>
        <select id="genres" name="genres">
          {genres.map((genre, index) => (
            <option key={index} value={genre.toLowerCase()}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    );
  }

export default Filter;
