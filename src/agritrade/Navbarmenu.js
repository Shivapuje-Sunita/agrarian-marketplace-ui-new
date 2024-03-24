import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import logo from "C:/front_end_projects/my-app/src/agritrade/logo1.png";
import "./App.css";

const navItems = [
  {
    title: "Home",
    ref: "/",
  },
  {
    title: "Products",
    ref: "/product-list",
  },
  {
    title: "About",
    ref: "/about",
  },
  {
    title: "Login",
    ref: "/login",
  },
  {
    title: "Orders",
    ref: "/orders",
  },
];

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu((isMenu) => !isMenu);
    setResponsiveclose((isResponsiveclose) => !isResponsiveclose);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu((isMenuSubMenu) => !isMenuSubMenu);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  }
  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink onClick={toggleClass} to="/">
              <img src={logo} alt="logo" />
            </NavLink>{" "}
          </div>{" "}
          <div className="header__middle__menus">
            <nav className="main-nav">
              {" "}
              {isResponsiveclose === true ? (
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  {" "}
                  <FiXCircle />{" "}
                </span>
              ) : (
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  {" "}
                  <FiAlignRight />{" "}
                </span>
              )}{" "}
              <ul className={boxClass.join(" ")}>
                {navItems.map((item) => {
                  return (
                    <li className="menu-item" key={item.ref}>
                      <NavLink
                        key={item.ref}
                        onClick={toggleClass}
                        to={item.ref}
                      >
                        {" "}
                        {item.title}{" "}
                      </NavLink>{" "}
                    </li>
                  );
                })}
              </ul>
            </nav>{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Navbarmenu;
