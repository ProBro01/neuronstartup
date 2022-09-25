import React from "react";
import { useEffect, useState } from "react";
// data
import { aboutuspoints } from "../../Data.js";
// stylesheet
import "../../css/aboutus.css";

export const Aboutus = () => {

  const [travelmeasure, settravelmeasure] = useState(0)
  const [filmarray, setfilmarray] = useState(["aboutus__desc", "aboutus__mainpoints"])

  useEffect(() => {
    var interval = setInterval(() => {
        settravelmeasure((prevstate) => {
          let width = document.querySelector('.aboutus__reel').offsetWidth
          if(prevstate <= -width){
            return 0
          }
          else{
            return prevstate - width
          }
        })
    }, 3000);
    return () => clearInterval(interval)
  }, []);

  return (
    <section className="aboutus__section">
      <div className="aboutus__cont">
        <h1>About Us</h1>
        <div className="aboutus__info-cont">
          <div className="aboutus__reel" style={{transform : `translateX(${travelmeasure}px)`}} >
            <div className="aboutus__desc">
              <p>
                According to the American Psychological Association,
                “Psychologists help people of all ages live happier, healthier
                and more productive lives.” Through the use of various
                psychotherapy methods and collaborative treatment measures, my
                patients develop life-changing habits to help them cope with any
                of life’s various obstacles. Our therapy sessions are designed
                to dissect personal issues and provide patients with effective
                tools to help them see the glass half full instead of half
                empty.
              </p>
            </div>
            <div className="aboutus__mainpoints">
              <ul>
                {aboutuspoints.map((element, index) => {
                  return <li>{element}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
