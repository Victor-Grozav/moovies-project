import React, { useState, useEffect } from "react";
import './ExtendedMovieCard.css';
import Filter from "./Filter/Filter.jsx";
import MovieCardBig from "./MovieCardBig/MovieCardBig.jsx";

function ExtendedMovieCard({ movies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10; 
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
        setCurrentPage(1); 
    };

   
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

   
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredMovies.length / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="extended-movie-card-div">
            <Filter movies={movies} onGenreChange={onGenreChange} />
            {currentMovies.map((movie) => (
                <MovieCardBig key={movie.id} movie={movie} />
            ))}
            <div className="pagination">
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`page-number ${currentPage === number ? 'active' : ''}`}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ExtendedMovieCard;
