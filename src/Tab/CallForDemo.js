import React, { useEffect, useContext } from "react";
import "../Css/Main.css";
import "../Css/Buildin.css";
import progress from "../Assests/settings.png";
import Demo from "../Assests/Illustrator/CallFor03.png";
import { userDetailsContext } from "../Home/DataShare";

function CallForDemo({ mheight, height }) {
  const { shareData, setshareData } = useContext(userDetailsContext);
  useEffect(() => {
    console.log("dataCallForDemo: ", shareData);
  }, [shareData]);
  const defaltView = false;
  if (defaltView) {
    return (
      <div className="tab-container">
        <div className="image-slider">
          <div className="card-container" style={{ height: height }}>
            <img src={progress} alt="" height={80} />
            <h1 style={{ color: "#b1b1b1" }}>Work in progress</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tab-container">
        <div className="image-slider">
          <div className="card-container" style={{ height: height }}>
            <div className="call-for-container">
              <div
                className="call-for-img"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={Demo} height={300} alt="" />
              </div>
              <div className="call-for-message">
                <div
                  className="text-card-header order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  style={{ justifyContent: "center" }}
                >
                  <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                    Call for Demonstrations and Exhibitions
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    The ICPR-2024 Organizing Committee will invite proposals for
                    Demonstrations and Exhibitions to be presented in
                    conjunction with the main conference to be held during
                    December 01-05, 2024.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallForDemo;
