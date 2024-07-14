import React from 'react';
import { Link } from 'react-router-dom';
import './CardMovie.css';

function CardMovie({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="card-movie-link">
      <div className="card-movie">
        <img src={movie.image} alt={movie.title} className="card-movie-image" />
      </div>
    </Link>
  );
}

export default CardMovie;
