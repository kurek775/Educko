import React from "react";
import Card from "./Card.js";
import styles from "./About.module.css";

function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <h2 className={styles.Title}>O nás</h2>
      <div className={styles.FlexContainer}>
        <div className={styles.FlexItem}>
          <Card
            img="/malba.jpg"
            imgLabel="Masaryk"
            name="Masaryk"
            content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Nullam rhoncus aliquam metus. Pellentesque arcu. Integer malesuada. Etiam commodo dui eget wisi. Donec quis nibh at felis congue commodo. Sed convallis magna eu sem. Aenean fermentum risus id tortor. In rutrum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam."
          />
        </div>
        <div className={styles.FlexItem}>
          <Card
             img="/malba.jpg"
            imgLabel="Masaryk"
            name="Masaryk"
            content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Nullam rhoncus aliquam metus
            . Pellentesque arcu. Integer malesuada. Etiam commodo dui eget wis
            i. Donec quis nibh at felis congue commodo. Sed convallis magna
             eu sem. Aenean fermentum risus id tortor. In rutrum. Etiam dui se
             m, fermentum vitae, sagittis id, malesuada in, quam."
          />
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
