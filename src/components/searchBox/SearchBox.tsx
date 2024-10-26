import React from 'react'
import './searchBoxStyles.css';

function SearchBox({ className, placeholder, onChangeHandler }:any) {
  return (
    <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
  )
}

export default SearchBox