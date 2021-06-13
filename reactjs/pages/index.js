import React from "react";
import Imagecarousel from "../components/Navbar/Carousel";
import Containeros from "../components/Navbar/ContainerosHOME";
import ContainerReg from "../components/Navbar/ContainerReg";
import ContainerRez from "../components/Navbar/ContainerRez ";

import classes from "../styles/homePage.module.css";

export default function Home() {
  return (
    <div className={classes.section}>
      <Imagecarousel></Imagecarousel>
      <Containeros></Containeros>
      <ContainerReg></ContainerReg>

      <ContainerRez></ContainerRez>
    </div>
  );
}
