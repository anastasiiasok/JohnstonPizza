import React from "react";

import "./Homeslider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "./slide1.jpg";
import slideTwo from "./slide2.jpg";
import slideThree from "./slide3.jpg";

const carouselImages = [slideOne, slideTwo, slideThree];
function Homeslider() {
  return (
    <Carousel
      className="home__carousel"
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      transitionTime={200}
    >
      {carouselImages.map((carouselImage) => (
        <div>
          <img src={carouselImage} alt="carousel" />
        </div>
      ))}
    </Carousel>
  );
}
export default Homeslider;
