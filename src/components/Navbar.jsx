import React from "react";
import { navbarLinks } from "../Data.js";
// images
import logo from "../assests/images/logo.webp";
// stylesheet
import "../css/navbar.css";

export const Navbar = () => {
  return (
    <header className="header__section">
      <div className="header__navbar-container">
        <img src={logo} className="header__logo" />
        <nav className="navbar">
          {navbarLinks[0].map((element, index) => {
            return <li>{element}</li>;
          })}
          <div className="navbar__more-opts"  onMouseEnter={(event) => {
                document.getElementById('more-options').classList.add("showul")
                document.getElementById('more-options').classList.remove("hideul")
              }} onMouseLeave={(event) => {
                document.getElementById('more-options').classList.remove("showul")
                document.getElementById('more-options').classList.add("hideul")
            }}>
            <p>More</p>
            <ul id="more-options" className="hideul">
              {navbarLinks[1].map((element, index) => {
                return <li>{element}</li>;
              })}
            </ul>
          </div>
          <button>Login</button>
        </nav>
      </div>
    </header>
  );
};
