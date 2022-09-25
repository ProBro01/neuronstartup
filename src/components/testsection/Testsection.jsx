import React from "react";
// images
import testsideimg from "../../assests/images/testsideimg.webp";
// stylesheet
import "../../css/testsection.css";
// data
import { testsectionlist } from "../../Data.js";

export const Testsection = () => {
  return (
    <section className="test__section">
      <div className="test__section-all-data">
        <div className="test__section-heading-cont">
          <h1>Know About Youself</h1>
        </div>
        <div className="test__section-side">
          <div className="test__section-img-cont">
            <img src={testsideimg} />
            <div className="test__section-img-overlay"></div>
          </div>
          <div className="test__section-data">
            <h2>find the best therapist for you</h2>
            <p>
              Professional, Licensed, vetted and therapist who you can trust
            </p>
            <ul>
              {testsectionlist.map((element, index) => {
                return <li>{element}</li>;
              })}
            </ul>
            <button>Take a Test</button>
          </div>
        </div>
      </div>
    </section>
  );
};
