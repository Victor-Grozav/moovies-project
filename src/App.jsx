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
        'x-rapidapi-key': 'a9778c4f45msh4cefbe02c0ef517p108a2bjsn6e923d26be93',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
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

  console.log(movies);

  return (
    <div className='background-all'>
      <div className='Application'>
        <Header movies={movies} categories={categories}/>
      </div>
      <div className='second-header'>
        <HorizontalScroll movies={movies} categories={categories}/>
        <PageBody movies={movies} setMovies={setMovies} categories={categories}/>
        
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
