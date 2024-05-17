import React from 'react'
import styles from './stylesheets/HomeAside.module.css';
const HomeAside = () => {
  return (
    <div>
        <button>Creer une espace</button>

        <div className={styles.categoriesContainer}>
        <h2 className={styles.categoriesTitle}>Categories</h2>
        <ul className={styles.categoryList}>
          <li>Immigrations</li>
          <li>Politique</li>
          <li>Éducation</li>
          <li>Économie</li>
          <li>Environnement</li>
          <li>Culture</li>

        </ul>
      </div>
    </div>
  )
}

export default HomeAside