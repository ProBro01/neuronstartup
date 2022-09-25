import React from "react";
// images
import herobackground from "../../assests/images/herobackground.webp";
import logo from "../../assests/images/logo.webp"
// data
import { herosectionblockdata } from "../../Data.js"
// component
import { Heroserviceblock } from "./Heroserviceblock";
// stylesheet
import "../../css/herosection.css"

export const Herosection = () => {
  return (
    <section className="hero__section">
      <div className="hero__section-cont">
        <img src={herobackground} className="hero__section-background-img"/>
        <div className="hero__section-overlay"></div>
        <div className="hero__section-main-quote">
          <h1>Experience Change with Neurons</h1>
          <p>
            Your Local Psychologist - <span>Here to Guide You</span>
          </p>
          <button>Book An Appointment</button>
        </div>
        <div className="hero__section-block-cont">
            {
                herosectionblockdata.map((element, index) => {
                    return <Heroserviceblock imgurl={element.imgurl} heading={element.heading} />
                })
            }
        </div>
      </div>
    </section>
  );
};
