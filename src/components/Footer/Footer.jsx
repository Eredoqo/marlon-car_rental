import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "../../styles/footer.css";
import logo from "./../../assets/all-images/marlon-removebg-preview.png";

const quickLinks = [
  {
    path: "/#about",
    display: "About",
  },
  {
    path: "/#cars",
    display: "Car Listing",
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id="contact" className="footer">
      <Container>
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <Link to="/" className=" d-flex align-items-center gap-2">
                <img
                  src={logo}
                  style={{
                    width: "100px",
                    height: "80px",
                    borderRadius: "15px",
                  }}
                />
              </Link>
            </div>
            <p className="footer__logo-content">
              Marlon Car Rentals, your trusted partner for comfortable and
              affordable car rental services.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-1 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contact Information</h5>
              <p className="office__info">
                <GoLocation style={{ color: " #01530d" }} /> Tirana Airport
                Albania
              </p>
              <p className="office__info">
                <AiOutlinePhone style={{ color: " #01530d" }} /> Phone: +355 68
                304 8393 / +355 69 602 2177
              </p>
              <p className="office__info">
                <AiOutlineMail style={{ color: " #01530d" }} /> Email:
                marlonrentalcars@gmail.com
              </p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Marlon
                Car Rentals. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
