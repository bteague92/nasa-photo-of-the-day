import React from "react";

export const ImgOne = props => {
  return (
    <div className="outerCard">
      <div className="imgCard">
        <h3>{props.title}</h3>
        <img className="img" src={props.path} alt={props.detail} />
        <p>Date: {props.date}</p>
        <p>{props.para}</p>
      </div>
    </div>
  );
};
