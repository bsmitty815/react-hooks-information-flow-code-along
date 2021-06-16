import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  console.log(onChangeColor);

  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor); // created a function and then called the
                    //prop as a call back to pass it back to the parent
  }





  return (
      <div
        onClick={handleClick}
        className="child"
        style={{ backgroundColor: color }}
        
      />

  ) 
}

export default Child;
