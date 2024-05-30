import React from "react";
import './PageBody.css'
import Categories from './Categories/Categories.jsx'
import ExtendedMovieCard from "./ExpendedMovieCard/ExtendedMovieCard.jsx";

function PageBody (){
    return(
        <div className="page-body-div">
        <Categories/>
        <ExtendedMovieCard/>
        
        </div>
    )
}
export default PageBody