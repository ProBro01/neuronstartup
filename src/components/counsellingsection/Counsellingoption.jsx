import React from "react";
// icons
import degree from "../../assests/images/logos/degree.png"

export const Counsellingoption = (props) => {
  return (
    <div
      className={`counselling__option`}
      value={props.value}
      t-data-index={props.index}
    >
      <div className="counselling__option-desc-cont">
        <h3>{props.topic}</h3>
        <p>{props.desc}</p>
      </div>
      <div className="counselling__option-img-cont">
        <div className="counselling__doctor-description">
          <div className="counselling__doctor-data-cont">
            <div className="counselling__doctor-desc-data">
              <h2>Dr. {props.doctorname}</h2>
              <p><span><img src={degree} style={{height:"40px", width : "40px"}} /></span>{props.doctordesc}</p>
            </div>
          </div>
          <img src={props.imgurl} className="counselling__option-img" />
        </div>
      </div>
    </div>
  );
};
