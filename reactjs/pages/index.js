import React from "react";
import Imagecarousel from "../components/Navbar/Carousel";
import ImageSlider from "../components/Navbar/Slider";
import { SliderData } from "../components/Navbar/SliderData";

import classes from "../styles/homePage.module.css";

export default function Home() {
  return (
    <div className={classes.section}>
<ImageSlider slides={SliderData}></ImageSlider>
    </div>
  );
}
