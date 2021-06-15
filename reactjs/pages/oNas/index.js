import React from "react";
import Card from "./Card.js";
import styles from "./About.module.css";

function AboutUs() {
  return (
    <div className={styles.AboutUs}>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Nullam rhoncus aliquam metus
            . Pellentesque arcu. Integer malesuada. Etiam commodo dui eget wis
            i. Donec quis nibh at felis congue commodo. Sed convallis magna
             eu sem. Aenean fermentum risus id tortor. In rutrum. Etiam dui se
             m, fermentum vitae, sagittis id, malesuada in, quam.
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Sed elit dui, 
        pellentesque a, faucibus vel, interdum nec, diam. Vivamus porttitor turpis ac leo. Proin pede metus, vulputate nec, f
        ermentum fringilla, vehicula vitae, justo. Nullam at arcu a est sollicitudin euismod. Nullam sapien sem, ornare ac, nonummy 
        non, lobortis a enim. Aenean placerat. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Donec quis nibh at felis 
        congue commodo. Vivamus porttitor turpis ac leo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nam libero tempore, 
        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda es
        t, omnis dolor repellendus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Itaque earum rerum hic tenetur 
        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce tellus. 
        Integer tempor. Suspendisse nisl.</p>

    </div>
  );
}
export default AboutUs;




/*  <div className={styles.FlexContainer}>
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
      </div>*/