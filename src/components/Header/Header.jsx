import React, { useRef } from "react";
import { Container } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
import "../../styles/header.css";
import logo from "../../assets/all-images/marlon.jpeg";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/#about",
    display: "About",
  },
  {
    path: "/#services",
    display: "Services",
  },
  {
    path: "/#cars",
    display: "Cars",
  },
  {
    path: "/#blogs",
    display: "Blog",
  },
  {
    path: "/#contact",
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
              alt="Logo"
            />
            <div className="navigation__wrapper">
              <span className="mobile__menu">
                <i className="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef}>
                <div className="menu">
                  <div className="menu__header justify-content-end">
                    <span className="close__menu" onClick={toggleMenu}>
                      &times;
                    </span>
                  </div>
                  <div className="menu__links">
                    {navLinks.map((item, index) => (
                      <Link to={item.path} className="nav__item" key={index}>
                        {item.display}
                      </Link>
                    ))}
                  </div>
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
