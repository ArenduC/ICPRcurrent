import React, { useState, useEffect } from "react";
import "../Css/Main.css";
import newImage from "../Assests/Slider01.jpg";
import newImage2 from "../Assests/Slider02.jpg";
import newImage3 from "../Assests/Slider03.jpg";
import newImage4 from "../Assests/Slider04.jpg";
import newImage5 from "../Assests/Slider05.jpg";
import newImage6 from "../Assests/Slider06.jpg";

import kol01 from "../Assests/Illustrator/kolkata/1x/kol01.png";
import kol02 from "../Assests/Illustrator/kolkata/1x/kol02.png";
import kol03 from "../Assests/Illustrator/kolkata/1x/kol03.png";
import kol04 from "../Assests/Illustrator/kolkata/1x/kol04.png";
import kol05 from "../Assests/Illustrator/kolkata/1x/kol05.png";
import kol06 from "../Assests/Illustrator/kolkata/1x/kol06.png";

import leftArrow from "../Assests/c_a_l.svg";
import rightArrow from "../Assests/c_a_r.svg";

const ImageSlider = ({ height }) => {
  const slides = [kol01, kol02, kol03, kol04, kol05, kol06];
  const [currentIndex, setCurrentIndex] = useState(0);
  const images2 = [
    newImage,
    newImage2,
    newImage3,
    newImage4,
    newImage5,
    newImage6,
  ];

  console.log("imageheigh: ", height);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images2.length) % images2.length
    );
  };

  // Auto-slider functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length]);

  return (
    <div className="image-slider">
      <div className="silder_container" style={{ height: height }}>
        <img src={images2[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="slider-message-container" style={{ height: height }}>
          <span>
            <span className="zoom-container">
              <span className="zoom-element">27th</span>
            </span>{" "}
            International Conference on
          </span>
          <span>Pattern Recognition</span>
          <div className="text-extra-container">
            <span
              style={{
                fontFamily: "Poiret One",
                fontWeight: 400,
                fontSize: "4rem",
                textTransform: "uppercase",
              }}
            >
              K
            </span>
            <div className="text-extra-style">
              <div className="slider-container">
                <div
                  className="slides"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="slide">
                      {<img src={slide} alt="" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span
              style={{
                fontFamily: "Poiret One",
                fontWeight: 400,
                fontSize: "4rem",
                textTransform: "uppercase",
              }}
            >
              lkata
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
