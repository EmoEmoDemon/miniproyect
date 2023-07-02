import React from 'react';

const SearchBar = ({ filter, onFilterChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Buscar issues"
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
