import React from "react";
import './PageBody.css'
import Categories from './Categories/Categories.jsx'
import ExtendedMovieCard from "./ExpendedMovieCard/ExtendedMovieCard.jsx";

function PageBody ({movies}){
    return(
        <div className="page-body-div">
        <Categories movies={movies}/>
        <ExtendedMovieCard movies={movies}/>
        
        </div>
    )
}
export default PageBody