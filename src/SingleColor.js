import React from "react";
const SingleColor = ({ color, weight, index }) => {
  return (
    <article
      className="singleColor"
      style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}
    >
      <h3>{weight}%</h3>
      <h4>{}</h4>
    </article>
  );
};

export default SingleColor;
