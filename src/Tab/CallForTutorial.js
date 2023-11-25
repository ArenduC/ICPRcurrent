import React from "react";
import "../Css/Main.css";
import "../Css/Buildin.css";
import progress from "../Assests/settings.png";
import Tutorial from "../Assests/Illustrator/CallFor04.png";

function CallForTutorial({ mheight, height }) {
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
                <img src={Tutorial} height={300} alt="" />
              </div>
              <div className="call-for-message">
                <div
                  className="text-card-header order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  style={{ justifyContent: "center" }}
                >
                  <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                    Call for Tutorial Proposals
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    The ICPR 2024 Organizing Committee invites proposals for
                    tutorials in conjunction with the 27th International
                    Conference on Pattern Recognition, which is to be held at
                    Kolkata, India during December 1-5, 2024. We seek tutorials
                    on core techniques, application areas and emerging research
                    topics that are of interest within the ICPR community. An
                    effective and informative tutorial should provide a broad
                    introduction to the chosen research area as well as in-depth
                    coverage on selected advanced topics. Proposals that focus
                    exclusively on the presenters’ own work or commercial
                    presentations are not acceptable.
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

export default CallForTutorial;
