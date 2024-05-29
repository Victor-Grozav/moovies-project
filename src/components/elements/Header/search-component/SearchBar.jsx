import React,{useState} from 'react';
import './SearchBar.css';
function SearchBar() {
  return (
    
      <div className='search-container' >
        <input className='search-bar' type="text" placeholder="Search"></input>
        <button className='search-button'>Search</button>
      </div>
    
  );
}
export default SearchBar;
