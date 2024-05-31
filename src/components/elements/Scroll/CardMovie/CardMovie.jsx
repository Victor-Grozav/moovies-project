
import React from 'react';
import './CardMovie.css';

function CardMovie({ movie }) {
  return (
    <div className="card-movie">
      <img src={movie.image} alt={movie.title} className="movie-poster" />
      
    </div>
  );
}

export default CardMovie;
