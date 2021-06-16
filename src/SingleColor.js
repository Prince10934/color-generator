import React,{useState,useEffect} from "react";
const SingleColor = ({ color, weight, type }) => {
  const [r, g, b] = color;
  const [copy,setCopy]=useState(false);

  useEffect(()=>{
    setTimeout(()=>setCopy(false),3000);
  },);
  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const rgbToHex = (r, g, b) => {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  };
  const currentColor=rgbToHex(r,g,b);
  return (
    <article
      className={`singleColor ${type==="shade"?"white":"black"}`}
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      onClick={()=>{
        setCopy(true);
        navigator.clipboard.writeText(currentColor);
      }}
    >
      <h3>{weight}%</h3>
      <h4>{currentColor}</h4>
      {copy&&<p className='copy'>Copy To Clipboard</p>}
    </article>
  );
};

export default SingleColor;
