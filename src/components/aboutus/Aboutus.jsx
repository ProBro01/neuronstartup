import React from "react";
// icons
import { TiTick } from "react-icons/ti"
// data
import { aboutuspoints } from "../../Data.js";
// stylesheet
import "../../css/aboutus.css";

export const Aboutus = () => {
  return (
    <section className="aboutus__section">
      <div className="aboutus__cont">
        <div className="aboutus__info-cont">
          <div className="aboutus__info-cont-overlay"></div>
          <div className="aboutus__info-heading-cont">
          <h1>About Us</h1>
          </div>
          <div className="aboutus__desc">
            <p>
              Psychologists help people of all ages live happier, healthier and
              more productive lives. Through the use of various psychotherapy
              methods and collaborative treatment measures, Our patients develop
              life-changing habits to help them cope with any of life’s various
              obstacles. Our therapy sessions are designed to dissect personal
              issues and provide patients with effective tools to help them see
              the glass half full instead of half empty.
            </p>
          </div>
          <div className="aboutus__mainpoints">
            <h2>Our Main Highlights</h2>
            <ul>
              {aboutuspoints.map((element, index) => {
                return <li><span><TiTick /></span><p>
                  {element}
                  </p>
                  </li>;
              })}
            </ul>
          </div>
        </div>
        <div className="aboutus__video-cont">
        </div>
      </div>
    </section>
  );
};
