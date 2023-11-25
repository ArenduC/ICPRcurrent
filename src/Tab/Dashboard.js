import React, { useEffect, useRef, useState } from "react";
import "../Css/Main.css";
import Banner from "../Assests/icprBanner.png";
import ImageSlider from "../components/ImageSlider";
import DateCounter from "../components/DateCounter";
import GuestSlider from "../components/GuestSlider";

function Dashboard({ height, mergin }) {
  console.log("merginHeight: ", height);
  return (
    <div>
      <div className="image_slider_container" style={{ marginBottom: -mergin }}>
        {height ? (
          <>
            <ImageSlider height={height} />
          </>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#5a5a5a18",
        }}
      >
        <div className="pattern_desing">
          <div className="text-card-container">
            <div className="rotating-div5">
              <DateCounter />
              <div className="rotating-div4">
                <div className="rotating-div3">
                  <div className="rotating-div2">
                    <div className="rotating-div"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-card-container">
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                About Conference
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                The International Conference on Pattern Recognition (ICPR) is
                the flagship conference of the International Association of
                Pattern Recognition and the premier conference in pattern
                recognition, covering computer vision, Machine learning, image,
                speech, sensor pattern processing etc. ICPR 2024 is the 27th
                event of the series and it provides a great opportunity to
                nurture new ideas and collaborations for students, academics,
                and industry researchers.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-xxl"
        style={{
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#ffff",
        }}
      >
        <div className="pattern_desing">
          <div className="text-card-container">
            <div
              className="text-card-header"
              style={{ textAlign: "right", alignItems: "flex-end" }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                About Keynote Speakers
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas cursus rutrum felis vitae mollis. Aenean vestibulum,
                justo sit amet blandit faucibus, nisl lectus rhoncus libero, at
                ullamcorper lorem erat sed ante. Nunc quis nisi mattis, accumsan
                risus a, scelerisque ante. Suspendisse potenti. Vivamus a
                imperdiet
              </span>
            </div>
          </div>
          <div className="text-card-container">
            <GuestSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
