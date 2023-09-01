import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css"; // Import the CSS module

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.characterDetails}>
        <h2 className={styles.characterName}>{character?.name}</h2>
        <h2 className={styles.characterInfo}>{character?.status}</h2>
        <h2 className={styles.characterInfo}>{character?.species}</h2>
        <h2 className={styles.characterInfo}>{character?.gender}</h2>
        <h2 className={styles.characterInfo}>{character?.origin?.name}</h2>
      </div>
      <img
        className={styles.characterImage}
        src={character?.image}
        alt={character?.name}
      />
    </div>
  );
};

export default Detail;