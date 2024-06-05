import React from "react";
import './ExtendedMovieCard.css'
import Filter from "./Filter/Filter.jsx"
function ExtendedMovieCard ({ movies, categories }){
    return(
        <div className="extended-movie-card-div">
        <Filter movies={movies} categories={categories}/>
        </div>
    )
}
export default ExtendedMovieCard