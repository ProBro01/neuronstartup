import React from "react";

export const Parentingcard = (props) => {
  return (
    <div className="parenting__card-outcont">
      <div className="parenting__card-incont">
        <div className="parenting__card-img-cont">
          <img src={props.imgurl} className="parenting__card-img" />
        </div>
        <div className="parenting__card-data">
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
