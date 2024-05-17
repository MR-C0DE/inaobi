import React from 'react'
import AsideForum from './AsideForum'
import Forum from './Forum'
import styles from './stylesheets/ForumContent.module.css';

const ForumContent = () => {
  return (
    <div className={styles.ForumContent}>
        <AsideForum />
        <Forum />
    </div>
  )
}

export default ForumContent