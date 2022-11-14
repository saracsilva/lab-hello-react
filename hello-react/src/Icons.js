import React from "react";
import iconOne from "./images/icon1.png";
import iconTwo from "./images/icon2.png";
import iconThree from "./images/icon3.png";
import iconFour from "./images/icon4.png";
import "./Icons.css";
function Icons() {
  return (
    <div className="Icons">
      <div className="IconOne">
        {" "}
        <img src={iconOne} alt="icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive Uis.</p>
      </div>
      <div className="IconOne">
        {" "}
        <img src={iconTwo} alt="icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive Uis.</p>
      </div>
      <div className="IconOne">
        {" "}
        <img src={iconThree} alt="icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive Uis.</p>
      </div>
      <div className="IconOne">
        {" "}
        <img src={iconFour} alt="icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive Uis.</p>
      </div>
    </div>
  );
}
export default Icons;
