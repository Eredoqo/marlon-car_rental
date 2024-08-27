import React, { useEffect, useRef, useState } from "react";
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
    icon: <FaHome size={30} />,
  },
  {
    path: "/#about",
    display: "About",
    icon: <FaInfo size={30} />,
  },
  {
    path: "/#services",
    display: "Services",
    icon: <FaWrench size={30} />,
  },
  {
    path: "/#cars",
    display: "Cars",
    icon: <FaCar size={30} />,
  },
  {
    path: "/#blogs",
    display: "Blog",
    icon: <FaBlog size={30} />,
  },
  {
    path: "/#contact",
    display: "Contact",
    icon: <FaEnvelope size={30} />,
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const closeMenu = () => {
    if (menuRef.current.classList.contains("menu__active")) {
      menuRef.current.classList.remove("menu__active");
    }
  };

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
              {isMobile ? (
                <>
                  <span className="mobile__menu" onClick={toggleMenu}>
                    <i className="ri-menu-line"></i>
                  </span>
                  <div className="navigation" ref={menuRef}>
                    <span className="close__menu" onClick={toggleMenu}>
                      <i className="ri-close-line"></i>
                    </span>

                    <div className="menu">
                      {navLinks.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <span className="icon">{item.icon}</span>
                          <Link
                            to={item.path}
                            className="nav__item__mobile"
                            key={index}
                            onClick={closeMenu}
                          >
                            <span>{item.display}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <Link to={item.path} className="nav__item" key={index}>
                      {item.display}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
