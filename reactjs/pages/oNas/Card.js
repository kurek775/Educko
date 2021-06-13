import React from "react";
import styles from "./Card.module.css";
// import Image from "next/image";

function Card({ img, imgLabel, name, content }) {
  return (
    <div className={styles.Card}>
         <h2 className={styles.Name}>{name}</h2>
      <div className={styles.Img}>
 <img  className={styles.Image} src={img}></img>
      </div>
      <div>
     
        <p className={styles.Content}>{content}</p>
      </div>
    </div>
  );
}
export default Card;
