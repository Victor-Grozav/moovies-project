
import React from "react";
import './ExtendedMovieCard.css'
import Filter from "./Filter/Filter.jsx"
import MovieCardBig from "./MovieCardBig/MovieCardBig.jsx";

function ExtendedMovieCard({ movies, setMovies }) {
    const onGenreChange = (newGenre) => {
        console.log(newGenre);
        const newMovies = movies.filter((movie) => movie.genre.includes(newGenre));
        setMovies(newMovies);
    }

    return (
        <div className="extended-movie-card-div">
            <Filter movies={movies} onGenreChange={onGenreChange}/>
            {movies.slice(0, 10).map((movie) => (
                <MovieCardBig key={movie.id} movie={movie}/>
            ))}
        </div>
    );
}

export default ExtendedMovieCard;