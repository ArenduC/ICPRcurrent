import React, { useContext, useEffect, useRef, useState } from "react";
import "../Css/Main.css";
import Banner from "../Assests/icprBanner.png";
import Dashboard from "../Tab/Dashboard";
import ConferenceCommittee from "../Tab/ConferenceCommittee";
import ImportantDates from "../Tab/ImportantDates";
import IcprLogo from "../Assests/ICPR_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Marquee from "../components/Marquee";
import CallForSponsor from "../Tab/CallForSponsor";
import CallForCompetiton from "../Tab/CallForCompetiton";
import CallForDemo from "../Tab/CallForDemo";
import CallForTutorial from "../Tab/CallForTutorial";
import CallForPaper from "../Tab/CallForPaper";
import CallForWorkshop from "../Tab/CallForWorkshop";
import { tabHandle } from "../DataStore/DataStore";
import { userDetailsContext } from "./DataShare";

function Home() {
  const images = [
    "../Assests/icprBanner.png",
    "../Assests/icpr.png",
    "../Assests/cfp.jpg",
  ];
  const { shareData, setshareData } = useContext(userDetailsContext);
  const [height, setHeight] = useState();
  const [mergin, setmergin] = useState();
  const [nummergin, setnummergin] = useState();
  const [numheight, setnumheight] = useState();
  const [remainingScrennHeight, setremainingScrennHeight] = useState();
  const [selectedTab, setSelectedTab] = useState("Home");

  const divRef = useRef(null);
  const cardRef = useRef(null);
  const [tabRender, setTabRender] = useState();

  useEffect(() => {
    updateDivHeight();

    window.addEventListener("resize", updateDivHeight);
    return () => {
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);

  const updateDivHeight = () => {
    if (divRef.current && cardRef.current) {
      const height = divRef.current.clientHeight;
      const remainingScrennHeight = window.innerHeight;
      const calculatedHeight = `${remainingScrennHeight - height}px`;
      setmergin(`${cardRef.current.clientHeight}px`);
      const topMergin = `${cardRef.current.clientHeight}px`;

      setnummergin(cardRef.current.clientHeight);
      setnumheight(remainingScrennHeight - height);

      setHeight(calculatedHeight);
      setremainingScrennHeight(remainingScrennHeight);

      if (calculatedHeight) {
        tabFunction("Home", calculatedHeight, topMergin);
      }
    }
  };

  useEffect(() => {
    if (shareData != null) {
      tabFunction("ImportantDates", height, mergin);
      setshareData("");
    }
  }, [shareData]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollStatus, setScrolStatus] = useState(false);
  const conditionCard = scrollPosition <= 180 ? "card_body" : "card_body_false";

  const handleScroll = () => {
    // Get the current scroll position
    const currentPosition = window.scrollY;
    const scrollDirection = currentPosition > scrollPosition ? false : true;

    console.log(
      "scrollStatus: ",
      currentPosition,
      "scrollDirection: ",
      scrollDirection
    );
    setScrollPosition(currentPosition);
  };

  const tabFunction = (key, cHeight, cMergin) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    console.log("TabeName: ", key, cHeight, cMergin);
    setSelectedTab(key);
    if (cHeight) {
      switch (key) {
        case "Home":
          setTabRender(<Dashboard mergin={cMergin} height={cHeight} />);
          break;
        case "ConferenceCommittee":
          setTabRender(
            <ConferenceCommittee mheight={nummergin} height={numheight} />
          );
          break;

        case "ImportantDates":
          setTabRender(<ImportantDates mheight={mergin} height={height} />);
          break;
        case "CallForSponsor":
          setTabRender(<CallForSponsor mheight={mergin} height={height} />);
          break;
        case "CallForCompetiton":
          setTabRender(<CallForCompetiton mheight={mergin} height={height} />);
          break;
        case "CallForDemos":
          setTabRender(<CallForDemo mheight={mergin} height={height} />);
          break;
        case "CallForTutorials":
          setTabRender(<CallForTutorial mheight={mergin} height={height} />);
          break;
        case "CallForPapers":
          setTabRender(<CallForPaper mheight={mergin} height={height} />);
          break;
        case "CallForWorkshops":
          setTabRender(<CallForWorkshop mheight={mergin} height={height} />);

        default:
          break;
      }
    }

    console.log("TabSelected: ", tabRender);
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <div>
          <div style={{ backgroundColor: "#00C9DB" }} ref={divRef}>
            {
              <div className="  navbar_heder">
                <div className=" navbar_header_message">
                  <span
                    style={{
                      fontWeight: "800",
                      fontSize: "1.9rem",
                      lineHeight: "1.8rem",
                    }}
                  >
                    {" "}
                    27th International Conference on <br />
                    Pattern Recognition <br />
                    <span style={{ fontWeight: "500", fontSize: "1rem" }}>
                      December 01-05, 2024, Kolkata, India
                    </span>
                  </span>
                </div>
                <img src={Banner} alt="" width="40%" />
              </div>
            }

            <div className={conditionCard} ref={cardRef}>
              <div className="card_body_navbar">
                <div
                  className={`card-body-options ${
                    selectedTab === "Home" ? "selected" : ""
                  }`}
                  onClick={() => tabFunction("Home", height, mergin)}
                >
                  Home
                </div>
                <div
                  className={`card-body-options ${
                    selectedTab === "ConferenceCommittee" ? "selected" : ""
                  }`}
                  onClick={() =>
                    tabFunction("ConferenceCommittee", height, mergin)
                  }
                >
                  Conference Committee
                </div>
                <div
                  className={`card-body-options ${
                    selectedTab === "ImportantDates" ? "selected" : ""
                  }`}
                  onClick={() => tabFunction("ImportantDates", height, mergin)}
                >
                  Important Dates
                </div>
                <div
                  className={`card-body-options ${
                    [
                      "CallForSponsor",
                      "CallForPapers",
                      "CallForWorkshops",
                      "CallForTutorials",
                      "CallForDemos",
                      "CallForCompetiton",
                    ].includes(selectedTab)
                      ? "selected"
                      : ""
                  }`}
                >
                  Calls
                  <div className="card-options-others">
                    <span
                      className={`option-span ${
                        selectedTab === "CallForPapers" ? "tabSelected" : ""
                      }`}
                      onClick={() =>
                        tabFunction("CallForPapers", height, mergin)
                      }
                    >
                      for Papers
                    </span>
                    <span
                      className={`option-span ${
                        selectedTab === "CallForWorkshops" ? "tabSelected" : ""
                      }`}
                      onClick={() =>
                        tabFunction("CallForWorkshops", height, mergin)
                      }
                    >
                      for Workshops
                    </span>
                    <span
                      className={`option-span ${
                        selectedTab === "CallForTutorials" ? "tabSelected" : ""
                      }`}
                      onClick={() =>
                        tabFunction("CallForTutorials", height, mergin)
                      }
                    >
                      for Tutorials
                    </span>
                    <span
                      className={`option-span ${
                        selectedTab === "CallForDemos" ? "tabSelected" : ""
                      }`}
                      onClick={() =>
                        tabFunction("CallForDemos", height, mergin)
                      }
                    >
                      for Demos
                    </span>
                    <span
                      className={`option-span ${
                        selectedTab === "CallForCompetiton" ? "tabSelected" : ""
                      }`}
                      onClick={() =>
                        tabFunction("CallForCompetiton", height, mergin)
                      }
                    >
                      for Competition
                    </span>
                    <span
                      className={`option-span ${
                        selectedTab === "CallForSponsor" ? "tabSelected" : ""
                      }`}
                      onClick={() =>
                        tabFunction("CallForSponsor", height, mergin)
                      }
                    >
                      for Sponsors
                    </span>
                  </div>
                </div>
                <div className="card-body-options">
                  Conference Program
                  <div className="card-options-others">
                    <span>Technical Program</span>
                    <span>Keynote Speakers</span>
                  </div>
                </div>
                <div className="card-body-options">Venue and Travel</div>
                <div className="card-body-options">
                  Authors
                  <div className="card-options-others">
                    <span>Paper Submission</span>
                  </div>
                </div>
                <div className="card-body-options">
                  Sponsors
                  <div className="card-options-others"></div>
                </div>
                <div className="card-body-options">
                  Past ICPRs
                  <div className="card-options-others"></div>
                </div>
              </div>
            </div>
          </div>

          <div>{tabRender}</div>

          <Marquee />

          <div
            style={{
              height: "50vh",
              overflow: "hidden",
              backgroundColor: "#5a5a5a",
            }}
          >
            <div className="container-footer">
              <div className="container-footer-img">
                <div className="footer-img-card">
                  <img src={IcprLogo} alt="" />
                  <span>ICPRE 2023</span>
                </div>
              </div>
              <div className="footer-others">
                <div className="footer-others-body">
                  <div className="footer-others-card">
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                  </div>
                  <div className="footer-others-card">
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                  </div>
                  <div className="footer-others-card">
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                  </div>
                  <div className="footer-others-card">
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                  </div>
                  <div className="footer-others-card">
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                    <a href="http//google.com"> google call</a>
                  </div>
                </div>
                <div
                  className="footer-others-body-social"
                  style={{ width: "30%" }}
                >
                  <div className="footer-others-card-social">
                    <FacebookIcon
                      style={{ fontSize: "3rem", margin: ".8rem" }}
                    />
                    <TwitterIcon
                      style={{ fontSize: "3rem", margin: ".8rem" }}
                    />
                  </div>
                  <div className="footer-others-card-social">
                    <RedditIcon style={{ fontSize: "3rem", margin: ".8rem" }} />
                    <LinkedInIcon
                      style={{ fontSize: "3rem", margin: ".8rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
