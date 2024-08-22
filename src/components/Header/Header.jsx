import React, { useRef } from "react";

import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/all-images/marlon.jpeg";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <img
              style={{ width: "70px", height: "60px", borderRadius: "15px" }}
              src={logo}
            />
            <div className="navigation__wrapper">
              <span className="mobile__menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                      style={{}}
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
