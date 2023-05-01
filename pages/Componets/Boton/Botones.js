import React from "react";
import styles from "../CharacterCss/Characters.module.css";

export default function Botones({ onPrevious, onNext, currentIndex, maxIndex }) {
  return (
    <div className={styles.buttons}>
      <button
        className={styles.button}
        onClick={onPrevious}
        disabled={currentIndex <= 1}
      >
        Retroceder
      </button>
      <button
        className={styles.button}
        onClick={onNext}
        disabled={currentIndex >= maxIndex}
      >
        Pasar
      </button>
    </div>
  );
}
