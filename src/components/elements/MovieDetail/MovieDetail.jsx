import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';
import PlayerVideo from './PlayerVideo';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <div className="details">
        <div className="movie-year">Year: {movie.year}</div>
        <div className="movie-genre">Genre: {movie.genre?.join(', ')}</div>
        <div className="movie-rating">Rating: {movie.rating}</div>
      </div>
      <p className="description">{movie.description}</p>
      <div className="trailer-container">
        <PlayerVideo movieTitle={movie.title} />
      </div>
    </div>
  );
}

export default MovieDetail;
