import React, { useState } from "react";
import styles from "./styleSheets/Poster.module.css";

const Poster = () => {
  const [imageURL, setImageURL] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const [category, setCategory] = useState("Publication");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      const fileSizeInBytes = file.size;
      const fileSizeInKB = fileSizeInBytes / 1024;
      setImageSize(`${fileSizeInKB.toFixed(2)} KB`);
    }
  };

  const handleTagInput = (event) => {
    setTagInput(event.target.value);
  };

  const addTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const removeImage = () => {
    setImageURL("");
    setFileInput(null);
  };

  const handleButtonClick = () => {
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mediaSection}>
        <h2>Média</h2>
        <p>Ajoutez une image ou une photo à votre publication</p>

        {imageURL && (
          <div className={styles.imageContainer}>
            <div className={styles.imageDetails}>
              <img src={imageURL} alt="Image" />
              <p>{`Taille: ${imageSize}`}</p>
            </div>

            <div >
              <button onClick={removeImage} className={styles.detailsButton}>
                Supprimer
              </button>
            </div>
          </div>
        )}

        {!imageURL && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              ref={(input) => setFileInput(input)}
            />
            <button onClick={handleButtonClick} className={styles.addImageBtn}>
              Ajouter une image
            </button>
          </div>
        )}
      </div>

      <div className={styles.detailSection}>
        <h2>Ajouter un détail à votre publication</h2>
        <div>
        
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            className={styles.textareaField}
          ></textarea>
        </div>
        </div>
        <div className={styles.detailSection}>
          <h2>Tags</h2>
          <div className={styles.tagsContainer}>
            <input
              type="text"
              value={tagInput}
              onChange={handleTagInput}
              placeholder="Ajouter des tags..."
              className={styles.inputField}
            />
            <button onClick={addTag} className={styles.addTagBtn}>
              Ajouter un tag
            </button>
          </div>
          <ul className={styles.tagList}>
            {tags.map((tag, index) => (
              <li key={index} className={styles.tag}>
                <span>#{tag}</span> <button onClick={() => removeTag(index)}>X</button>
              </li>
            ))}
          </ul>
        
          <h2>Catégorie <span>[{category}]</span></h2>
          <div className={styles.categoriesContainer}>
            <button
              onClick={() => handleCategorySelection("Publication")}
              className={styles.chooseCategorie}
            >
              Publication
            </button>
            <button
              onClick={() => handleCategorySelection("Sondage")}
              className={styles.chooseCategorie}
            >
              Sondage
            </button>
            <button
              onClick={() => handleCategorySelection("Question politique")}
              className={styles.chooseCategorie}
            >
              Question politique
            </button>
          </div>
        </div>
      

      <div className={styles.buttonsContainer}>
        <button>Annuler</button>
        <button>Publier</button>
      </div>
    </div>
  );
};

export default Poster;
