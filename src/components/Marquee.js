import React from "react";
import sponsor01 from "../Assests/Illustrator/1x/Scroller01.png";
import sponsor02 from "../Assests/Illustrator/1x/Scroller02.png";
import sponsor03 from "../Assests/Illustrator/1x/Scroller03.png";
import sponsor04 from "../Assests/Illustrator/1x/Scroller04.png";
import sponsor05 from "../Assests/Illustrator/1x/Scroller05.png";
import sponsor06 from "../Assests/Illustrator/1x/Scroller06.png";
import sponsor07 from "../Assests/Illustrator/1x/Scroller07.png";

function Marquee() {
  return (
    <div>
      <div className="marquee">
        <div className="marquee--inner">
          <span>
            <div className="orb red">
              <img src={sponsor01} alt="" height={70}></img>
            </div>
            <div className="orb yellow">
              <img src={sponsor02} alt="" height={70}></img>
            </div>
            <div className="orb blue">
              <img src={sponsor03} alt="" height={70}></img>
            </div>
            <div className="orb orange">
              <img src={sponsor04} alt="" height={70}></img>
            </div>
            <div className="orb purple">
              <img src={sponsor05} alt="" height={70}></img>
            </div>
            <div className="orb green">
              <img src={sponsor06} alt="" height={70}></img>
            </div>

            <div className="orb lol">
              <img src={sponsor07} alt="" height={70}></img>
            </div>
          </span>
          <span>
            <div className="orb red">
              <img src={sponsor01} alt="" height={70}></img>
            </div>
            <div className="orb yellow">
              {" "}
              <img src={sponsor02} alt="" height={70}></img>
            </div>
            <div className="orb blue">
              {" "}
              <img src={sponsor03} alt="" height={70}></img>
            </div>
            <div className="orb orange">
              {" "}
              <img src={sponsor04} alt="" height={70}></img>
            </div>
            <div className="orb purple">
              {" "}
              <img src={sponsor05} alt="" height={70}></img>
            </div>

            <div className="orb lol">
              <img src={sponsor06} alt="" height={70}></img>
            </div>
            <div className="orb lol">
              <img src={sponsor07} alt="" height={70}></img>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
