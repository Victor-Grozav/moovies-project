import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCardBig.css';

function MovieCardBig({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card-big">
        <div className="movie-card-left">
          <img src={movie.image} alt={movie.title} className="movie-card-image" />
        </div>
        <div className="movie-card-right">
          <div className="movie-card-title">
            <h3>{movie.title}</h3>
            <span className="movie-year">{movie.year}</span>
          </div>
          <div className="movie-card-details">
            <p className="movie-genre">{movie.genre?.join(', ')}</p>
            <p className="movie-rating">Rating: {movie.rating}</p>
          </div>
          <p className="movie-description">{movie.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCardBig;

