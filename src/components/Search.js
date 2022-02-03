import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className="search-box">
      <input
        placeholder="Search your name..."
        type="text"
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
