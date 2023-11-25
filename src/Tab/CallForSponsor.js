import React from "react";
import "../Css/Main.css";
import "../Css/Buildin.css";
import progress from "../Assests/settings.png";
import Sponsor from "../Assests/Illustrator/CallFor02.png";

function CallForSponsor({ mheight, height }) {
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
                <img src={Sponsor} height={300} alt="" />
              </div>
              <div className="call-for-message">
                <div
                  className="text-card-header order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  style={{ justifyContent: "center" }}
                >
                  <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                    Call for sponsor
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    It is our great pleasure to announce the Call for Sponsors
                    for the 27th International Conference on Pattern Recognition
                    (ICPR 2024), which will be held in Kolkata, India, during
                    December 1-5, 2024. ICPR 2024 is the flagship conference of
                    IAPR, the International Association of Pattern Recognition
                    and it is a biannual conference started in 1973. ICPR is
                    completing its 50 years in 2023. ICPR is the largest
                    research venue for scholars, researchers and practitioners
                    in the field of Pattern Recognition, an interdisciplinary
                    research area that aims to discuss on cutting edge
                    developments on Pattern Recognition, Machine Learning,
                    Computer Vision and Artificial intelligence. ICPR 2024
                    offers sponsorship opportunities at the Diamond, Gold,
                    Silver and Start-up levels, as described below. By taking
                    this opportunity to become a proud sponsor of the
                    conference, you can showcase your company’s latest products
                    to an international community of Pattern Recognition
                    researchers and practitioners, recruit top technical talent,
                    and learn about state-of-the-art research and technologies
                    in Pattern Recognition.
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

export default CallForSponsor;
