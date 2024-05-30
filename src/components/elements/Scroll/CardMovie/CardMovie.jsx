import React from "react";
import './CardMovie.css'
import { movies } from "./JsonServer.js";

function CardMovie() {
    return (
        <div className="card-movie-container">
            {movies.map(movie => (
                <div key={movie.id}>
                    <img className="card-movie" src={movie.movie_banner} alt={movie.title} />
                </div>
            ))}
        </div>
    );
}

export default CardMovie;
