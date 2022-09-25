import React from "react";
// data
import { counsellingoption } from "../../Data.js";
// component
import { Counsellingoption } from "./Counsellingoption.jsx";

// stylesheet
import "../../css/counselling.css";
// image
import counsellingimg1 from "../../assests/images/counsellingimg1.jpeg";
import counsellingimg2 from "../../assests/images/counsellingimg2.jpg";
import counsellingimg3 from "../../assests/images/counsellingimg3.jpeg";
import counsellingimg4 from "../../assests/images/counsellingimg4.jpg";
import counsellingimg5 from "../../assests/images/counsellingimg5.jpg";
import { useEffect } from "react";
import { useState } from "react";

export const Counsellingsection = () => {
  const [currentshowIndex, setCurrentshowindex] = useState(0);
  const [showtherapyindex, setshowtherapyindex] = useState(0);

  useEffect(() => {
    var allimages = document.querySelectorAll("[data-index]");
    allimages[currentshowIndex].classList.add("fade__in");
    setTimeout(() => {
      if (currentshowIndex === 0) {
        allimages[4].classList.remove("fade__in");
      } else {
        allimages[currentshowIndex - 1].classList.remove("fade__in");
      }
    }, 1000);
  }, [currentshowIndex]);

  useEffect(() => {
    var alltherapy = document.querySelectorAll("[t-data-index");
    alltherapy[showtherapyindex].classList.add("fade__in");
    if (showtherapyindex === 0) {
      alltherapy[7].classList.remove("fade__in");
    } else {
      alltherapy[showtherapyindex - 1].classList.remove("fade__in");
    }
  }, [showtherapyindex]);

  useEffect(() => {
    var intervel = setInterval(() => {
      setshowtherapyindex((prevstate) => {
        if (prevstate === 7) {
          return 0;
        } else {
          return prevstate + 1;
        }
      });
      setCurrentshowindex((prevstate) => {
        if (prevstate === 4) {
          return 0;
        } else {
          return prevstate + 1;
        }
      });
    }, 4000);
    return () => clearInterval(intervel);
  }, []);

  return (
    <section className="counselling__section">
      <div className="counselling__cont">
        <div className="counselling__option-cont">
          <div className="counselling__option-list-cont">
            {counsellingoption.map((element, index) => {
              return (
                <Counsellingoption
                  topic={element.heading}
                  value={element.heading}
                  index={index}
                  desc={element.desc}
                  imgurl={element.imgurl}
                  doctorname={element.doctorname}
                  doctordesc={element.doctordesc}
                />
              );
            })}
          </div>
          <div className="counselling__option-button-cont">
            <button>Consult Now</button>
          </div>
        </div>
        <div className="counselling__img-cont">
          <h1>Online Therapy &#38; Counselling</h1>
          <div className="counselling__img-overlay"></div>
          <div className="counselling__img-item-cont" data-index="0">
            <img src={counsellingimg1} className="counselling__img-item" />
          </div>
          <div className="counselling__img-item-cont" data-index="1">
            <img src={counsellingimg2} className="counselling__img-item" />
          </div>
          <div className="counselling__img-item-cont" data-index="2">
            <img src={counsellingimg3} className="counselling__img-item" />
          </div>
          <div className="counselling__img-item-cont" data-index="3">
            <img src={counsellingimg4} className="counselling__img-item" />
          </div>
          <div className="counselling__img-item-cont" data-index="4">
            <img src={counsellingimg5} className="counselling__img-item" />
          </div>
        </div>
      </div>
    </section>
  );
};
