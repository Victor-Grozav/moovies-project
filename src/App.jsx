import React, { useEffect, useState } from 'react';
import Header from './components/elements/Header/Header';
import PageBody from './components/elements/Page-Body/PageBody';
import HorizontalScroll from './components/elements/Scroll/HorizontalScroll';
import Footer from './components/elements/Footer/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '60ab68b350msha9fe21cfff0059bp126ccdjsn1fc8c975a343',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='background-all'>
      <div className='Application'>
        <Header movies={movies} categories={categories}/>
      </div>
      <div className='second-header'>
        <HorizontalScroll movies={movies} categories={categories}/>
        <PageBody movies={movies} categories={categories}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
