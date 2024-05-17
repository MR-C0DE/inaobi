import React from 'react'
import Filter from './Filter';
import Notification from './Notification';
import styles from "./stylesheets/NotificationContent.module.css";

const NotificationContent = () => {
  return (
    <div className={styles.NotificationContent}>
        <Filter />
        <Notification />
    </div>
  )
}

export default NotificationContent;