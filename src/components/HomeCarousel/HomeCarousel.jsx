import React from "react";
import PropTypes from "prop-types";
import styles from "./HomeCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AirPods from "../../../public/static/airPods.png";

const HomeCarousel = () => (
  <Carousel>
  <div>
      <img src={AirPods} />
      <p className="legend">Legend 1</p>
  </div>
  <div>
      <img src={AirPods} />
      <p className="legend">Legend 2</p>
  </div>
  <div>
      <img src={AirPods} />
      <p className="legend">Legend 3</p>
  </div>
</Carousel>
);

export default HomeCarousel;
