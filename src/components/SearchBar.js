import React, { useState } from 'react';
import "../css/SearchBar.css"

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(searchQuery);
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or production year..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Search by
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button" onClick={() => props.onSearchOption('title')}>Title</button>
            <button className="dropdown-item" type="button" onClick={() => props.onSearchOption('productionYear')}>Production Year</button>
          </div>
        </div>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
