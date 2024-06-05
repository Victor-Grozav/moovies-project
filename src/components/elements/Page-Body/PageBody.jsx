import React from "react";
import './PageBody.css'
import Categories from './Categories/Categories.jsx'
import ExtendedMovieCard from "./ExpendedMovieCard/ExtendedMovieCard.jsx";


function PageBody ({ movies, categories }){
    return(
        <div className="page-body-div">
        <Categories movies={movies} categories={categories}/>
        <ExtendedMovieCard movies={movies} categories={categories}/>
        
        </div>
    )
}
export default PageBody