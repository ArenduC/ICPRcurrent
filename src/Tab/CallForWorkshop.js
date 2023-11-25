import React from "react";
import "../Css/Main.css";
import "../Css/Buildin.css";
import progress from "../Assests/settings.png";
import Workshops from "../Assests/Illustrator/CallFor05.png";

function CallForWorkshop({ mheight, height }) {
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
              <div className="call-for-img">
                <img src={Workshops} height={300} alt="" />
              </div>
              <div className="call-for-message">
                <div
                  className="text-card-header order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  style={{ justifyContent: "center" }}
                >
                  <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                    Call for Workshops
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    The ICPR 2024 Workshop Chairs invite proposals for the 27th
                    International Conference on Pattern Recognition which is to
                    be held in Kolkata, India during December 01-05, 2024.
                    Workshops can be half-day or full-day, and it is also
                    possible to hold workshops that will be operated in a
                    virtual format, but it is expected that most workshops will
                    take place physically at the venue to be arranged by the
                    ICPR-2024 organizer. We seek Workshop proposals on timely
                    topics and applications of Artificial Intelligence, Computer
                    Vision, Image and Sound Analysis, Pattern Recognition,
                    Biometric and Human Computer Interaction, Document Analysis
                    and Recognition and Biomedical Imaging and Bioinformatics.
                    Workshops are expected to provide a forum for the active
                    exchange of ideas and experiences. Members from all segments
                    of the ICPR community are invited to submit workshop
                    proposals for review. Each proposal will be assessed based
                    on its scientific merit, proposed structure, overall
                    relevance, and how it complements the main conference.
                    Workshop organizers will be responsible for inviting
                    speakers and ensuring their participation, submission, and
                    review of papers, preparation of the program, etc.
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

export default CallForWorkshop;
