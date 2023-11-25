import React from "react";
import "../Css/Main.css";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import NearMeIcon from "@mui/icons-material/NearMe";
import {
  chairdata,
  generalChair,
  newData,
  otherChair,
  programChair,
  trackdata,
} from "../DataStore/DataStore";

function ConferenceCommittee({ mheight, height }) {
  console.log("ChairData: ", chairdata());
  console.log("NewData: ", newData);
  const chair = chairdata();
  const trackChair = trackdata();
  const OtherChair = otherChair();
  const ProgramChair = programChair();
  const GeneralChair = generalChair();
  return (
    <div className="tab-container" style={{ flexDirection: "column" }}>
      <div className="card-container" style={{ height: `${height}px` }}>
        <div className="image-container-background" style={{ height: "100vh" }}>
          {GeneralChair.map((data, index) => (
            <div className="image-container">
              {data.details.map((generalData, index) => (
                <>
                  <div className="image-container-avtar-card">
                    <div className="image-container-avatar"></div>
                    <img src={generalData.img} alt="" />
                  </div>
                  <div className="image-container-text">
                    <span className="image-container-text-span">
                      <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                        {generalData.name}
                      </span>
                      <span style={{ fontSize: ".8rem" }}>
                        {generalData.country}
                      </span>
                    </span>
                    {generalData.country === "India" ? (
                      <NearMeIcon style={{ transform: "rotate(0deg)" }} />
                    ) : (
                      <LocalAirportIcon
                        style={{ transform: "rotate(45deg)" }}
                      />
                    )}
                  </div>
                </>
              ))}

              <div
                style={{
                  display: "flex",
                  bottom: 0,
                  flexDirection: "column",
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <div className="image-container-footer-text">
                  <span>{data.chair}</span>
                </div>
                <div className="image-container-footer">
                  {data.details.map((about, index) => (
                    <span style={{ fontSize: ".8rem", textAlign: "justify" }}>
                      {about.about}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-container" style={{ height: "100vh" }}>
        <div className="image-container-background" style={{ height: "100vh" }}>
          {ProgramChair.map((data, index) => (
            <div className="image-container">
              {data.details.map((generalData, index) => (
                <>
                  <div className="image-container-avtar-card">
                    <div className="image-container-avatar"></div>
                    <img src={generalData.img} alt="" />
                  </div>
                  <div className="image-container-text">
                    <span className="image-container-text-span">
                      <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                        {generalData.name}
                      </span>
                      <span style={{ fontSize: ".8rem" }}>
                        {generalData.country}
                      </span>
                    </span>
                    {generalData.country === "India" ? (
                      <NearMeIcon style={{ transform: "rotate(0deg)" }} />
                    ) : (
                      <LocalAirportIcon
                        style={{ transform: "rotate(45deg)" }}
                      />
                    )}
                  </div>
                </>
              ))}

              <div
                style={{
                  display: "flex",
                  bottom: 0,
                  flexDirection: "column",
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <div className="image-container-footer-text">
                  <span>{data.chair}</span>
                </div>
                <div className="image-container-footer">
                  {data.details.map((about, index) => (
                    <span style={{ fontSize: ".8rem", textAlign: "justify" }}>
                      {about.about}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid text-center">
        <div className="row  align-items-center">
          {chair.map((slide, index) => (
            <div key={index} className="col-xxl-4 col-sm-12 col-md-6 p-5 ">
              <div className="chair-card">
                <div className="chair-card-header">{slide.chair}</div>
                <div className="chair-card-body">
                  <span>
                    <ul>
                      {slide.details.map((chairDetail, detailIndex) => (
                        <li key={detailIndex}>
                          <span>{chairDetail.name}</span> |
                          <span> {chairDetail.country}</span>
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#5a5a5a18" }}>
        <div className="row">
          <div className="col-12" style={{ paddingLeft: "3rem" }}>
            <span style={{ fontSize: "2rem", fontWeight: 800 }}>
              Track Chairs
            </span>
          </div>
        </div>
        <div className="row">
          {trackChair.map((slide, index) => (
            <div key={index} className="col-xxl-4 col-sm-12 col-md-6 p-5 ">
              <div className="chair-card">
                <div className="chair-card-header">
                  <div>
                    <span className="chair-card-header-extra">{index + 1}</span>
                  </div>
                  <span>{slide.chair}</span>
                </div>
                <div className="chair-card-body">
                  <span>
                    <ul>
                      {slide.details.map((chairDetail, detailIndex) => (
                        <li key={detailIndex}>
                          <span>{chairDetail.name}</span> |
                          <span> {chairDetail.country}</span>
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="card-container"
        style={{
          height: "40vh",
          width: "100vw",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            {OtherChair.map((slide, index) => (
              <div key={index} className="col-xxl-4 col-sm-12 col-md-6 p-5 ">
                <div className="chair-card">
                  <div className="chair-card-header">{slide.chair}</div>
                  <div className="chair-card-body">
                    <span>
                      <ul>
                        {slide.details.map((chairDetail, detailIndex) => (
                          <li key={detailIndex}>
                            <span>{chairDetail.name}</span> |
                            <span> {chairDetail.country}</span>
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferenceCommittee;
