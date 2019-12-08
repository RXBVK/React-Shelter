import React, { useState } from "react";
import "./bootstrap-style.css";
import App from "./App";

const navItems = ["Adopcja", "Zwierzęta", "Jak pomóc", "Kampanie", "Kontakt"];
function Navbar() {
  window.onscroll = changeBackground;
  const [isScrolled, setScrolled] = useState(false);
  function changeBackground() {
    if (document.documentElement.scrollTop > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-dark fixed-top " +
        (isScrolled ? "scrolled" : "")
      }
      style={{ transition: "all 500ms linear" }}
      id="navbar"
      role="navigation"
    >
      <a className="navbar-brand nav-links" href="# ">
        <img
          src="Images/logo-header3.png"
          className="img-responsive logo"
          height="50"
          alt="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="#navbarToggleExternalContent"
      >
        <ul className="navbar-nav ml-auto pl-5">
          {navItems.map(navItem => (
            <li className="nav-item" key={navItem}>
              <a className="nav-link" href="# ">
                {navItem}
              </a>
            </li>
          ))}
          <li>
            <div className="dropdown">
              <i
                className="fas fa-cog fa-3x"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <form>
                  <div className="settings dropdown-item ">
                    <div id="language">
                      <p id="pl">PL</p>
                      <p id="en">EN</p>
                    </div>
                    <div className="custom-control custom-switch" id="switch">
                      <App />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
