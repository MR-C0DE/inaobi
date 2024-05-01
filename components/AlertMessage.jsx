import React, { useState, useEffect } from "react";
import styles from './stylesheets/AlertMessage.module.css';

const AlertMessage = ({ message = "Message alert..." }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 25 seconds

    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className={styles.container}>
      <div className={styles.sign}>!</div>
      <div className={styles.message}>{message}</div>
    </div>
  ) : null;
};

export default AlertMessage;
