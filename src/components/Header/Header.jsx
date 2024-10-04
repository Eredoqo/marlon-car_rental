import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import {
  FaHome,
  FaInfo,
  FaWrench,
  FaCar,
  FaBlog,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import "../../styles/header.css";
import logo from "../../assets/all-images/marlon-logo.png";

const navLinks = [
  {
    path: "home",
    display: "Home",
    icon: <FaHome size={27} />,
  },
  {
    path: "about",
    display: "About",
    icon: <FaInfo size={27} />,
  },
  {
    path: "services",
    display: "Services",
    icon: <FaWrench size={27} />,
  },
  {
    path: "cars",
    display: "Cars",
    icon: <FaCar size={27} />,
  },
  {
    path: "blogs",
    display: "Blog",
    icon: <FaBlog size={27} />,
  },
  {
    path: "contact",
    display: "Contact",
    icon: <FaEnvelope size={27} />,
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        setShowScrollToTop(headerBottom < 0);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const closeMenu = () => {
    if (menuRef.current.classList.contains("menu__active")) {
      menuRef.current.classList.remove("menu__active");
    }
  };

  const handleNavClick = (event, path) => {
    event.preventDefault();
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="main__navbar">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <img
              style={{ width: "70px", height: "60px", borderRadius: "15px" }}
              src={logo}
              alt="Logo"
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
                          <a
                            href={`#${item.path}`}
                            className="nav__item__mobile"
                            onClick={(e) => handleNavClick(e, item.path)}
                          >
                            <span>{item.display}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <a
                      href={`#${item.path}`}
                      className="nav__item"
                      key={index}
                      onClick={(e) => handleNavClick(e, item.path)}
                    >
                      {item.display}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      {showScrollToTop && (
        <a
          href="#top"
          className="scroll-to-top"
          onClick={(e) => handleNavClick(e, "top")}
        >
          <FaArrowUp size={25} color="#000" />
        </a>
      )}
    </header>
  );
};

export default Header;
