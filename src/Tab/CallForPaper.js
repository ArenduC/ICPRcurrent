import React, { useContext } from "react";
import "../Css/Main.css";
import "../Css/Buildin.css";
import progress from "../Assests/settings.png";
import Paper from "../Assests/Illustrator/CallFor01.png";
import { useNavigate } from "react-router-dom";
import { userDetailsContext } from "../Home/DataShare";
import { saveAs } from "file-saver";
import name from "../../src/Assests/document/Sponsor.pdf";

function CallForPaper({ mheight, height }) {
  const { shareData, setshareData } = useContext(userDetailsContext);
  const defaltView = false;
  const navigation = useNavigate();

  const downloadPDF = () => {
    // Replace this with the path or content of your local PDF file
    const pdfFilePath = name;
    console.log("downloadpdf: ", pdfFilePath);

    const anchor = document.createElement("a");
    anchor.href = pdfFilePath;
    anchor.download = "downloaded-file.pdf";

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  };

  const handleFunction = () => {
    console.log("functionClick");
    setshareData("ImportantDates");
  };
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
        <div className="image-slider" style={{ flexDirection: "column" }}>
          <div className="card-container" style={{ height: height }}>
            <div className="call-for-container">
              <div
                className="call-for-img"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={Paper} height={300} alt="" />
              </div>
              <div className="call-for-message">
                <div
                  className="text-card-header order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  style={{ justifyContent: "center" }}
                >
                  <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                    Call for Papers
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    The International Conference on Pattern Recognition (ICPR)
                    is the flagship conference of the International Association
                    of Pattern Recognition and the premier conference in pattern
                    recognition, covering computer vision, Machine learning,
                    image, speech, sensor pattern processing etc. ICPR 2024 is
                    the 27th event of the series and it provides a great
                    opportunity to nurture new ideas and collaborations for
                    students, academics, and industry researchers.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-container"
            style={{
              height: "70vh",
              width: "100vw",
              flexDirection: "row",
              backgroundColor: "#5a5a5a18",
            }}
          >
            {" "}
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="800"
              style={{ justifyContent: "center", width: "50%" }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                ICPR 2024 will cover the following six tracks
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                <ul>
                  <li>
                    Artificial Intelligence, Machine Learning for Pattern
                    Analysis
                  </li>
                  <li>Computer and Robot Vision</li>
                  <li>Image, Speech, Signal and Video Processing</li>
                  <li>Biometrics and Human Computer Interaction</li>
                  <li>Document Analysis and Recognition</li>
                  <li>Biomedical Imaging and Bioinformatics</li>
                </ul>
              </span>
            </div>
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="800"
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "100%",
                backgroundColor: "#5a5a5a30",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                Important deadlines for ICPR 2024
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                <div className="icpr-Button" onClick={() => handleFunction()}>
                  Click here for Important deadlines
                </div>
              </span>
            </div>
          </div>
          <div
            className="card-container"
            style={{
              height: "70vh",
              width: "100vw",
              flexDirection: "row",
              backgroundColor: "#5a5a5a18",
            }}
          >
            {" "}
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="800"
              style={{
                justifyContent: "center",
                width: "50%",
                height: "100%",
                backgroundColor: "#5a5a5a30",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                Submission and Review
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                ICPR-2024 will follow a single-blind review process. Authors can
                include their names and affiliations in the manuscript
              </span>
            </div>
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="800"
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "100%",
                backgroundColor: "#5a5a5a00",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                Paper Format and Length
              </span>
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  textAlign: "justify",
                }}
              >
                Springer LNCS format with maximum 15 pages (including
                references) during paper submission. To take care of reviewers'
                comments, one more page is allowed (without any charge) during
                revised/camera ready submission. Moreover, authors may purchase
                up to 2 extra pages. Extra page charges must be paid at the time
                of registration. Springer LNCS paper formatting instructions and
                templates for ICPR-2024 are available here DOC and Latex
              </span>
            </div>
          </div>
          <div
            className="card-container"
            style={{
              height: "70vh",
              width: "100vw",
              flexDirection: "row",
              backgroundColor: "#5a5a5a18",
            }}
          >
            {" "}
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="800"
              style={{ justifyContent: "center", width: "50%" }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                Contact
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                For any enquiry please contact the ICPR-2024 Secretariat via
                email at icpr2024@gmail.com and icpr2024@isical.ac.in
              </span>
            </div>
            <div
              className="text-card-header order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="800"
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "100%",
                backgroundColor: "#5a5a5a30",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>
                PDF copy of the call for papers is available here
              </span>
              <span style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                <div className="icpr-Button" onClick={downloadPDF}>
                  Download
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallForPaper;
