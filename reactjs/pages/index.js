import React from "react";
import Imagecarousel from "../components/Navbar/Carousel";


import classes from "../styles/homePage.module.css";

export default function Home() {
  return (
    <div className={classes.section}>
<Imagecarousel></Imagecarousel>
    </div>
  );
}
