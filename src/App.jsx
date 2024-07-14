import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/elements/Header/Header';
import PageBody from './components/elements/Page-Body/PageBody';
import HorizontalScroll from './components/elements/Scroll/HorizontalScroll';
import Footer from './components/elements/Footer/Footer';
import MovieDetail from './components/elements/MovieDetail/MovieDetail';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
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
        setFilteredMovies(data); 
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredMovies(movies); 
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <div className='background-all'>
        <div className='Application'>
          <Header onSearch={handleSearch} />
        </div>
        <div className='second-header'>
          <HorizontalScroll movies={filteredMovies} categories={categories}/>
          <Routes>
            <Route path="/" element={<PageBody movies={filteredMovies} setMovies={setMovies} categories={categories}/>} />
            <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
