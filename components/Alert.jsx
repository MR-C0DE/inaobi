

import React, { useState } from 'react';
import styles from './stylesheets/Alert.module.css';

const SimpleAlert = ({ title, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleConfirm = () => {
    setIsVisible(false);
    // Ajoutez ici la logique pour confirmer l'action si nécessaire
  };

  return (
    isVisible && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <div className={styles.alert}>
            <h4 className={styles.heading}>{title}</h4>
            <p className={styles.message}>{message}</p>
            <button type="button" className={styles.btnPrimary} onClick={handleConfirm}>OK</button>
          </div>
        </div>
      </div>
    )
  );
};

const ConfirmationAlert = ({ title, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleConfirm = () => {
    setIsVisible(false);
    // Ajoutez ici la logique pour confirmer l'action si nécessaire
  };

  const handleCancel = () => {
    setIsVisible(false);
    // Ajoutez ici la logique pour annuler l'action si nécessaire
  };

  return (
    isVisible && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <div className={styles.alert}>
            <h4 className={styles.heading}>{title}</h4>
            <p className={styles.message}>{message}</p>
            <button type="button" className={styles.btnPrimary} onClick={handleConfirm}>OK</button>
            <button type="button" className={styles.btnSecondary} onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  );
};

const PromptAlert = ({ title, message }) => {
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre la valeur si nécessaire
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
    // Ajoutez ici la logique pour annuler l'action si nécessaire
  };

  return (
    isVisible && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <div className={styles.alert}>
            <h4 className={styles.heading}>{title}</h4>
            <p className={styles.message}>{message}</p>
            <form onSubmit={handleSubmit}>
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <button type="submit" className={styles.btnPrimary}>OK</button>
              <button type="button" className={styles.btnSecondary} onClick={handleCancel}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

const Alert = ({ type = "simple", title, ...props }) => {
  switch (type) {
    case 'simple':
      return <SimpleAlert title={title} {...props} />;
    case 'confirmation':
      return <ConfirmationAlert title={title} {...props} />;
    case 'prompt':
      return <PromptAlert title={title} {...props} />;
    default:
      return null;
  }
};

export default Alert;
