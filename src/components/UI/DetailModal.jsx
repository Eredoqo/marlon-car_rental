import React from "react";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import "./../../styles/moda-details.css";

const DetailsModal = ({ item, modal, toggle }) => {
  const {
    imgUrl,
    model,
    carName,
    automatic,
    speed,
    price,
    description,
    gps,
    seatType,
    brand,
  } = item;

  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalBody className="modal-body">
        <Row>
          {/* Left Column for Image */}
          <Col lg="6" md="6" sm="12" className="mb-4">
            <img src={imgUrl} alt={carName} className="w-100 pt-5" />
          </Col>

          {/* Right Column for Details */}
          <Col lg="6" md="6" sm="12">
            <div className="car__info d-flex flex-column">
              <h2 className="section__title">{carName}</h2>

              <div className="d-flex align-items-center gap-3 mb-4 mt-3">
                <h6 className="rent__price fw-bold fs-4">€{price}.00 / Day</h6>

                <span className="d-flex align-items-center gap-1">
                  <span style={{ color: "#f9a826" }}>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </span>
                </span>
              </div>

              <p className="section__description">{description}</p>

              <div className="d-flex flex-column mt-3">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {model}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {automatic}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {speed}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-map-pin-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {gps}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {seatType}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {brand}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default DetailsModal;
