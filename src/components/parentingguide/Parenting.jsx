import React from "react";
// stylesheet
import "../../css/parenting.css";
// data
import { parentingdata } from "../../Data.js"
import { Parentingcard } from "./Parentingcard";

export const Parenting = () => {
  return (
    <section className="parenting__section">
      <div className="parenting__cont">
        <div className="parenting__heading-cont">
          <h1>Parenting For your Child</h1>
        </div>
        <div className="parenting__card-sec-cont">
        {
          parentingdata.map((element, index) => {
            return <Parentingcard imgurl={element.imgurl} heading={element.heading} description={element.description} />
          })
        }
        </div>
      </div>
    </section>
  );
};
