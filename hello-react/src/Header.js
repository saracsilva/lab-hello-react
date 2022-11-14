import React from "react";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import "./Header.css";
function Header() {
  return (
    <header className="App-header">
      <nav>
        {" "}
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" />
      </nav>
      <div className="hello">
        <h1>Say Hello to ReactJs</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </header>
  );
}
export default Header;
