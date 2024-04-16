import React from 'react';
import styles from "./stylesheets/Search.module.css";

const Search = ({ searchText, setShowSearch, setSearchText }) => {

  const handleSearchClick = (e) => {
    e.stopPropagation(); // Evita que el evento de clic se propague al contenedor
    setShowSearch(true);
    setSearchText("");
  };

  const handleContainerClick = () => {
    setSearchText("");
    setShowSearch(false);
    
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
        <div className={styles.search} onClick={handleSearchClick}>
            Search: {searchText}
        </div>
    </div>
  );
};

export default Search;
