import React from "react";
import { SearchInterface } from "../interface/interface";

const Search: React.FC<SearchInterface> = ({ countryFilter, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        name="countryFilter"
        value={countryFilter}
        placeholder="Start typing to filter name"
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
