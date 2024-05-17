import React from 'react';
import styles from './stylesheets/AsideForum.module.css';

const AsideForum = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Créer un sujet</button>

      <div className={styles.categoriesContainer}>
        <h2 className={styles.categoriesTitle}>Categories</h2>
        <ul className={styles.categoryList}>
          <li>Immigrations</li>
          <li>Politique nationale</li>
          <li>Éducation et système scolaire</li>
          <li>Économie et développement</li>
          <li>Droits de l'homme</li>
          <li>Environnement et conservation</li>
          <li>Santé publique et accès aux soins de santé</li>
          <li>Culture et patrimoine</li>
          <li>Sécurité et justice</li>
          <li>Infrastructures et développement urbain</li>
          <li>Technologie et innovation</li>
          <li>Commerce et industrie</li>
          <li>Agriculture et sécurité alimentaire</li>
          <li>Diversité culturelle et cohésion sociale</li>
          <li>Médias et liberté d'expression</li>
          <li>Migration internationale</li>
          <li>Gouvernance locale et participation citoyenne</li>
        </ul>
      </div>
    </div>
  );
};

export default AsideForum;
