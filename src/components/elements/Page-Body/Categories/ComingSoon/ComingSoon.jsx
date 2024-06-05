import React from 'react';
import './ComingSoon.css';

function shuffleArray(array) {
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ComingSoon({ movies }) {
  const shuffledMovies = shuffleArray([...movies]);
  const comingSoonMovies = shuffledMovies.slice(0, 2); 

  return (
    <div className="coming-soon-div">
      {comingSoonMovies.map(movie => (
        <div key={movie.id} className="coming-movies">
          <img className="coming-img" src={movie.image} alt={movie.title} />
          <div className="coming-description">
            <p className="movie-name"><a href={movie.imdb_link}>{movie.title}</a></p>
            <p className="movie-description">{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComingSoon;
