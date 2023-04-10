import React from 'react';

function SortBar({ sortCriteria, onSortChange }) {
  return (
    <div className="sort-bar">
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={sortCriteria} onChange={onSortChange}>
        <option value="dateDesc">Newest first</option>
        <option value="dateAsc">Oldest first</option>
        <option value="priceDesc">Highest price</option>
        <option value="priceAsc">Lowest price</option>
      </select>
    </div>
  );
}

export default SortBar;
