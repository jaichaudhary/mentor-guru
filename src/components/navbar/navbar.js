import React, { useState } from "react";
import "./navbar.css";
import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
// import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";

function NavbarList(props) {
  return (
    <React.Fragment>
      <ul className="nav__item">
        <a
          href={props.navLink__id}
          className="nav__link"
          onClick={() => {
            props.setIsNavToggle(!props.isNavToggle);
          }}
        >
          {props.navLink__name}
        </a>
      </ul>
    </React.Fragment>
  );
}

function Navbar({ inView }) {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const color = "white";
  // const [isNavLink , setIsNavLink] = useState(false);

  const handleClick = () => {
    console.log(!isNavToggle);
    setIsNavToggle(!isNavToggle);
  };

  //array__navList
  const navLink__name = ["UPSC 2025", "UPSC 2026", "Login"];
  const navLink__id = ["#upsc_2025", "#upsc_2026", "#login"];

  const iteration = [0, 1];

  return (
    <header
      style={{
        "--nav-color": inView && color,
        "--nav-back-color": inView && "#5935e1",

        //not dynamic
        "--nav-option-color": !inView && "white",
      }}
      className="header"
      id="header"
    >
      <nav className="nav container">
        <a href="#mentor__guru" className="nav__logo">
          Mentor Guru
        </a>
        <div
          className={`nav__menu ${isNavToggle ? "show__menu" : ""}`}
          id="nav-menu"
        >
          <div className="nav__items">
            <li className="nav__list grid">
              {iteration.map((num) => {
                return (
                  <NavbarList
                    key={navLink__id[num]}
                    navLink__id={navLink__id[num]}
                    navLink__name={navLink__name[num]}
                    setIsNavToggle={setIsNavToggle}
                    isNavToggle={isNavToggle}
                  />
                );
              })}
            </li>
            <div
              className="nav__show nav__login"
              onClick={handleClick}
              id="nav__show"
            >
              <div>Login</div>
            </div>
          </div>
          <UilTimes
            id="nav-close"
            className="nav__close"
            onClick={handleClick}
          />
        </div>

        <div className="nav__btns">
          <div
            className="nav__toggle nav__login"
            onClick={handleClick}
            id="nav-toggle"
          >
            <div>Login</div>
          </div>
          <div className="nav__toggle" onClick={handleClick} id="nav-toggle">
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
