import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../CharacterCss/Characters.module.css";
import CharacterDetails from "./CharacterDetails";
import Botones from "../Boton/Botones";
import Background from "../background/Background";

export default function Characters() {
  const [character, setCharacter] = useState(null);
  const [index, setIndex] = useState(1);
  const maxIndex = 82;

  async function imageExists(imageUrl) {
    try {
      const response = await axios.head(imageUrl);
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    async function fetchData() {
      let characterData = null;
      let imageUrl = "";

      try {
        const response = await axios.get(`https://swapi.dev/api/people/${index}/`);
        imageUrl = `https://starwars-visualguide.com/assets/img/characters/${index}.jpg`;
        const imageAvailable = await imageExists(imageUrl);

        if (imageAvailable) {
          characterData = { ...response.data, index };
        }
      } catch (error) {
        console.error("Error fetching character data:", error);
      }

      setCharacter(characterData);
    }

    fetchData();
  }, [index]);

  return (
    <div>
      <Background shipSrc="https://i.postimg.cc/LsgR6N9Z/falcon-removebg-preview.png" />
      <div className={styles.container}>
        <CharacterDetails character={character} />
        <Botones
          onPrevious={() => setIndex(index - 1)}
          onNext={() => setIndex(index + 1)}
          currentIndex={index}
          maxIndex={maxIndex}
        />
       
      </div>
    </div>
  );
}
