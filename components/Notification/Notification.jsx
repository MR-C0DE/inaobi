import React from "react";
import styles from "./styleSheets/Notification.module.css";

const notifications = [
  {
    type: "question politique",
    user: "Jean Dupont",
    date: "hier",
    img: "https://source.unsplash.com/1600x900/?church",
    content: "Jean Dupont a posé une question sur la politique actuelle.",
  },
  {
    type: "espace",
    user: "Marie Curie",
    date: "aujourd'hui",
    img: "https://source.unsplash.com/1600x900/?space",
    content: "Marie Curie a partagé une nouvelle découverte dans l'espace.",
  },
  {
    type: "forum",
    user: "Albert Einstein",
    date: "1 jour",
    img: "https://source.unsplash.com/1600x900/?forum",
    content:
      "Albert Einstein a commencé une nouvelle discussion dans le forum.",
  },
  {
    type: "demande de suivi",
    user: "Isaac Newton",
    date: "2 jours",
    img: "https://source.unsplash.com/1600x900/?hotel",
    content: "Isaac Newton vous a envoyé une demande de suivi.",
  },
  {
    type: "vote",
    user: "Nikola Tesla",
    date: "3 jours",
    img: "https://source.unsplash.com/1600x900/?vote",
    content: "Nikola Tesla a voté pour votre réponse.",
  },
  {
    type: "sondage",
    user: "Galileo Galilei",
    date: "4 jours",
    img: "https://source.unsplash.com/1600x900/?test",
    content: "Galileo Galilei a créé un nouveau sondage.",
  },
  {
    type: "question politique",
    user: "Charles Darwin",
    date: "5 jours",
    img: "https://source.unsplash.com/1600x900/?nature",
    content: "Charles Darwin a posé une question sur l'évolution politique.",
  },
  {
    type: "espace",
    user: "Stephen Hawking",
    date: "6 jours",
    img: "https://source.unsplash.com/1600x900/?poutine",
    content: "Stephen Hawking a partagé une nouvelle théorie sur l'univers.",
  },
  {
    type: "forum",
    user: "Marie Antoinette",
    date: "une semaine",
    img: "https://source.unsplash.com/1600x900/?usa",
    content: "Marie Antoinette a participé à une discussion dans le forum.",
  },
  {
    type: "demande de suivi",
    user: "Louis Pasteur",
    date: "un mois",
    img: "https://source.unsplash.com/1600x900/?martin",
    content: "Louis Pasteur vous a envoyé une demande de suivi.",
  },
];

const Notification = () => {
  return (
    <div className={styles.notificationContainer}>
      <h2>Notifications</h2>
      <hr className={styles.filterDivider} />
      {notifications.map((notification, index) => (
        <div key={index} className={styles.notificationCard}>
          <img
            src={notification.img}
            alt="profile"
            className={styles.profileImage}
          />
          <div className={styles.notificationContent}>
            <div className={styles.notificationBeginer}>
              <div className={styles.notificationHeader}>
                <p className={styles.notificationType}>{notification.type}</p>
                <p className={styles.notificationUser}>{notification.user}</p>
              </div>
              <p className={styles.notificationDate}>{notification.date}</p>
            </div>

            <p className={styles.notificationText}>{notification.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
