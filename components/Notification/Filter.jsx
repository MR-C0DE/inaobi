import React, { useState } from 'react';
import styles from "./stylesheets/Filter.module.css";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('Toutes les notifications');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.filterTitle}>Filtre</h2>
      <hr className={styles.filterDivider} />
      <ul className={styles.filterList}>
        {['Toutes les notifications', 'Espaces', 'Forum', 'Suivi', 'Questions politiques', 'Demande de suivi', 'Votes'].map((filter, index) => (
          <li 
            key={index} 
            className={`${styles.filterItem} ${selectedFilter === filter ? styles.selected : ''}`} 
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
