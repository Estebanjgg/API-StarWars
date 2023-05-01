import styles from "../CharacterCss/Characters.module.css";

export default function CharacterDetails({ character }) {
  if (!character) {
    return <div>Imagen no disponible o personaje no encontrado.</div>;
  }

  return (
    <>
      <img
        className={styles.image}
        src={`https://starwars-visualguide.com/assets/img/characters/${character.index}.jpg`}
        alt={character.name}
      />
      <div className={styles.form}>
        <div className={styles.formRow}>
          <label className={styles.label}>Nombre:</label>
          <span className={styles.span}>{character.name}</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Altura:</label>
          <span className={styles.span}>{character.height} cm</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Peso:</label>
          <span className={styles.span}>{character.mass} kg</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Color de cabello:</label>
          <span className={styles.span}>{character.hair_color}</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Color de piel:</label>
          <span className={styles.span}>{character.skin_color}</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Color de ojos:</label>
          <span className={styles.span}>{character.eye_color}</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Año de nacimiento:</label>
          <span className={styles.span}>{character.birth_year}</span>
        </div>
        <div className={styles.formRow}>
          <label className={styles.label}>Género:</label>
          <span className={styles.span}>{character.gender}</span>
        </div>
      </div>
    </>
  );
}
