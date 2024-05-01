import React, { useState } from 'react';
import styles from './stylesheets/Poster.module.css'; // Import des styles CSS

const Poster = ({ userProfile }) => {
    const [text, setText] = useState('');
    const [mediaPreview, setMediaPreview] = useState('');
    const [media, setMedia] = useState(null);
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);
    const [visibility, setVisibility] = useState('public');
  
    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    const handleMediaChange = (e) => {
      const file = e.target.files[0];
      setMedia(file);
      setMediaPreview(URL.createObjectURL(file)); // Afficher un aperçu de l'image sélectionnée
    };
  
    const handleRemoveMedia = () => {
      setMedia(null);
      setMediaPreview('');
    };
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleTagsChange = (e) => {
      const inputTags = e.target.value.split(',');
      setTags(inputTags.map(tag => tag.trim()));
    };
  
    const handleVisibilityChange = (e) => {
      setVisibility(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Envoyer les données de la publication au serveur
      const postData = {
        text,
        media,
        category,
        tags,
        visibility
      };
      console.log(postData);
      // Réinitialiser le formulaire après l'envoi
      setText('');
      setMedia(null);
      setMediaPreview('');
      setCategory('');
      setTags([]);
      setVisibility('public');
      // Afficher un message de confirmation ou rediriger l'utilisateur
    };
  
    return (
      <div className={styles.publishContainer}>
        {userProfile && (
          <div className={styles.userProfile}>
            <img src={userProfile.avatar} alt="User avatar" className={styles.avatar} />
            <p className={styles.userName}>{userProfile.name}</p>
          </div>
        )}
        <h2>Nouvelle Publication</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            placeholder="Que voulez-vous partager ?"
            value={text}
            onChange={handleTextChange}
            required
            className={styles.textArea}
          />
          {mediaPreview && (
            <div className={styles.mediaContainer}>
              <img src={mediaPreview} alt="Media preview" className={styles.mediaPreview} />
              <button type="button" onClick={handleRemoveMedia} className={styles.removeButton}>
                Retirer
              </button>
            </div>
          )}
          <label htmlFor="media" className={styles.mediaLabel}>
            <span>Ajouter une photo ou une vidéo</span>
            <input
              type="file"
              accept="image/*, video/*"
              id="media"
              onChange={handleMediaChange}
              className={styles.fileInput}
            />
          </label>
          <select value={category} onChange={handleCategoryChange} required className={styles.select}>
            <option value="">Sélectionnez une catégorie</option>
            <option value="categorie1">Catégorie 1</option>
            <option value="categorie2">Catégorie 2</option>
            <option value="categorie3">Catégorie 3</option>
          </select>
          <input
            type="text"
            placeholder="Ajoutez des tags (séparés par des virgules)"
            value={tags}
            onChange={handleTagsChange}
            className={styles.input}
          />
          <select value={visibility} onChange={handleVisibilityChange} required className={styles.select}>
            <option value="public">Public</option>
            <option value="private">Privé</option>
          </select>
          <button type="submit" className={styles.submitButton}>Publier</button>
        </form>
      </div>
    );
  };

export default Poster;
