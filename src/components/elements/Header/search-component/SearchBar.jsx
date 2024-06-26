import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className='search-container'>
      <input
        className='search-bar'
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
