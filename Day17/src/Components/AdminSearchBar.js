import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './AdminSearchBar.css'; // Import your CSS file for styling

export default function AdminSearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="admin-search-bar">
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text" className="Searchh"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
