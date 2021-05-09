import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

function Card({ img, imgLabel, name, content }) {
  return (
    <div className={styles.Card}>
      <div className={styles.Img}>
        <Image
          className={styles.Image}
          src={img}
          alt={imgLabel}
          width={200}
          height={200}
        />
      </div>
      <div>
        <h2 className={styles.Name}>{name}</h2>
        <p className={styles.Content}>{content}</p>
      </div>
    </div>
  );
}
export default Card;
