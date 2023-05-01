import React from "react";
import styles from "./background.module.css";

export default function Background({ shipSrc }) {
  const stars = Array.from({ length: 100 }).map((_, index) => (
    <div
      key={index}
      className={styles.star}
      style={{
        left: `${Math.floor(Math.random() * 100)}vw`,
        top: `${Math.floor(Math.random() * 100)}vh`,
        animationDuration: `${Math.random() * 4 + 2}s`,
        animationDelay: `${Math.random() * 50}s`,
      }}
    ></div>
  ));

  return (
    <div className={styles.container}>
      {stars}
      <img src={shipSrc} className={styles.ship} alt="Spaceship" />
    </div>
  );
}
