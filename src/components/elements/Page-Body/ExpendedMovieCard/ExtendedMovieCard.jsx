import React, { useState, useEffect } from "react";
import './ExtendedMovieCard.css';
import Filter from "./Filter/Filter.jsx";
import MovieCardBig from "./MovieCardBig/MovieCardBig.jsx";

function ExtendedMovieCard({ movies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies); 

    
    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    const onGenreChange = (newGenre) => {
        if (newGenre === "") {
            setFilteredMovies(movies);
        } else {
            const newMovies = movies.filter((movie) => movie.genre.includes(newGenre));
            setFilteredMovies(newMovies);
        }
    };

    return (
        <div className="extended-movie-card-div">
            <Filter movies={movies} onGenreChange={onGenreChange} />
            {filteredMovies.slice(0, 10).map((movie) => (
                <MovieCardBig key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default ExtendedMovieCard;
