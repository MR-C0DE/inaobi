import React from "react";
import styles from "./stylesheets/Forum.module.css";

const Forum = () => {
  // Mock data for topics
  const topics = [
    {
      id: 1,
      profilePhoto: "https://source.unsplash.com/1600x900/?migrate",
      subject: "Discussion sur l'immigration",
      username: "Utilisateur1",
      date: "16 mai 2024",
      category: "Immigrations",
      views: 100,
      reactions: 20,
      description:
        "Une discussion sur les défis et les opportunités liés à l'immigration en République Démocratique du Congo.",
    },
    {
      id: 2,
      profilePhoto: "https://source.unsplash.com/1600x900/?politique",
      subject: "La situation politique actuelle",
      username: "Utilisateur2",
      date: "17 mai 2024",
      category: "Politique nationale",
      views: 150,
      reactions: 25,
      description:
        "Une analyse de la situation politique actuelle et des perspectives pour l'avenir politique du pays.",
    },
    {
      id: 3,
      profilePhoto: "https://source.unsplash.com/1600x900/?dog",
      subject: "Problèmes de santé publique",
      username: "Utilisateur3",
      date: "18 mai 2024",
      category: "Santé publique et accès aux soins de santé",
      views: 80,
      reactions: 15,
      description:
        "Discussion sur les défis et les solutions concernant les problèmes de santé publique et l'accès aux soins de santé.",
    },
    {
      id: 4,
      profilePhoto: "https://source.unsplash.com/1600x900/?trump",
      subject: "Développement économique",
      username: "Utilisateur4",
      date: "19 mai 2024",
      category: "Économie et développement",
      views: 120,
      reactions: 30,
      description:
        "Une exploration des opportunités de développement économique et des défis à surmonter pour la prospérité économique du pays.",
    },
    {
      id: 5,
      profilePhoto: "https://source.unsplash.com/1600x900/?women",
      subject: "Protection de l'environnement",
      username: "Utilisateur5",
      date: "20 mai 2024",
      category: "Environnement et conservation",
      views: 90,
      reactions: 18,
      description:
        "Discussion sur les efforts de protection de l'environnement et de conservation des ressources naturelles en République Démocratique du Congo.",
    },
    {
      id: 6,
      profilePhoto: "https://source.unsplash.com/1600x900/?economie",
      subject: "Éducation pour tous",
      username: "Utilisateur6",
      date: "21 mai 2024",
      category: "Éducation et système scolaire",
      views: 110,
      reactions: 22,
      description:
        "Une réflexion sur les défis et les opportunités pour garantir une éducation de qualité et accessible à tous les citoyens congolais.",
    },
    {
      id: 7,
      profilePhoto: "https://source.unsplash.com/1600x900/?environnement",
      subject: "Diversité culturelle et cohésion sociale",
      username: "Utilisateur7",
      date: "22 mai 2024",
      category: "Diversité culturelle et cohésion sociale",
      views: 95,
      reactions: 19,
      description:
        "Discussion sur l'importance de la diversité culturelle et les moyens de promouvoir la cohésion sociale dans une société diversifiée comme la nôtre.",
    },
  ];

  return (
    <div className={styles.forum}>
      <div className={styles.topicList}>
        {topics.map((topic) => (
          <div key={topic.id} className={styles.topic}>
            <div className={styles.topicHead}>
              <img
                src={topic.profilePhoto}
                alt="Profile"
                className={styles.profilePhoto}
              />
              <div className={styles.topicInfoHead} >
                <h2 className={styles.subject}>{topic.subject}</h2>
                <div className={styles.topicHeadDetais}>
                  <p className={styles.username}>{topic.username}</p>
                  <p className={styles.date}> | {topic.date} | </p>
                  <p className={styles.category}>{topic.category}</p>
                </div>
              </div>
            </div>

            <div className={styles.topicInfo}>
              <p className={styles.description}>{topic.description}</p>

              <div>
                <p className={styles.views}>{topic.views} vues</p>
                <p className={styles.reactions}>{topic.reactions} réactions</p>

                <p className={styles.shareButton}>Partager</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
