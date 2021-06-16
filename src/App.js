import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
const App = () => {
  const [color, setColor] = useState("#03a9f4");
  const [error, setError] = useState(false);
  const [colorList,setColorList] = useState([]);
  const handleOnChange = (e) => {
    setColor(e.target.value);
    setError(false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      console.log(colors);
    } catch {
      setError(true);
    }
  };
  return (
    <main>
      <section className="header">
        <h2 className="name">Color Generator</h2>
        <form className="form" onSubmit={handleOnSubmit}>
          <input
            type="text"
            className={`picker ${error ? "error" : null}`}
            value={color}
            placeholder="Enter Value Of Color"
            onChange={handleOnChange}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colorContainer">
        {
          colorList.map((color)=>{
            return <SingleColor key={color.rgb} color={color.rgb} weight={color.weight} />
          })
        }
      </section>
    </main>
  );
};

export default App;
