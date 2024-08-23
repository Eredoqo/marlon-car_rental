import React, { useRef } from "react";
import { Container } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaHome,
  FaInfo,
  FaWrench,
  FaCar,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import "../../styles/header.css";
import logo from "../../assets/all-images/marlon.jpeg";

const navLinks = [
  {
    path: "/",
    display: "Home",
    icon: <FaHome size={25} />,
  },
  {
    path: "/#about",
    display: "About",
    icon: <FaInfo size={25} />,
  },
  {
    path: "/#services",
    display: "Services",
    icon: <FaWrench size={25} />,
  },
  {
    path: "/#cars",
    display: "Cars",
    icon: <FaCar size={25} />,
  },
  {
    path: "/#blogs",
    display: "Blog",
    icon: <FaBlog size={25} />,
  },
  {
    path: "/#contact",
    display: "Contact",
    icon: <FaEnvelope size={25} />,
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
              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
              <div className="navigation" ref={menuRef}>
                <span className="close__menu" onClick={toggleMenu}>
                  <i class="ri-close-line"></i>
                </span>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <Link to={item.path} className="nav__item" key={index}>
                      {item.icon}
                      {item.display}
                    </Link>
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
