import React from 'react';
import './Filter.module.css';

function Filter({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      className="form-input"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default Filter;