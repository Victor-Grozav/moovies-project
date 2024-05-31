import React, { useRef } from "react";
import CardMovie from "./CardMovie/CardMovie";
import './HorizontalScroll.css';

function HorizontalScroll({ movies }) {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -700, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 700, behavior: 'smooth' });
        }
    };

    
    const limitedMovies = movies.slice(0,20);

    return (
        <div className="big-scroll-container">
            <button className="arraws1" onClick={scrollLeft}>&#8592;</button>
            <div className="scroll-container" ref={scrollContainerRef}>
                {limitedMovies.map(movie => (
                    <a href="#" key={movie.id}>
                        <CardMovie movie={movie} />
                    </a>
                ))}
            </div>
            <button className="arraws2" onClick={scrollRight}>&#8594;</button>
        </div>
    );
}

export default HorizontalScroll;
